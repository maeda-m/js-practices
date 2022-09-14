'use strict'

const parseArgs = require('minimist')
const Repository = require('../lib/repository')

class Setup {
  static exec () {
    const params = parseArgs(process.argv, {
      default: {
        l: false,
        r: false,
        d: false
      }
    })

    const repository = new Repository(`${process.env.USER}.sqlite3`)
    repository.exec(`
      CREATE TABLE IF NOT EXISTS notes (
        id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        content text
      );
      CREATE UNIQUE INDEX IF NOT EXISTS index_notes_on_id ON notes (id);
    `)

    return {
      params,
      repository
    }
  }
}

module.exports = Setup
