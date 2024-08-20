import React from "react";
import styled from "styled-components";
import { Control, Controller } from "react-hook-form";

interface InputContainerProps {
  label: string;
  placeholder: string;
  control: Control<any>;
  name: string;
  type?: string;
}

const InputContainer = styled.div`
  margin-top: 16px;
  display: flex;
  width: 552px;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  color: #1B1B1B;
  font-size: 14px;
  font-weight: 500;
`;

const InputField = styled.input`
  color: #1B1B1B;
  border: 0.5px solid #C9C8C8;
  border-radius: 6px;
  padding: 12px;
  margin-top: 8px;
  width: 100%;

  &:hover {
    border-color: none;
    outline: none;
  }

  &:focus {
    border-color: none;
    outline: none;
    box-shadow: 0 0 0 2px rgba(12, 92, 49, 0.3);
  }
`;

export const InputWithLabel: React.FC<InputContainerProps> = ({
  label,
  placeholder,
  control,
  name,
  type = "text",
}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputField
            {...field}
            type={type}
            placeholder={placeholder}
            value={field.value ?? ""}
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
      />
    </InputContainer>
  );
};
