const { readFileSync, writeFileSync } = require('fs')

module.exports = (dbFile, idx, data) => {
    let current = JSON.parse(readFileSync(dbFile))
    try {
        current[idx] = data
    } catch (err) {
        throw err
    }

    writeFileSync(dbFile, JSON.stringify(current))
}