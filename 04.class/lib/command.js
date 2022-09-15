'use strict'

class Command {
  #repository

  constructor (repository) {
    this.#repository = repository
  }

  index () {
    this.#repository.all().then((records) => {
      records.forEach((record) => {
        console.log(record.title)
      })
    })
  }

  show (id) {
    this.#repository.find(id).then((record) => {
      console.log(record.content)
    })
  }

  destroy (id) {
    this.#repository.destroy(id)
  }

  create (content) {
    this.#repository.create(content)
  }
}

module.exports = Command
