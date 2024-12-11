# Design System Example

## Versioning & publishing packages

### Creating a Github Personal Token

1. Create a Personal Access Token with read and write permissions for repos.
   You can follow the link https://github.com/settings/tokens/new to create one

1. Update (or create) your `.npmrc` file on your `$HOME` directory root

```
//npm.pkg.github.com/:_authToken=<YOUR_TOKEN>
```

### Generating the Changelog

To generate your changelog, run `pnpm changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing

```bash
turbo run build --filter=core-ui^... && changeset publish
```

1. **Turbo Command**:

   - `turbo run build --filter=core-ui^...`:
     - This command uses `turbo`, a tool for speeding up builds in monorepos, to run the `build` script.
     - The `--filter=core-ui^...` option specifies that it should include the `core-ui` package and all its dependents in the build process.
     - The caret `^` character denotes that it will include only the dependencies related to `core-ui` for building, which means it's focusing on a specific part of the codebase associated with `core-ui`.

2. **Changeset Command**:
   - `changeset publish`:
     - This command publishes the packages using `changeset`, a tool for maintaining and releasing versions in monorepos.
     - `changeset publish` reads changeset files created earlier (most likely during a versioning or changeset generation step) and publishes the changes to the package registry, updating the versions of packages as defined.
