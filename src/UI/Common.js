import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledModule = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(black, 0.3);
  grid-column: ${({large}) => large ? '1 / span 2' : ''};

  h2 {
    font-size: ${({large}) => large ? '2rem' : 'inherit'};
  }

  h3 {
    color: red;
    text-transform: uppercase;
  }
`;

const StyledHeader = styled.div`
  border-bottom: 10px solid black;
  border-right: 10px solid black;
  padding: 3rem 1.2rem 1rem 0;
  text-align: right;
  margin-right: calc(50% - 700px / 2);
  margin-bottom: 2rem;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/mountains.svg);
  background-repeat: no-repeat;
  background-position: bottom 10px right 110px;
  h1 {
    font-size: 3rem;
  }
  @media (max-width: 700px) {
    margin-right: 1rem;
  }
`;

const StyledFooter = styled.div`
  border-top: 10px solid black;
  border-left: 10px solid black;
  padding: 1rem 0 3rem 1rem;
  margin-left: calc(50% - 700px / 2);
  margin-top: 2rem;
  min-height: 50px;

  @media (max-width: 700px) {
    margin-left: 1rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  align-items: ${({align}) => align || 'center'};
  justify-content: ${({justify}) => justify || 'center'};
`;

const StyledAvatar = styled(Link)`
  height: auto;
  width: auto;
  border-radius: 100%;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: -15px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export { StyledModule, StyledHeader, StyledFooter, FlexDiv, StyledAvatar };