import React from "react";

import { TextProps } from "./Text.types";

export const Text: React.FC<TextProps> = ({ size = 14, children }) => {
  return <span style={{ fontSize: size }}>{children}</span>;
};

export default Text;
