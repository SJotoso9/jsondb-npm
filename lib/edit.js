const { readFileSync, writeFileSync } = require('fs')

/*
    NOTE: keyName is just used if type of database is not array
    (this is determined by the arrayBool parameter)
*/

module.exports = (dbFile, idx, data, keyName, arrayBool) => {
    if (arrayBool) {let current = JSON.parse(readFileSync(dbFile))
    try {
        current[idx] = data
        writeFileSync(dbFile, JSON.stringify(current))
    } catch (err) {
        throw err
    }} else {
        let current = JSON.parse(readFileSync(dbFile))
        try {
            current[keyName] = data
            writeFileSync(dbFile, JSON.stringify(current))
        } catch (err) {
            throw err
        }
    }
}