import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const FixtureCardContainer = styled.div<{ isFutureFixture?: boolean }>`
  padding: 1.5rem 1rem;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.11);
  margin-bottom: 2rem;
  border-radius: 0.8rem;
  background: ${(props) => (props.isFutureFixture ? "white" : "#F8F8F8")};
`;

export const dateStyles = css`
  font-size: 1rem;
  color : gray;
  font-size: 600;
  margin-bottom: 1rem;
`;

export const timeStyles = css`
  font-weight: 600;
  font-size: 1.1rem;
  text-align : center;
  flex: 1;
`;


export const scoreBoxStyles = css`
    background-color : #3F3F3F;
    color : white;
    padding : 0.5rem 0.8rem;
    border-radius : 0.1rem;
`