import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";

interface BoxProps {
  display?: string;
  textAlign?: string;
  margin?: string;
  padding?: string;
  width?: string;
  maxWidth?: string;
  justify?: string;
  align?: string;
  background?: string;
  height?: string;
}

interface GridContainerProps {
  default?: string;
  desktop?: string;
  tablet?: string;
  mobile?: string;
  gap?: string;
  alignItems?: string;
  justifyItems?: string;
  alignContent?: string;
  justifyContent?: string;
}

export const Box = styled("div").withConfig({ shouldForwardProp })<BoxProps>`
  display: ${(props) => props.display};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding ?? "0"};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  background: ${(props) => props.background};
  height: ${(props) => props.height};
`;

export const OutlineContent = styled.div`
  padding: 10px;
  outline: 0.5px solid #c9c8c8;
`;

export const Grid = styled("div").withConfig({
  shouldForwardProp,
})<GridContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.gap ?? "10px"};
  justify-items: ${(props) => props.justifyItems ?? "stretch"};
  align-items: ${(props) => props.alignItems ?? "stretch"};
  justify-content: ${(props) => props.justifyContent ?? "normal"};
  align-content: ${(props) => props.alignContent ?? "normal"};

  @media (min-width: 980px) {
    grid-template-columns: ${(props) =>
      props.desktop ?? props.default ?? "1fr"};
  }

  @media (min-width: 560px) {
    grid-template-columns: ${(props) => props.tablet ?? props.default};
  }

  @media (max-width: 480px) {
    grid-template-columns: ${(props) => props.mobile ?? props.default};
  }
`;
