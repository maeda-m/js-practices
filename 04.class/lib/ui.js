'use strict'

const { Select } = require('enquirer')
const Readline = require('node:readline')

class UI {
  #repository

  constructor (repository) {
    this.#repository = repository
  }

  select (message) {
    const choices = this.#choices()
    const prompt = new Select({
      message,
      choices,
      result (answer) {
        return this.map(answer)
      }
    })

    return prompt.run().then((choice) => {
      const id = Object.values(choice)[0]
      return id
    })
  }

  async #choices () {
    const records = await this.#repository.all()
    return records.map((record) => {
      return {
        name: record.title,
        value: record.id
      }
    })
  }

  input () {
    const io = Readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    return new Promise((resolve, reject) => {
      const lines = []

      io.on('line', (line) => {
        lines.push(line)
      })

      io.on('close', () => {
        resolve(lines.join('\n'))
      })

      io.on('error', (error) => {
        reject(error)
      })
    })
  }
}

module.exports = UI
