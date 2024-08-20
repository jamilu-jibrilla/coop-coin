import React from "react";
import { Drawer, DrawerProps } from "antd";
import { PrimaryButton } from "./PrimaryButton";
import { CloseIcon } from "../Icons";

interface CustomDrawerProps extends Omit<DrawerProps, "title" | "footer"> {
  title: React.ReactNode;
  footer?: React.ReactNode;
  isMobile: boolean;
  alignTitle?: "left" | "center" | "right";
  closeButtonPosition?: "left" | "right";
}

export const CustomDrawer: React.FC<CustomDrawerProps> = ({
  title,
  footer,
  children,
  isMobile,
  onClose,
  alignTitle = "center",
  closeButtonPosition = "left",
  ...rest
}) => {
  return (
    <Drawer
      title={title}
      placement={isMobile ? "bottom" : "right"}
      width={isMobile ? "100%" : "600px"}
      height={isMobile ? "100%" : "auto"}
      footer={footer}
      styles={{
        header: {
          textAlign: alignTitle,
          padding: "24px",
          borderBottom: "1px solid #f0f0f0",
          position: "relative",
        },
        body: {
          padding: "24px",
        },

        wrapper: isMobile
          ? {
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
            }
          : undefined,
      }}
      closeIcon={
        <div
          style={{
            position: "absolute",
            // top: "24px",
            [closeButtonPosition]: "24px",
          }}
        >
          <PrimaryButton icon={<CloseIcon />} onClick={onClose} />
        </div>
      }
      {...rest}
    >
      {children}
    </Drawer>
  );
};
