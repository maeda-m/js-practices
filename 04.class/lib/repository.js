'use strict'

const SQLite3 = require('sqlite3')
const { open } = require('sqlite')
const Note = require('./note')

class Repository {
  #driver = SQLite3.Database
  #filename
  #records

  constructor (filename) {
    this.#filename = filename
  }

  #connect () {
    return open({
      filename: this.#filename,
      driver: this.#driver
    })
  }

  async all () {
    if (this.#records) {
      return this.#records
    }

    const db = await this.#connect()
    const sql = 'SELECT * FROM notes ORDER BY id;'
    const rows = await db.all(sql)
    this.#records = rows.map((attrs) => new Note(attrs))
    await db.close()

    return this.#records
  }

  async find (id) {
    const records = await this.all()
    return records.find((record) => record.id === id)
  }

  async create (content) {
    const db = await this.#connect()
    const sql = 'INSERT INTO notes (content) VALUES (?);'
    const values = [content]
    await db.run(sql, values)
    await db.close()
  }

  async destroy (id) {
    const db = await this.#connect()
    const sql = 'DELETE FROM notes WHERE id = ?;'
    await db.run(sql, id)
    await db.close()
  }
}

module.exports = Repository
