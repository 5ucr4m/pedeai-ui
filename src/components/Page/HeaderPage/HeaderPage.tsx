import React from "react";

import { HeaderPageProps } from "./HeaderPage.types";
import { Heading } from "../../Heading";
import { Text } from "../../Text";

export const HeaderPage: React.FC<HeaderPageProps> = ({
  title,
  subtitle,
  titleSize = 24,
  subtitleSize = 16,
  gap = 0,
  px = 0,
  py = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
}) => {
  return (
    <div
      className={"flex flex-col"}
      style={{
        gap: gap,
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      <Heading size={titleSize}>{title}</Heading>
      <Text size={subtitleSize}>{subtitle}</Text>
    </div>
  );
};

export default HeaderPage;
