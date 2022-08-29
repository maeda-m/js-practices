#!/usr/bin/env node
'use strict'

class FizzBuzz {
  static exec (num) {
    let result = ''

    if (FizzBuzz.#isFizz(num)) {
      result += 'Fizz'
    }

    if (FizzBuzz.#isBuzz(num)) {
      result += 'Buzz'
    }

    if (result === '') {
      result = num
    }

    return result
  }

  static #isFizz (num) {
    return num % 3 === 0
  }

  static #isBuzz (num) {
    return num % 5 === 0
  }
}

for (let step = 1; step <= 20; step++) {
  const result = FizzBuzz.exec(step)
  console.info(result)
}
