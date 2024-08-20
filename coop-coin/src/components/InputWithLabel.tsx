import React from "react";
import styled from "styled-components";
import { Control, Controller } from "react-hook-form";

interface InputProps {
  label: string;
  placeholder: string;
  control: Control<any>;
  name: string;
}

const Container = styled.div`
  position: relative;
  margin-bottom: 24px;
  font-size: 16px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 10px;
  padding-left: 60px;
  text-align: right;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:hover {
    border-color: #0c5c31;
  }

  &:focus-within {
    outline: 0.1px solid #0c5c31;
    border-color: #0c5c31;
    box-shadow: 0 0 0 2px rgba(12, 92, 49, 0.3);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const InputWithLabel: React.FC<InputProps> = ({
  label,
  placeholder,
  control,
  name,
}) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            value={field.value ?? ""}
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
      />
      <Label>{label}</Label>
    </Container>
  );
};
