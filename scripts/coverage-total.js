import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @typedef {Object} CoverageMetric
 * @property {number} total - Total number of items.
 * @property {number} covered - Number of covered items.
 * @property {number} skipped - Number of skipped items.
 * @property {number} pct - Percentage of coverage.
 */

/**
 * @typedef {Object} CoverageSummary
 * @property {CoverageMetric} lines - Coverage metrics for lines.
 * @property {CoverageMetric} statements - Coverage metrics for statements.
 * @property {CoverageMetric} functions - Coverage metrics for functions.
 * @property {CoverageMetric} branches - Coverage metrics for branches.
 * @property {Record<string, CoverageMetric>} [key] - Additional keys for future metrics.
 */

/**
 * @typedef {Object} ConsolidatedCoverageReport
 * @property {Partial<CoverageSummary>} total - Total consolidated coverage summary.
 * @property {Record<string, Partial<CoverageSummary> | undefined>} [packageName]
 * - Per-package coverage summaries or undefined if not available.
 */

/**
 * Get all paths for the coverage summary files for packages.
 * @returns {Record<string, string>} A record mapping package names to their coverage summary paths.
 */
function getAllPathsForPackagesSummaries() {
  /**
   * Get directories from a given source path.
   * @param {string} source - The base directory to list subdirectories from.
   * @returns {string[]} An array of directory names.
   */
  const getDirectories = (source) =>
    fs
      .readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

  const appsPath = path.join(__dirname, '..', 'apps');
  const appsNames = getDirectories(appsPath);

  const appsSummaries = appsNames.reduce((summary, appName) => {
    return {
      ...summary,
      [appName]: path.join(appsPath, appName, 'coverage', 'coverage-summary.json'),
    };
  }, {});

  const packagesPath = path.join(__dirname, '..', 'packages');
  const packageNames = getDirectories(packagesPath);

  const packagesSummaries = packageNames.reduce((summary, packageName) => {
    return {
      ...summary,
      [packageName]: path.join(
        packagesPath,
        packageName,
        'coverage',
        'coverage-summary.json'
      ),
    };
  }, {});

  return { ...appsSummaries, ...packagesSummaries };
}

/**
 * Reads summary per package and creates a joined summary report with totals.
 * @param {Record<string, string>} packagesSummaryPaths - A record mapping package names to
 * their coverage summary paths.
 * @returns {ConsolidatedCoverageReport} The consolidated coverage report.
 */
function readSummaryPerPackageAndCreateJoinedSummaryReportWithTotal(packagesSummaryPaths) {
  return Object.keys(packagesSummaryPaths).reduce(
    (summary, packageName) => {
      const reportPath = packagesSummaryPaths[packageName];
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

        const { total } = summary;

        Object.keys(report.total).forEach((key) => {
          if (total[key]) {
            total[key].total += report.total[key].total;
            total[key].covered += report.total[key].covered;
            total[key].skipped += report.total[key].skipped;
            total[key].pct = Number(
              ((total[key].covered / total[key].total) * 100).toFixed(2)
            );
          } else {
            total[key] = { ...report.total[key] };
          }
        });
        return { ...summary, [packageName]: report.total, total };
      }

      return summary;
    },
    { total: {} }
  );
}

/**
 * Creates a coverage report formatted for visual representation.
 * @param {ConsolidatedCoverageReport} coverageReport - The consolidated coverage report.
 * @returns {Record<string, Record<string, number>>} The reformatted report for visual representation.
 */
function createCoverageReportForVisualRepresentation(coverageReport) {
  return Object.keys(coverageReport).reduce((report, packageName) => {
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
