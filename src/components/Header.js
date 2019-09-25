import React from 'react';
import { StyledHeader } from '../UI/Common';

export default function Header({ children }) {

  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}