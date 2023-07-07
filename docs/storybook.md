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


