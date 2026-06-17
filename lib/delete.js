const { readFileSync, writeFileSync } = require('fs')

/*
    NOTE: keyName is just used if type of database is not array
    (this is determined by the arrayBool parameter)
*/

module.exports = (dbFile, idx, keyName, arrayBool) => {
    if (arrayBool) {
        let current = JSON.parse(readFileSync(dbFile))
        current.splice(idx, 1)
        writeFileSync(dbFile, JSON.stringify(current))
    } else {
        let current = Object(JSON.parse(readFileSync(dbFile)))
        current[keyName] = undefined
        writeFileSync(dbFile, JSON.stringify(current))
    }
}