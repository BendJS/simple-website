import React from 'react';
import { StyledModule } from '../UI/Common';

export default function Module({ heading, subheading, text, buttons, large = false, children = null }) {

  return (
    <StyledModule large={large}>
      <h3>{heading}</h3>
      <h2>{subheading}</h2>
      <p>{text}</p>
      {buttons.map(b => b)}
      {children}
    </StyledModule>
  )
}