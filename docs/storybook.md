# storybookに関して

## インストール
```
$ yarn add storybook@latest init
$ yarn storybook init
```
これらでインストールした後
```
$ yarn storybook
```
で起動できる。

## muiのthemeをstorybookで適用させる

```ts:.storybook/preview.tsx
export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme, // 一旦は lightにthemeを設定
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
];
```


## Chromaticにデプロイ
[Chromatic](https://www.chromatic.com/?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook)にアクセスして、GitHubアカウントでサインアップ

組織を選択してプロジェクトを選択

![](public/chromatic.png)

パッケージをインストール
```
$ yarn add --dev chromatic
$ npx chromatic --project-token=CHROMATIC_PROJECT_TOKEN
```

デプロイする際に、`⚠ No 'chromatic' script found in your package.json
Would you like me to add it for you? [y/N]`は「y」と答えると、scripts に chromatic が追加されて、さっきのcommandが登録される

https://www.chromatic.com/setup?appId=64a8009ea6fee9b63fbd6a01 に登録する

このままcommitするとChromaticのトークンが漏れるので、環境変数に登録する

```
"chromatic": "npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN"
```

https://www.chromatic.com/build?appId=64a8009ea6fee9b63fbd6a01



