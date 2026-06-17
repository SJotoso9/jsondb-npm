const { readFileSync, writeFileSync } = require('fs')

/*
    NOTE: keyName is just used if type of database is not array
    (this is determined by the arrayBool parameter)
*/

module.exports = (dbFile, idx, keyName, arrayBool) => {
    if (arrayBool) {let current = Array(JSON.parse(readFileSync(dbFile, 'utf-8')))
    current.splice(idx, 1)} else {
        let current = Object(JSON.parse(readFileSync(dbFile)))
        current[keyName] = undefined
    }

    writeFileSync(dbFile, JSON.stringify(current))
}