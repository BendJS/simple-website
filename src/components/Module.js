import React from "react";
import { StyledModule } from "../UI/Common";

export default function Module({
  heading,
  subheading,
  text,
  buttons,
  large = false,
  children = null
}) {
  return (
    <StyledModule>
      <h2 className="heading">{heading}</h2>
      <p className="subheading">{subheading}</p>
      <p>{text}</p>
      {buttons.map(b => b)}
      {children}
    </StyledModule>
  );
}
