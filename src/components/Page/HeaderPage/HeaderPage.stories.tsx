import { StoryFn, Meta } from "@storybook/react";
import { HeaderPage as HeaderPageBase } from "./HeaderPage";

export default {
  title: "ReactComponentLibrary/Page/HeaderPage",
  component: HeaderPageBase,
} as Meta<typeof HeaderPageBase>;

const Template: StoryFn<typeof HeaderPageBase> = ({ ...args }) => (
  <HeaderPageBase {...args} />
);

export const HeaderPage = Template.bind({});
HeaderPage.args = {
  title: "Solicitações de estorno de multa",
  subtitle: "Pedidos para estorno de multa por pedidos recusados",
};
