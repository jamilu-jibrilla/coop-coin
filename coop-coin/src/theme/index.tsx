import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#0C5C31",
  },
  text: {
    primary: "#1B1B1B",
    secondary: "#555555",
  },
  token: {
    colorPrimary: "#0C5C31",
    buttonBorderRadius: 2,
    inputPadding: "16px",
  },
};

export const GlobalStyle = createGlobalStyle`
 :root {
  font-family: "Hind", sans-serif;
  line-height: 1.5;
  font-weight: 300;
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;

}

* {
  box-sizing: border-box;
}

 /* Apply custom font family to Ant Design components */
  .ant-typography,
  .ant-btn,
  .ant-input,
  .ant-menu,
  .ant-form,
  .ant-slider,
  .ant-select,
  .ant-checkbox,
  .ant-radio,
  .ant-table,
  .ant-col,
  .react-datepicker-wrapper {
    font-family: "Hind", sans-serif;
  }
  .ant-form-item{
    margin-bottom:15px;
  } 

  .large-screen-only {
  @media (max-width: 992px) {
    display: none;
  }
}
`;