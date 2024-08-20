import React from "react";
import { Modal, Form } from "antd";
import { Control, UseFormHandleSubmit } from "react-hook-form";
import {
  PrimarySelect,
  Box,
  DateRangePicker,
  InputWithLabel,
  PrimaryButton,
} from "./index";
// import { SectionSubTitle } from "../pages/savings";
import { theme } from "../theme";

interface FilterI {
  status: { value: string; label: string } | null;
  dateRange: [string, string] | [null, null];
  amountFrom: string;
  amountTo: string;
}

interface FilterProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (data: FilterI) => void;
  control: Control<FilterI>;
  handleSubmit: UseFormHandleSubmit<FilterI>;
  errors: any;
  options: { value: string; label: string }[];
}

export const Filter: React.FC<FilterProps> = ({
  visible,
  onClose,
  onConfirm,
  control,
  handleSubmit,
  errors,
  options,
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      onOk={handleSubmit(onConfirm)}
      centered
      title="Sort & Filter"
      footer={null}
    >
      <Form layout="vertical" onFinish={handleSubmit(onConfirm)}>
        <PrimarySelect
          control={control}
          name="status"
          label="Filter by status"
          options={options}
          required={false}
          errors={errors}
          placeholder="Select"
        />
        <DateRangePicker
          control={control}
          name="dateRange"
          label="Sort by Date"
        />
        {/* <SectionSubTitle style={{ color: "rgba(0, 0, 0, 0.88)" }}>
          Sort by Amount
        </SectionSubTitle> */}
        <Box display="flex" align="center" style={{ gap: "20px" }}>
          <InputWithLabel
            label="From"
            placeholder="₦0.00"
            name="amountFrom"
            control={control}
          />
          <InputWithLabel
            label="To"
            placeholder="₦0.00"
            name="amountTo"
            control={control}
          />
        </Box>
      </Form>
      <Box display="flex" style={{ gap: "20px" }}>
        <PrimaryButton
          padding="20px"
          block
          style={{
            backgroundColor: "transparent",
            color: theme.colors.primary,
          }}
          onClick={onClose}
        >
          Cancel
        </PrimaryButton>
        <PrimaryButton
          padding="20px"
          block
          type="primary"
          onClick={handleSubmit(onConfirm)}
        >
          Confirm
        </PrimaryButton>
      </Box>
    </Modal>
  );
};
