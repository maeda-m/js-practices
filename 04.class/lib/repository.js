'use strict'

const Note = require('./note')

class Repository {
  #filename

  constructor (filename) {
    this.#filename = filename
  }

  #connect () {
    // TODO
  }

  exec (sql) {
    // TODO
  }

  all () {
    // TODO
  }

  find (id) {
    // TODO
  }

  create (content) {
    // TODO
  }

  destroy (id) {
    // TODO
  }
}

module.exports = Repository
