import React from "react";
import { Select, Form } from "antd";
import { Controller, Control, FieldErrors } from "react-hook-form";
import styled from "styled-components";

const { Option } = Select;

interface SelectOption {
  value: string;
  label: string;
}

interface PrimarySelectProps {
  control: Control<any>;
  name: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  errors: FieldErrors;
  required?: boolean;
  isSearchable?: boolean;
}

export const PrimarySelect: React.FC<PrimarySelectProps> = ({
  control,
  name,
  label,
  options,
  placeholder,
  errors,
  required = false,
  isSearchable = false,
}) => {
  const errorMessage = errors[name]
    ? (errors[name]?.message as string)
    : undefined;

  return (
    <Form.Item
      label={label}
      validateStatus={errors[name] ? "error" : ""}
      help={errorMessage}
    >
      <Controller
        name={name}
        control={control}
        rules={{ required: required && `${label} is required` }}
        render={({ field }) => (
          <StyledSelect
            {...field}
            size="large"
            showSearch={isSearchable}
            value={field.value?.value || undefined}
            placeholder={placeholder}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={(value, option) => {
              const selectedOption = Array.isArray(option) ? option[0] : option;
              field.onChange(selectedOption);
            }}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </StyledSelect>
        )}
      />
    </Form.Item>
  );
};

const StyledSelect = styled(Select)`
  &.ant-select {
    width: 100%;
    height: 45px;
    border-radius: 4px;
  }
  &.ant-select-selector {
    border-radius: 4px;
  }
`;
