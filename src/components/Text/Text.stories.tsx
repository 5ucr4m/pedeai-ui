import { StoryFn, Meta } from "@storybook/react";
import { Text as TextBase } from "./Text";

export default {
  title: "ReactComponentLibrary/Text",
  component: TextBase,
} as Meta<typeof TextBase>;

const Template: StoryFn<typeof TextBase> = ({ children, ...args }) => (
  <TextBase {...args}>{children}</TextBase>
);

export const Text = Template.bind({});
Text.args = {
  size: 14,
  children: "Hello World",
};
