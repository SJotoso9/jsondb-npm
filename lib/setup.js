const { readFilesSync, writeFileSync, readFileSync } = require('fs')

module.exports = (dbFile) => {
    try {
        readFileSync(dbFile)
    } catch (err) {
        console.log(`Database on ${dbFile} not found.`)
        console.log('Creating...')
        writeFileSync(dbFile, JSON.stringify([]))
    }
}