const { readFileSync, writeFileSync } = require('fs')

module.exports = (dbFile, idx) => {
    let current = Array(JSON.parse(readFileSync(dbFile, 'utf-8')))
    current.splice(idx, 1)

    writeFileSync(dbFile, JSON.stringify(current))
}