import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";

interface DatePickerProps {
  control: any;
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  max?: string;
}

interface DatePickerErrorProps {
  isError: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  control,
  name,
  label,
  required = false,
  placeholder,
  max,
}) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Controller
        control={control}
        name={name}
        rules={{ required }}
        render={({ field, fieldState: { error } }) => (
          <>
            <StyledInput
              {...field}
              id={name}
              type="date"
              placeholder={placeholder}
              isError={!!error}
              max={max}
            />
            {required && error && <Error>{label} is required</Error>}
          </>
        )}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 4rem;
`;

const StyledInput = styled("input").withConfig({
  shouldForwardProp,
})<DatePickerErrorProps>`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid ${(props) => (props.isError ? "#ff4d4f" : "#d9d9d9")};
  border-radius: 4px;
  margin: 0.5rem 0 1rem;

  &:hover {
    border-color: ${(props) => (props.isError ? "#ff4d4f" : "#0c5c31")};
  }

  &:focus-within {
    outline: 0.1px solid ${(props) => (props.isError ? "#ff4d4f" : "#0c5c31")};
    border-color: ${(props) => (props.isError ? "#ff4d4f" : "#0c5c31")};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.isError ? "rgba(255, 77, 79, 0)" : "rgba(12, 92, 49, 0.3)"};
  }
`;

const Error = styled.span`
  display: inline-block;
  position: relative;
  top: -12px;
  color: #ff4d4f;
  font-size: 14px;
`;
