import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  color: #495057;
  font-weight: 600;
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const Caption = styled.caption`
  padding: 1rem;
  text-align: left;
`;

export const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 1.2rem 1rem;
  &:before {
    font-weight: 700;
  }
`;

export const Tr = styled.tr`
  &:nth-of-type(2n) {
    background: #fafafa;
  }
`;

export const Thead = styled.thead`
  background: #fafafa;
`;

export const Tbody = styled.tbody``;
