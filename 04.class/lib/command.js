'use strict'

class Command {
  #repository

  constructor (repository) {
    this.#repository = repository
  }

  index () {
    const records = this.#repository.all()
    records.forEach((record) => {
      console.log(record.title)
    })
  }

  show (id) {
    const record = this.#repository.find(id)
    console.log(record.content)
  }

  destroy (id) {
    this.#repository.destroy(id)
  }

  create (content) {
    this.#repository.create(content)
  }
}

module.exports = Command
