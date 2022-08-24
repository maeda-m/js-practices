const Calendar = require('./calendar')

describe('カレンダー表示', () => {
  it('2022年03月のカレンダーが表示できること', () => {
    const cal = new Calendar(2022, 3)

    const received = cal.show()
    const expected = [
      '     03月 2022',
      '日 月 火 水 木 金 土',
      '       1  2  3  4  5 ',
      ' 6  7  8  9 10 11 12 ',
      '13 14 15 16 17 18 19 ',
      '20 21 22 23 24 25 26 ',
      '27 28 29 30 31 '
    ].join('\n')

    expect(received).toEqual(expected)
  })

  it('下限である1970年のカレンダーが表示できること', () => {
    const cal = new Calendar(1970, 1)

    const received = cal.show()
    const expected = [
      '     01月 1970',
      '日 月 火 水 木 金 土',
      '             1  2  3 ',
      ' 4  5  6  7  8  9 10 ',
      '11 12 13 14 15 16 17 ',
      '18 19 20 21 22 23 24 ',
      '25 26 27 28 29 30 31 '
    ].join('\n')

    expect(received).toEqual(expected)
  })

  it('上限である2100年のカレンダーが表示できること', () => {
    const cal = new Calendar(2100, 12)

    const received = cal.show()
    const expected = [
      '     12月 2100',
      '日 月 火 水 木 金 土',
      '          1  2  3  4 ',
      ' 5  6  7  8  9 10 11 ',
      '12 13 14 15 16 17 18 ',
      '19 20 21 22 23 24 25 ',
      '26 27 28 29 30 31 '
    ].join('\n')

    expect(received).toEqual(expected)
  })

  it('4週表記となるカレンダーが表示できること', () => {
    const cal = new Calendar(2009, 2)

    const received = cal.show()
    const expected = [
      '     02月 2009',
      '日 月 火 水 木 金 土',
      ' 1  2  3  4  5  6  7 ',
      ' 8  9 10 11 12 13 14 ',
      '15 16 17 18 19 20 21 ',
      '22 23 24 25 26 27 28 '
    ].join('\n')

    expect(received).toEqual(expected)
  })
})
