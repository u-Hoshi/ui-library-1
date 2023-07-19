import { Meta, StoryObj } from '@storybook/react';

import CustomForm from './index';

const meta: Meta<typeof CustomForm> = {
  component: CustomForm,
  args: {
    // activeAvatarIndex: 0,
  },
};

export default meta;

/**
 * ## 仕様
 * - AvatarImagesの配列を作成し、mapで回して表示
 * - 画像をクリックしたら、activeAvatarIndexのステートを更新
 * - activeAvatarIndexとindexが一致したら、チェックマークを表示し中央でも表示
 *
 * ## Storyで確認すること
 * 1. AvatarImagesの配列の定義はどこか？
 * 2. activeAvatarIndexのステート=チェックマークの表示は、Formで定義しているのか？Avatarとして定義しているのか？→FormにはチェックがあるがAvatarにはないと言うことはFormで定義していることがわかる
 * →Avatarのストーリを書く動機となる
 *
 * ## 課題
 * - FormのストーリーのControlに何を書くべきかわからない
 *
 * →現状propsから受け取ってるものはなく画像の定義などはFormで行っているため画像関連情報はControlに書かない
 * - useStateに関するものはあまりControlに書かない?
 *
 * このストーリーでは
 * - チェックマークの定義はFormで行っている
 * - 中央のAvatar表示はFormで行っている
 *
 * を伝えたいからControlの中身について一旦保留
 */
export const Form: StoryObj<typeof CustomForm> = {
  args: {
    // activeAvatarIndex: 0,
  },
};
