const setup = require('./setup')
const put = require('./put')
const edit = require('./edit')
const load = require('./load')
const deleted = require('./delete')

/*
    NOTE: keyName is just used if type of database is not array
    (this is determined by the arrayBool parameter)
*/

function jsondb(dbName, arrayBool) {
    this.dbName = dbName
    this.arrayBool = arrayBool
    setup(this.dbName, arrayBool)

    this.put = function(data, keyName, arrayBool) {
        put(this.dbName, data, keyName, arrayBool)
    }
    this.edit = function(idx, data, keyName, arrayBool) {
        edit(this.dbName, idx, data, keyName, arrayBool)
    }
    this.load = function() {
        let db = load(this.dbName)
        return db
    }
    this.delete = function(idx, keyName, arrayBool) {
        deleted(this.dbName, idx, keyName)
    }
}

module.exports = jsondb