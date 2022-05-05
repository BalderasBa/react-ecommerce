  import { css } from "styled-components";

  export const tablette = (props) => {
    return css`
      @media only screen and (max-width: 992px) {
        ${props}
      }
    `;
  };
  export const mobile = (props) => {
    return css`
      @media only screen and (max-width: 768px) {
        ${props}
      }
    `;
  };
  export const xsmall = (props) => {
    return css`
      @media only screen and (max-width: 600px) {
        ${props}
      }
    `;
  };
