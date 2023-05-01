import { css, Global, keyframes, Keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        max-width: 100vw;
        overflow-x: hidden;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}
  />
);
