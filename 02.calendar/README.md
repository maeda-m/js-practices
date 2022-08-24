# カレンダーのプログラム(JavaScript)

## 実行方法

```
$ cd ./js-practices/02.calendar
$ ./cal.js -y 2020 -m 11
```

## テスト方法

```
$ cd ./js-practices/02.calendar
$ npm run test

> test
> jest

 PASS  ./calendar.test.js (7.724 s)
  カレンダー表示
    ✓ 2022年03月のカレンダーが表示できること (12 ms)
    ✓ 下限である1970年のカレンダーが表示できること
    ✓ 上限である2100年のカレンダーが表示できること (1 ms)
    ✓ 4週表記となるカレンダーが表示できること (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        8.545 s
Ran all test suites.
```

## Linter

```
$ cd ./js-practices/02.calendar
$ npx eslint cal.js
```
