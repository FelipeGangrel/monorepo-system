# Monorepo System Example

### Creating a Github Personal Token

1. Create a Personal Access Token with read and write permissions for packages.
   You can follow the link https://github.com/settings/tokens/new to create one

1. Update (or create) your `.npmrc` file on your `$HOME` directory root

```
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```
