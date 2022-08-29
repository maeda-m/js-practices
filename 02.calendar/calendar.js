'use strict'

module.exports = class Calendar {
  #ROW_WIDTH = 21
  #DAY_PADDING = '   '

  constructor (year, month) {
    const monthIndex = month - 1

    this.beginningOfMonth = new Date(year, monthIndex, 1)
    this.endOfMonth = new Date(year, monthIndex + 1, 0)
  }

  show () {
    return [
      this.#title(),
      this.#header(),
      this.#dates()
    ].join('\n')
  }

  #title () {
    const str = this.beginningOfMonth.toLocaleDateString('en-US', {
      year: 'numeric', month: '2-digit'
    }).replace('/', '月 ')

    return this.#padCenter(str)
  }

  #padCenter (str) {
    const size = Array.from(str).length
    return str.padStart(this.#ROW_WIDTH - size)
  }

  #header () {
    return '日 月 火 水 木 金 土'
  }

  #dates () {
    let result = ''
    for (let step = 1; step <= this.beginningOfMonth.getDay(); step++) {
      result += this.#DAY_PADDING
    }

    this.#eachDaysInMonth(date => {
      const day = date.getDate().toString().padStart(2)
      result += day.padEnd(this.#DAY_PADDING.length)

      if (this.#isNewLineBreak(date)) {
        result += '\n'
      }
    })

    return result
  }

  #eachDaysInMonth (callback) {
    const days = []

    let currentDate = this.beginningOfMonth
    while (currentDate <= this.endOfMonth) {
      days.push(currentDate)
      currentDate = this.#createNextDate(currentDate)
    }

    days.forEach(callback)
  }

  #createNextDate (date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
  }

  #isNewLineBreak (date) {
    const isSaturday = date.getDay() === 6
    const isEndOfMonth = date.getTime() === this.endOfMonth.getTime()

    return isSaturday && !isEndOfMonth
  }
}
