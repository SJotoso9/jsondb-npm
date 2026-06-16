const { readFileSync, writeFileSync } = require('fs')

module.exports = (dbFile) => {
    const current = JSON.parse(readFileSync(dbFile))
    return current
}