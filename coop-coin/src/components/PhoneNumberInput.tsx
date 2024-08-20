import React from "react";
import styled from "styled-components";
import { Controller } from "react-hook-form";
import shouldForwardProp from "@styled-system/should-forward-prop";

interface InputContainerProps {
  hasError: boolean;
}

interface PhoneNumberInputProps {
  control: any;
  name: string;
  errors: any;
  required?: boolean;
  label?: string;
}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  control,
  name,
  errors,
  required = false,
  label = "Phone Number",
}) => {
  const hasError = !!errors[name];

  return (
    <Container>
      <Label htmlFor="phone-number">{label}</Label>
      <InputContainer hasError={hasError}>
        <CountryCode>
          <Select name="country-code" id="country-code">
            <option value="+234">+234</option>
          </Select>
          <ArrowIcon />
        </CountryCode>
        <Controller
          name={name}
          control={control}
          rules={required ? { required: "Phone number is required" } : {}}
          render={({ field }) => (
            <Input
              {...field}
              id="phone-number"
              type="tel"
              placeholder="Enter Phone Number"
              maxLength={11}
              value={field.value ?? ""}
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                let value = input.value.replace(/[^0-9]/g, "");

                // Remove the first zero only if we have 3 or more digits
                if (value.length >= 3 && value.startsWith("0")) {
                  value = value.substring(1);
                }

                // Limit to 10 digits (excluding the country code)
                value = value.slice(0, 10);

                input.value = value;
                field.onChange(value);
              }}
            />
          )}
        />
      </InputContainer>
      {hasError && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </Container>
  );
};

const InputContainer = styled("div").withConfig({
  shouldForwardProp,
})<InputContainerProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.hasError ? "#ff4d4f" : "#ccc")};
  border-radius: 4px;
  padding: 12px;
  &:hover {
    border-color: ${(props) => (props.hasError ? "#ff4d4f" : "#0c5c31")};
  }
  &:focus-within {
    outline: 0.1px solid ${(props) => (props.hasError ? "#ff4d4f" : "#0c5c31")};
    border-color: ${(props) => (props.hasError ? "#ff4d4f" : "#0c5c31")};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.hasError ? "rgba(255, 77, 79, 0)" : "rgba(12, 92, 49, 0.3)"};
    &:hover {
      border-color: ${(props) => (props.hasError ? "#ff4d4f" : "#0c5c31")};
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;

const CountryCode = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: 8px; */
  position: relative;
`;

const Select = styled.select`
  border: none;
  background: transparent;
  font-size: 16px;
  margin-right: 4px;
  appearance: none;
  padding-right: 10px;
  position: relative;
  z-index: 1;
  &:disabled {
    color: #000;
  }
`;

const ArrowIcon = styled.div`
  position: absolute;
  right: 8px;
  pointer-events: none;
  z-index: 0;

  /* &::after {
    content: "▼";
    font-size: 11px;
  } */
`;

const Input = styled.input`
  flex: 1;
  border: none;
  font-size: 16px;
  outline: none;

  &::placeholder {
    font-size: 16px;
    color: #bfbfbf;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4d4f;
  font-size: 14px;
`;
