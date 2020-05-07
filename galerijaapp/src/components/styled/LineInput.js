import styled from "styled-components";

const LineInput = styled.input`
  border: none;
  border-bottom: 2px solid #000;
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ margin }) => margin && `margin: ${margin};`}
`;

export default LineInput;
