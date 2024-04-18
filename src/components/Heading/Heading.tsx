import React from "react";

import { HeadingProps } from "./Heading.types";

export const Heading: React.FC<HeadingProps> = ({ size = 14, children }) => {
  return (
    <p className="font-semibold" style={{ fontSize: size }}>
      {children}
    </p>
  );
};

export default Heading;
