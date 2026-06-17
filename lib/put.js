const { readFileSync, writeFileSync } = require('fs')

/*
    NOTE: keyName is just used if type of database is not array
    (this is determined by the arrayBool parameter)
*/

module.exports = (dbFile, data, keyName, arrayBool) => {
    if (arrayBool) {try {
        let current = JSON.parse(readFileSync(dbFile))
        current.push(data)

        writeFileSync(dbFile, JSON.stringify(current))
    } catch (err) {
        throw err
    }} else {
        try {let current = JSON.parse(readFileSync(dbFile))
        current[keyName] = data

        writeFileSync(dbFile, JSON.stringify(current))} catch (err) {
            throw err
        }
    }
}