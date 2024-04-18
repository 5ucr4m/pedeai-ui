import React from "react";
import { Button as ButtonBase } from "../ui/button";

import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ children, ...args }) => {
  return <ButtonBase {...args}>{children}</ButtonBase>;
};

export default Button;
