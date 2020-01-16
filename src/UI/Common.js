import styled from "styled-components";

const StyledModule = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  min-height: 250px;
  display: flex;
  flex-direction: column;
  h3 {
    color: red;
    text-transform: uppercase;
  }
  .button {
    margin-top: auto;
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
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => (height ? height : "100%")};
`;

export { StyledModule, StyledHeader, StyledFooter, FlexDiv };
