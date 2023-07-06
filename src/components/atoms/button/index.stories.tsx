import { Meta, StoryObj } from "@storybook/react";

import CustomButton from "./index";

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  args: {
    text: "ボタン",
    onClick: () => alert("ボタンがクリックされました"),
  },
};

export default meta;

export const Primary: StoryObj<typeof CustomButton> = {
  args: {
    text: "ボタン",
    onClick: () => alert("ボタンがクリックされました"),
  },
};
