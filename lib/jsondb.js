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
    setup(this.dbName, this.arrayBool)

    this.put = function(data, keyName) {
        put(this.dbName, data, keyName, this.arrayBool)
    }
    this.edit = function(idx, data, keyName) {
        edit(this.dbName, idx, data, keyName, this.arrayBool)
    }
    this.load = function() {
        let db = load(this.dbName)
        return db
    }
    this.delete = function(idx, keyName) {
        deleted(this.dbName, idx, keyName, this.arrayBool)
    }
}

module.exports = jsondb