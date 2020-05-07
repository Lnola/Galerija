import styled, { css } from "styled-components";

const style = css`
  ${({ color }) => color && `color: ${color};`}
  ${({ isBold }) => isBold && `font-weight: bold;`}

  text-shadow:none;
`;

export const ColoredTextSpan = styled.span`
  ${style}
`;

const ColoredText = styled.p`
  ${style}
`;

export default ColoredText;
