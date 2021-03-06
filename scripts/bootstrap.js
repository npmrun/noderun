// create package.json, README, etc. for packages that don't have them yet

const args = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const path = require('path')
const baseVersion = require('../lerna.json').version

const packagesDir = path.resolve(__dirname, '../packages')
const files = fs.readdirSync(packagesDir)

files.forEach(shortName => {
    if (!fs.statSync(path.join(packagesDir, shortName)).isDirectory()) {
        return
    }

    const name = shortName === `noderun` ? shortName : `@noderun/${shortName}`
    const pkgPath = path.join(packagesDir, shortName, `package.json`)
    if (args.force || !fs.existsSync(pkgPath)) {
        const json = {
            name,
            version: baseVersion,
            description: name,
            main: 'index.js',
            module: `dist/${shortName}.esm.js`,
            typings: 'dist/index.d.ts',
            publishConfig: {
                "access": "public"
            },
            repository: {
                type: 'git',
                url: 'git+https://github.com/1549469775/noderun.git'
            },
            keywords: ['noderun'],
            author: '1549469775',
            license: 'MIT',
            bugs: {
                url: 'https://github.com/1549469775/noderun/issues'
            },
            // homepage: `https://github.com/vuejs/vue/tree/dev/packages/${shortName}#readme`
        }
        fs.writeFileSync(pkgPath, JSON.stringify(json, null, 2))
    }

    const readmePath = path.join(packagesDir, shortName, `README.md`)
    if (args.force || !fs.existsSync(readmePath)) {
        fs.writeFileSync(readmePath, `# ${name} \n > 自用型，有别的需要请直接联系前往我的[github](https://github.com/)`);
    }

    const npmIgnorePath = path.join(packagesDir, shortName, `.npmignore`)
    if (args.force || !fs.existsSync(npmIgnorePath)) {
        fs.writeFileSync(npmIgnorePath, `__tests__/\n__mocks__/\ndist/packages`)
    }

    const srcDir = path.join(packagesDir, shortName, `src`)
    const indexPath = path.join(packagesDir, shortName, `src/index.ts`)
    if (args.force || !fs.existsSync(indexPath)) {
        if (!fs.existsSync(srcDir)) {
            fs.mkdirSync(srcDir)
        }
        fs.writeFileSync(indexPath, ``)
    }

    const nodeIndexPath = path.join(packagesDir, shortName, 'index.js')
    if (args.force || !fs.existsSync(nodeIndexPath)) {
        fs.writeFileSync(
            nodeIndexPath,
            `
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/${shortName}.cjs.prod.js')
} else {
  module.exports = require('./dist/${shortName}.cjs.js')
}
    `.trim() + '\n'
        )
    }
})
