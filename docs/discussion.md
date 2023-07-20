# 検討事項
悩んだ点を記録しておくファイル

<details>
<summary></summary>

</details>

<details>
<summary>avatarにonclickを持たせるべきなのか？</summary>

avatarが絶対にonClickを持っているとは限らない。そのため、avatarにonClickを持たせるのは適切ではない...？

代わりにavatarをboxでラップしてonClickをオプショナルにした方が良い...?  

</details>

<details>
<summary>buttonのonClickをもう少し見やすいしたい</summary>

現状buttonにonClickを確認しづらい

![](public/button-onClick.png)

Controlsでは`onClick`だけ入力ができない

![](public/button-Docs.png)

onClickのDescriptionがsignatureと表示されている。

せめてstorybook上のbuttonをクリックしたらActionsに何かしらが表示されるようにしたい。

</details>