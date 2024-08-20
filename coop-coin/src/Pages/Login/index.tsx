import { useForm } from "react-hook-form";
import styled from "styled-components";
import { InputWithLabel } from "./components/InputWithLabel";
import { PasswordInputWithToggle } from "./components/PasswordInputWithToggle";
import { PasswordCriteria } from "./components/PasswordCriteria";

type FormInputs = {
    email: string,
    password: string
}

const Login: React.FC = () => {

  const { control, handleSubmit } = useForm<FormInputs>()
  const onSubmit = (data: FormInputs) => console.log(data)
  
  return (
    <LoginWrapper onSubmit={handleSubmit(onSubmit)}>
      <MainContainer>
        <ImageColumn>
          <StyledImage
            loading="lazy"
            srcSet="/assets/container.png"
            alt="Decorative Image"
          />
        </ImageColumn>
        
        <FormColumn>
          <FormContainer>
            <Logo>
              <LogoImage
                loading="lazy"
                srcSet="/assets/cbn-coop-logo.png"
                alt="Logo"
              />
            </Logo>
            <LoginHeader>
              <Title>Log In</Title>
              <Subtitle>Please log in to continue.</Subtitle>
            </LoginHeader>

            <InputWithLabel
            label="Email Address"
            placeholder="Enter Email Address"
            control={control}
            name="email"
            type="email"
            />
            
            <PasswordInputWithToggle
            label="Password"
            placeholder="Enter Password"
            control={control}
            name="password"
            />

            <PasswordCriteria>
              Password should be at least 8 characters, with one uppercase letter, one lowercase letter, one number, and one special character.
            </PasswordCriteria>

            <SubmitButton>Log In</SubmitButton>
          </FormContainer>
        </FormColumn>
      </MainContainer>
    </LoginWrapper>
  );
}

export default Login;

const LoginWrapper = styled.form`
  min-height: 100vh;
  max-width: 1440px;
  margin: auto;
  padding: 100px 80px 60px 20px;
  @media (max-width: 991px) {
    padding: 10px;
  }

`;

const MainContainer = styled.div`
  display: flex;
  gap: 60px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 957px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  margin-left: 0px;

  }
`;

const FormContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Logo = styled.div`
  display: flex;
  width: 245px;
`;

const LogoImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

const LoginHeader = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-family: Hind, sans-serif;
`;

const Title = styled.div`
  color: #1B1B1B;
  font-size: 32px;
  font-weight: 600;
`;

const Subtitle = styled.div`
  color: #555555;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
`;

const SubmitButton = styled.button`
  background-color: #0C5C31;
  border-radius: 4px;
  width: 552px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  outline: none;
  border: none;
  padding: 12px 16px;
  margin-top: 20px;
  &:hover {
    background: #084A22;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`