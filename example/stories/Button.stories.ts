import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button.js";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    author: "sdandrader"}
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
