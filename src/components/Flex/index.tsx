import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface IFlexProps extends Omit<React.HTMLProps<HTMLDivElement>, "as"> {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: string;
  css?: ReturnType<typeof css>;
}

const StyledFlex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  gap: ${({ gap }) => gap};
  ${({ css }) => css};
`;

const Flex = (props: IFlexProps) => {
  const { children, ...rest } = props;
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;
