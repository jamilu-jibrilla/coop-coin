import React from "react";
import styled from "styled-components";
import { Pagination } from "antd";
import { PrimaryButton } from "./PrimaryButton";
import { theme } from "../theme";
import { NextIcon, PrevIcon } from "../Icons";

interface CustomPaginationProps {
  total: number;
  current: number;
  pageSize: number;
  onChange?: (page: number) => void;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({
  total,
  current,
  pageSize,
  onChange,
}) => {
  const itemRender = (
    _: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode
  ) => {
    if (type === "prev") {
      return <PrimaryButton icon={<PrevIcon />} padding="0 6px" />;
    }
    if (type === "next") {
      return <PrimaryButton icon={<NextIcon />} padding="0 6px" />;
    }
    return originalElement;
  };

  return (
    <StyledPagination
      total={total}
      current={current}
      pageSize={pageSize}
      onChange={onChange}
      itemRender={itemRender}
      showSizeChanger={false}
    />
  );
};

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: relative;

  .ant-pagination-prev {
    position: absolute;
    left: 0;
  }

  .ant-pagination-next {
    position: absolute;
    right: 0;
  }

  .ant-pagination-item-active {
    border-color: ${theme.colors.primary};

    a {
      background: ${theme.colors.primary};
      color: #fff;
    }
  }

  .ant-pagination-item:hover {
    border-color: ${theme.colors.primary};

    a {
      color: ${theme.colors.primary};
      /* background: ${theme.colors.primary};
      color: #fff; */
    }
  }
`;
