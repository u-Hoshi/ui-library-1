# eslintの環境構築

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
