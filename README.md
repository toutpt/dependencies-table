# dependencies-table

This is a nodejs script to generate table of dependencies coming from your package.json

# usage example

    node index.js package.json >> README.md

This will achieve the following table:

| repo                 | travis                                                                      | dependencies                                                                     | devDependencies                                                                            |
| -------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| github-url-to-object | [![Travis CI][github-url-to-object-ci-image] ][github-url-to-object-ci-url] | [![dependencies][github-url-to-object-dep-image] ][github-url-to-object-dep-url] | [![dev dependencies][github-url-to-object-devdep-image] ][github-url-to-object-devdep-url] |
| markdown-table       | [![Travis CI][markdown-table-ci-image] ][markdown-table-ci-url]             | [![dependencies][markdown-table-dep-image] ][markdown-table-dep-url]             | [![dev dependencies][markdown-table-devdep-image] ][markdown-table-devdep-url]             |
| yargs                | [![Travis CI][yargs-ci-image] ][yargs-ci-url]                               | [![dependencies][yargs-dep-image] ][yargs-dep-url]                               | [![dev dependencies][yargs-devdep-image] ][yargs-devdep-url]                               |


[github-url-to-object-ci-image]: https://travis-ci.org/zeke/github-url-to-object.svg?branch=master
[github-url-to-object-ci-url]: https://travis-ci.org/zeke/github-url-to-object
[github-url-to-object-dep-image]: https://david-dm.org/zeke/github-url-to-object.svg
[github-url-to-object-dep-url]: https://david-dm.org/zeke/github-url-to-object
[github-url-to-object-devdep-image]: https://david-dm.org/zeke/github-url-to-object/dev-status.svg
[github-url-to-object-devdep-url]: https://david-dm.org/zeke/github-url-to-object#?info=DevDependencies
[markdown-table-ci-image]: https://travis-ci.org/wooorm/markdown-table.svg?branch=master
[markdown-table-ci-url]: https://travis-ci.org/wooorm/markdown-table
[markdown-table-dep-image]: https://david-dm.org/wooorm/markdown-table.svg
[markdown-table-dep-url]: https://david-dm.org/wooorm/markdown-table
[markdown-table-devdep-image]: https://david-dm.org/wooorm/markdown-table/dev-status.svg
[markdown-table-devdep-url]: https://david-dm.org/wooorm/markdown-table#?info=DevDependencies
[yargs-ci-image]: https://travis-ci.org/yargs/yargs.svg?branch=master
[yargs-ci-url]: https://travis-ci.org/yargs/yargs
[yargs-dep-image]: https://david-dm.org/yargs/yargs.svg
[yargs-dep-url]: https://david-dm.org/yargs/yargs
[yargs-devdep-image]: https://david-dm.org/yargs/yargs/dev-status.svg
[yargs-devdep-url]: https://david-dm.org/yargs/yargs#?info=DevDependencies
