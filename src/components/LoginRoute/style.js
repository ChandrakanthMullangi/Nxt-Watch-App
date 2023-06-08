import styled from 'styled-components'

export const Login = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.loginBgColor};
`

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  background-color: ${props => props.loginContainerBgColor};
  padding: 50px 25px;
  border-radius: 25px;
  height: 450px;
  width: 350px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const Image = styled.img`
  height: auto;
  width: 150px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.labelTextColor};
`

export const Input = styled.input`
  font-family: Roboto;
  font-size: 16px;
  padding: 12px;
  width: 300px;
  color: ${props => props.inputTextColor};
  outline: none;
  border-radius: 5px;
  border: 1px solid #94a3b8;
  background-color: ${props => props.inputBgColor};

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const ShowPasswordContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const ShowPasswordLabel = styled.label`
  font-family: Roboto;
  color: ${props => props.labelTextColor};
  font-weight: bold;
  cursor: pointer;
`

export const ShowPasswordInput = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: red;
`

export const LoginButton = styled.button`
  font-family: Roboto;
  outline: none;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  width: 300px;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const ErrorMessageContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const ErrorMessage = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: red;
  margin-top: -10px;
`
