import React from "react";
import styled from "styled-components";

const Criteria = styled.div`
  color: #555;
  font-family: Hind;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
  width: 552px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

interface PasswordCriteriaProps {
  children: React.ReactNode;
}

export const PasswordCriteria: React.FC<PasswordCriteriaProps> = ({ children }) => {
  return <Criteria>{children}</Criteria>;
};
