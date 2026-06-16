const { readFileSync, writeFileSync } = require('fs')

module.exports = (dbFile, data) => {
    try {
        let current = JSON.parse(readFileSync(dbFile))
        current.push(data)

        writeFileSync(dbFile, JSON.stringify(current))
    } catch (err) {
        throw err
    }
}