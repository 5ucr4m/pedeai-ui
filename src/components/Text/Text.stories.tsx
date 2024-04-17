import { StoryFn, Meta } from "@storybook/react";
import Text from "./Text";

export default {
  title: "ReactComponentLibrary/Text",
  component: Text,
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = ({ children, ...args }) => (
  <Text {...args}>{children}</Text>
);

export const TextTest = Template.bind({});
TextTest.args = {
  size: 12,
  children: "Hello World",
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  size: 22,
  children: "Hello World",
};
