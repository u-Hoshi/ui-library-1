# jestに関して

## インストール

```
$ yarn add --dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

[公式サイト](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library)を参考にインストールする。今回はNext.js13であるため、`Setting up Jest (with the Rust Compiler)`の方を参考にする。

## jest.config.jsを作成する

公式サイトにあるように、`jest.config.js`を作成する。今回は公式と同じように設定した。

基本的のそのままの設定で問題ないが、eslintが引っかかるので`.eslintignore`に`jest.config.js`を追加する。

## テストを書く

試しに書いてみたら`TypeError: expect(...).toBeInTheDocument is not a functionJest`と返ってきてエラーになった。

ファイルに`import '@testing-library/jest-dom'`を追加すると解決した。

## テストを実行する

`package.json`に`"test": "jest --watch",`を追加し実行する。

`jest --watch`を実行すると、ファイルが変更されるたびにテストが実行される。

## ciで回す

今回はすでにlintを回しているので、そこで一緒にjestも実行するようにする。

ci-lint.yamlに以下を追加する。

```
      - name: Run Jest
        run: yarn run jest
```

これでciで回すことができる
