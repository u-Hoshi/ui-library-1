# eslint-prettierの環境構築

## インストール

```sh
$ npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier prettier
```

## 各パッケージについて

- @typescript-eslint/eslint-plugin
  - TypeScript用のESLintプラグイン
- @typescript-eslint/parser
  - TypeScript用のESLintパーサー
- eslint-config-airbnb
  - AirbnbのESLintルール(厳しめ)
- eslint-config-airbnb-typescript
  - AirbnbのESLintルール(TypeScript用)
- eslint-config-prettier
  - PrettierのESLintルール
- prettier
  - コードフォーマッター

## .eslintrc.jsの設定

[.eslintrc.json](https://github.com/u-Hoshi/ui-library-1/blob/main/.eslintrc.json)を参照

## prettierの設定

prettierは基本的にvscodeのautoFixOnSaveを使う。そのための初期設定を行う。

1. vscodeの拡張機能からprettierをインストール
2. setting.jsonで下記の記述を追加

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### prettierのコマンドで実行する場合

下記のコマンドでフォーマット結果を上書きする。

```sh
$ yarn prettier --write .
```
