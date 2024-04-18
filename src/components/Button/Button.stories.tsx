import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";

//ButtonProps

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const ButtonTest = Template.bind({});
ButtonTest.args = {
  size: "sm",
  children: "Enviar",
  fullWidth: false,
  uppercase: false,
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  children: "Salvar",
  variant: "secondary",
  fullWidth: false,
  uppercase: false,
};
