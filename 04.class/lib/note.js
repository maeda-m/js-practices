'use strict'

class Note {
  #id
  #content

  constructor (attrs) {
    this.#id = attrs.id
    this.#content = attrs.content
  }

  get id () {
    return this.#id
  }

  get content () {
    return this.#content
  }

  get title () {
    return this.content.split('\n')[0]
  }
}

module.exports = Note
