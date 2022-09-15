# クラス(JavaScript)

## 実行方法

### 事前準備

```
$ cd ./js-practices/04.class
$ npm install
$ sqlite3 db/${USER}.sqlite3 < db/initdb.sql
```

### 追加

```
$ echo 'メモの内容' | memo.js
```

または

```
$ memo.js
メモの内容
[Ctrl + D]
```

### 一覧

```
$ memo.js -l
メモ1
今日の日記
晩ご飯のレシピ
```

### 参照

```
$ memo.js -r
? Choose a note you want to see …
  メモ1
  今日の日記
▸ 晩ご飯のレシピ
```

```
✔ Choose a note you want to see · 晩ご飯のレシピ
晩ご飯のレシピ
カレー
豚肉
じゃがいも
人参
タマネギ
カレールー
```

### 削除

```
$ memo.js -d
? Choose a note you want to delete …
  メモ1
  今日の日記
▸ 晩ご飯のレシピ
```

```
$ memo.js -d
✔ Choose a note you want to delete · 晩ご飯のレシピ
```

### 編集

未実装

## Linter

```
$ cd ./js-practices/04.class
$ npx eslint bin/*.js lib/*.js
```
