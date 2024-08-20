import React from "react";
import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";

interface ActionButtonProps {
  icon: string;
  text?: string;
  backgroundColor?: string;
  size?: string;
  align?: string;
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  text,
  backgroundColor = "rgba(255, 255, 255, 0.2)",
  size = "60px",
  onClick,
}) => (
  <ButtonContainer onClick={onClick}>
    <StyledIconWrapper backgroundColor={backgroundColor} size={size}>
      <img src={icon} alt="icon" />
    </StyledIconWrapper>
    {text && <ActionText>{text}</ActionText>}
  </ButtonContainer>
);

const ButtonContainer = styled("div").withConfig({
  shouldForwardProp,
})<{ align?: string; onClick?: () => void }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align};
  margin: 0 10px;
  cursor: ${(props) => (props.onClick ? "pointer" : "normal")};
`;

interface IconWrapperProps {
  backgroundColor: string;
  size: string;
}

const StyledIconWrapper = styled("div").withConfig({
  shouldForwardProp,
})<IconWrapperProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ActionText = styled.div`
  font-size: 14px;
  text-align: center;
`;
