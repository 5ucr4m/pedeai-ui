import { StoryFn, Meta } from "@storybook/react";
import { Heading as HeadingBase } from "./Heading";

export default {
  title: "ReactComponentLibrary/Heading",
  component: HeadingBase,
} as Meta<typeof HeadingBase>;

const Template: StoryFn<typeof HeadingBase> = ({ children, ...args }) => (
  <HeadingBase {...args}>{children}</HeadingBase>
);

export const Heading = Template.bind({});
Heading.args = {
  size: 20,
  children: "Heading...",
};
