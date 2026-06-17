const { writeFileSync, readFileSync } = require('fs')

/*
    NOTE: keyName is just used if type of database is not array
    (this is determined by the arrayBool parameter)
*/

module.exports = (dbFile, arrayBool) => {
    if (arrayBool) {try {
        readFileSync(dbFile)
    } catch (err) {
        console.log(`Database on ${dbFile} not found.`)
        console.log('Creating on type Array...')
        writeFileSync(dbFile, JSON.stringify([]))
    }} else {
        try {
            readFileSync(dbFile)
        } catch (err) {
            console.log(`Database on ${dbFile} not found.`)
            console.log('Creating...')
            writeFileSync(dbFile, JSON.stringify({}))
        }
    }
}