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

    const repository = new Repository(`db/${process.env.USER}.sqlite3`)

    return {
      params,
      repository
    }
  }
}

module.exports = Setup
