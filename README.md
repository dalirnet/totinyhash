# Tinyhash

tiny hash generator

-   no dependency
-   fast and tiny `(about 1k in gzip)`
-   ready for wabpack [css-loader](https://webpack.js.org/loaders/css-loader/) as a custom `getLocalIdent`

### Installation

```bash
# npm
npm install totinyhash
# yarn
yarn add totinyhash
```

### How to use

```javascript
const hashed = totinyhash("tinyhash")
// hashed equal "tRXXS"
```

-   First argument: Input

    -   type: String
    -   default: null

```javascript
const hashed = totinyhash("tinyhash", ["z", "s", "x", "w", "y", "r", "v", "t", "u", "q"])
// hashed equal "tWZZT"
```

-   Second argument: HashMap

    -   type: Array
    -   default: ['x', 't', 'z', 'r', 'y', 'w', 'v', 's', 'q', 'u']

#### Test

```bash
yarn test
```

-   default

```bash
 PASS  test/default.test.js
  ✓ null to equal false
  ✓ "" to equal false
  ✓ "tinyhash" to equal "tRXXS"
  ✓ "long string with space and $,@ chars and 10,50 numbers" to equal "lswsaca15nQXRZW"
```

-   custom-hash

```bash
 PASS  test/custom-hash.test.js
  ✓ "tinyhash" to equal "tWZZT"
```

-   css-loader

```bash
 PASS  test/css-loader.test.js
  ✓ "my-component" to equal "mcVXYZ"
  ✓ "my-component__light" to equal "mclTRXZW"
  ✓ "my-component--container" to equal "mccZXWXV"
  ✓ "my-component--container__dark" to equal "mccdZUWTZ"
```
