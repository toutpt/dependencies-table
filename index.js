/* jshint:node */

var gh = require('github-url-to-object');
var path = require('path');
var mdtable = require('markdown-table');


var argv = require('yargs')
  .usage('Usage: readme path/to/package.json')
  .check(function(argv) {
    if (!argv._.length) throw 'A path to a valid package.json is required';
    return true;
  })
  .help('help')
  .alias('h', 'help')
  .argv;

var pkgPath = path.resolve(process.cwd(), argv._[0]);

try {
    var pkg = require(pkgPath);
} catch(e) {
    return console.error('Invalid JSON file: %s', pkgPath)
}
pkg.private = pkg.private || pkg.license === 'private' || false;

function getDep(depname){
    var depath = `${path.resolve(path.dirname(argv._[0]))}/node_modules/${depname}/package.json`;
    var dep = require(depath);
    if (dep.repository && dep.repository.url && gh(dep.repository.url)) {
        dep.repository.gh = gh(dep.repository.url);
    }
    return dep;
}
function getDeps(deps) {
    return Object.keys(deps).map(getDep);
}
var footer = [];
function getTravisBadge(name, user, repo, branch) {
    footer.push(`[${name}-ci-image]: https://travis-ci.org/${user}/${repo}.svg?branch=${branch}`);
    footer.push(`[${name}-ci-url]: https://travis-ci.org/${user}/${repo}`);
    return `[![Travis CI][${name}-ci-image] ][${name}-ci-url]`;
}
function getDependenciesBadge(name, user, repo) {
    footer.push(`[${name}-dep-image]: https://david-dm.org/${user}/${repo}.svg`);
    footer.push(`[${name}-dep-url]: https://david-dm.org/${user}/${repo}`);
    return `[![dependencies][${name}-dep-image] ][${name}-dep-url]`;
}
function getDevDependenciesBadge(name, user, repo) {
    footer.push(`[${name}-devdep-image]: https://david-dm.org/${user}/${repo}/dev-status.svg`);
    footer.push(`[${name}-devdep-url]: https://david-dm.org/${user}/${repo}#?info=DevDependencies`);
    return `[![dev dependencies][${name}-devdep-image] ][${name}-devdep-url]`;
}
function getRows(deps) {
    return Object.keys(deps).map(getRow);
}

function getRow(dependency) {
    if (!dependency.repository) {
        return [dependency.name, 'x', 'x', 'x'];
    }
    var info = dependency.repository.gh;
    return [
        dependency.name,
        getTravisBadge(dependency.name, info.user, info.repo, info.branch),
        getDependenciesBadge(dependency.name, info.user, info.repo),
        getDevDependenciesBadge(dependency.name, info.user, info.repo),
    ];
}
var table = [['repo', 'travis', 'dependencies', 'devDependencies']];
if (pkg.dependencies) {
    pkg.depDetails = getDeps(pkg.dependencies);
    pkg.depDetails.map(function (detail) {
        table.push(getRow(detail));
    });
}
if (pkg.devDependencies){
    pkg.devDepDetails = getDeps(pkg.devDependencies);
    pkg.devDepDetails.map(function (detail) {
        table.push(getRow(detail));
    });
}
console.log(mdtable(table));
console.log('\n');
console.log(footer.join('\n'));