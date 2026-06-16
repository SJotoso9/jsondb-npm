const setup = require('./setup')
const put = require('./put')
const edit = require('./edit')
const load = require('./load')
const deleted = require('./delete')

function jsondb(dbName) {
    this.dbName = dbName
    setup(this.dbName)

    this.put = function(data) {
        put(this.dbName, data)
    }
    this.edit = function(idx, data) {
        edit(this.dbName, idx, data)
    }
    this.load = function() {
        let db = load(this.dbName)
        return db
    }
    this.delete = function(idx) {
        deleted(this.dbName, idx)
    }
}

module.exports = jsondb