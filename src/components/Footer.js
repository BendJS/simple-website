import React from 'react';
import { StyledFooter, FlexDiv } from '../UI/Common';

export default function Footer(props) {

  return (
    <StyledFooter>
      <FlexDiv justify="flex-start" align="center">
        <h1>See all our events on <a href="https://www.meetup.com/BendJS/" target="_blank" rel="noopener noreferrer">Meetup.com</a></h1>
      </FlexDiv>
    </StyledFooter>
  )
}