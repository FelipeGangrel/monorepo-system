import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type CoverageMetric = {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
};

type CoverageSummary = {
  lines: CoverageMetric;
  statements: CoverageMetric;
  functions: CoverageMetric;
  branches: CoverageMetric;
  [key: string]: CoverageMetric; // Allow for possible future keys.
};

type ConsolidatedCoverageReport = {
  total: Partial<CoverageSummary>;
  [packageName: string]: Partial<CoverageSummary> | undefined;
};

// Function 1: Get all paths for the coverage summary files
function getAllPathsForPackagesSummaries(): Record<string, string> {
  const getDirectories = (source: string): string[] =>
    fs
      .readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

  const appsPath = path.join(__dirname, '..', 'apps');
  const appsNames = getDirectories(appsPath);

  const appsSummaries = appsNames.reduce(
    (summary, appName) => {
      return {
        ...summary,
        [appName]: path.join(
          appsPath,
          appName,
          'coverage',
          'coverage-summary.json'
        ),
      };
    },
    {} as Record<string, string>
  );

  const packagesPath = path.join(__dirname, '..', 'packages');
  const packageNames = getDirectories(packagesPath);

  const packagesSummaries = packageNames.reduce(
    (summary, packageName) => {
      return {
        ...summary,
        [packageName]: path.join(
          packagesPath,
          packageName,
          'coverage',
          'coverage-summary.json'
        ),
      };
    },
    {} as Record<string, string>
  );

  return { ...appsSummaries, ...packagesSummaries };
}

// Function 2: Create a consolidated report from the summary paths
function readSummaryPerPackageAndCreateJoinedSummaryReportWithTotal(
  packagesSummaryPaths: Record<string, string>
): ConsolidatedCoverageReport {
  return Object.keys(packagesSummaryPaths).reduce<ConsolidatedCoverageReport>(
    (summary, packageName) => {
      const reportPath = packagesSummaryPaths[packageName];
      if (fs.existsSync(reportPath)) {
        const report: { total: CoverageSummary } = JSON.parse(
          fs.readFileSync(reportPath, 'utf8')
        );

        const { total } = summary;

        Object.keys(report.total).forEach((key) => {
          if (total[key]) {
            total[key]!.total += report.total[key].total;
            total[key]!.covered += report.total[key].covered;
            total[key]!.skipped += report.total[key].skipped;
            total[key]!.pct = Number(
              ((total[key]!.covered / total[key]!.total) * 100).toFixed(2)
            );
          } else {
            total[key] = { ...report.total[key] };
          }
        });
        return { ...summary, [packageName]: report.total, total };
      }

      return summary;
    },
    { total: {} } as ConsolidatedCoverageReport
  );
}

// Function 3: Create coverage report for visualization purposes
function createCoverageReportForVisualRepresentation(
  coverageReport: ConsolidatedCoverageReport
): Record<string, Record<string, number>> {
  return Object.keys(coverageReport).reduce<
    Record<string, Record<string, number>>
  >((report, packageName) => {
    if (packageName === 'total') return report; // Skip 'total'

    const packageSummary = coverageReport[packageName];
    if (!packageSummary) return report; // In case of undefined

    const { lines, statements, functions, branches } = packageSummary;

    return {
      ...report,
      [packageName]: {
        lines: lines?.pct || 0,
        statements: statements?.pct || 0,
        functions: functions?.pct || 0,
        branches: branches?.pct || 0,
      },
    };
  }, {});
}

// Execution Stages
// 1. Read all coverage-summary.json files
const packagesSummaryPaths = getAllPathsForPackagesSummaries();
// 2. Generate consolidated report
const currCoverageReport =
  readSummaryPerPackageAndCreateJoinedSummaryReportWithTotal(
    packagesSummaryPaths
  );
// 3. Reformat the report for visual representation
const coverageReportForVisualRepresentation =
  createCoverageReportForVisualRepresentation(currCoverageReport);
// 4. Print the report
console.table(coverageReportForVisualRepresentation);
