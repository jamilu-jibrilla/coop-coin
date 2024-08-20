import React from "react";
import { Button, ButtonProps, ConfigProvider } from "antd";

interface ReusableButtonProps extends ButtonProps {
  marginTop?: string;
  color?: string;
  borderRadius?: string;
  padding?: string;
  width?: string;
}

export const PrimaryButton: React.FC<ReusableButtonProps> = ({
  marginTop,
  color,
  borderRadius,
  padding,
  width,
  style,
  children,
  ...rest
}) => {
  return (
    <ConfigProvider wave={{ disabled: true }}>
      <Button
        style={{
          borderRadius: borderRadius ?? "8px",
          marginTop: marginTop ?? "0",
          padding: padding ?? "20px",
          color: color,
          width: width,
          boxShadow: "none",
          ...style,
        }}
        {...rest}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
};
