import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";
// import { FaCalendarAlt } from "react-icons/fa";

interface DateRangePickerProps {
  control: Control<any>;
  name: string;
  label: string;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  font-size: 16px;
  width: 100%;
  & .react-datepicker-wrapper {
    width: 100%;
  }
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
`;

const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

// const CalendarIcon = styled(FaCalendarAlt)`
//   position: absolute;
//   right: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
//   /* color: #888; */
// `;

const CustomInput = styled.input`
  width: 100%;
  padding: 14px 10px;
  padding-right: 40px;

  border: 1px solid #ccc;
  border-radius: 4px;

  outline: none;

  &::placeholder {
    color: #bfbfbf;
  }

  &:hover {
    border-color: #0c5c31;
  }

  &:focus-within {
    border-color: #0c5c31;
    outline: 0.1px solid #0c5c31;
    box-shadow: 0 0 0 2px rgba(12, 92, 49, 0.3);
  }
`;

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  control,
  name,
  label,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePickerWrapper>
            <DatePicker
              selectsRange
              startDate={field.value?.[0] || null}
              endDate={field.value?.[1] || null}
              onChange={(dates: [Date | null, Date | null]) => {
                field.onChange(dates);
              }}
              dateFormat="dd/mm/yyyy"
              isClearable
              placeholderText="Select date"
              customInput={<CustomInput />}
            />
            {/* <CalendarIcon /> */}
          </DatePickerWrapper>
        )}
      />
    </Container>
  );
};
