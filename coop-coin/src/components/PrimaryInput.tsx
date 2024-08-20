import React from "react";
import { Form } from "antd";
import { Controller, Control, FieldErrors } from "react-hook-form";
import styled from "styled-components";
import { Input } from "antd";

interface CustomFormItemProps {
  label?: string;
  name: string;
  control: Control<any>;
  errors: FieldErrors;
  required?: boolean;
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: "large" | "middle" | "small";
  };
  formatNumber?: boolean;
}

export const PrimaryInput: React.FC<CustomFormItemProps> = ({
  label,
  name,
  control,
  errors,
  required = false,
  inputProps = {},
  formatNumber = false,
}) => {
  const errorMessage = errors[name]
    ? (errors[name]?.message as string)
    : undefined;

  const formatValue = (value: string | number | undefined) => {
    if (!formatNumber) return value as string;
    if (value === undefined || value === null) return "";
    // Convert to string if it's a number
    const stringValue = typeof value === "number" ? value.toString() : value;
    // Remove non-digit characters
    const digits = stringValue.replace(/\D/g, "");
    // Format with commas
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const parseValue = (value: string) => {
    if (!formatNumber) return value;
    // Remove commas
    return value.replace(/,/g, "");
  };

  return (
    <Form.Item
      label={label}
      validateStatus={errors[name] ? "error" : ""}
      help={errorMessage}
    >
      <Controller
        name={name}
        control={control}
        rules={{
          required: required && `${label} is required`,
          ...(formatNumber
            ? {
                pattern: {
                  value: /^[0-9,]*$/,
                  message: "Please enter a valid number",
                },
              }
            : {}),
        }}
        render={({ field }) => (
          <CustomInput
            {...field}
            size="large"
            value={formatValue(field.value)}
            onChange={(e) =>
              field.onChange(
                formatNumber ? parseValue(e.target.value) : e.target.value
              )
            }
            {...inputProps}
          />
        )}
      />
    </Form.Item>
  );
};

const CustomInput = styled(Input)`
  padding: 10px;
  border-radius: 5px;
`;
