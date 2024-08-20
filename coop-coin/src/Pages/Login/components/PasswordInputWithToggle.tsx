import React, { useState } from "react";
import styled from "styled-components";
import { Control, Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordInputWithToggleProps {
  label: string;
  placeholder: string;
  control: Control<any>;
  name: string;
}

const Container = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  width: 552px;
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
  position: relative;
  border: 0.5px solid #C9C8C8;
  border-radius: 6px;
  padding: 12px;
  margin-top: 8px;
  width: 100%;
  padding-right: 40px;

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

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-5%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: rgba(153, 153, 153, 1);

  &:hover {
    color: #0c5c31;
  }
`;

export const PasswordInputWithToggle: React.FC<PasswordInputWithToggleProps> = ({
  label,
  placeholder,
  control,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div style={{ position: "relative" }}>
            <InputField
              {...field}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              value={field.value ?? ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
            <ToggleButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </ToggleButton>
          </div>
        )}
      />
    </Container>
  );
};
