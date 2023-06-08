import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  Login,
  LoginContainer,
  Image,
  InputContainer,
  Label,
  Input,
  ShowPasswordContainer,
  ShowPasswordInput,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessageContainer,
  ErrorMessage,
} from './style'

import Context from '../../context/Context'

class LoginRoute extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()

    const {usernameInput, passwordInput} = this.state

    const userDetails = {username: usernameInput, password: passwordInput}

    const loginApiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)

    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      showPassword,
      showSubmitError,
      errorMsg,
    } = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const loginBgColor = isDarkTheme ? '#212121' : '#f9f9f9'

          const loginContainerBgColor = isDarkTheme ? '#000000' : '#ffffff'

          const labelTextColor = isDarkTheme ? '#ffffff' : '#475569'

          const inputBgColor = isDarkTheme ? 'transparent' : ''

          const inputTextColor = isDarkTheme ? '#ffffff' : '#000000'

          return (
            <Login loginBgColor={loginBgColor}>
              <LoginContainer
                onSubmit={this.submitForm}
                loginContainerBgColor={loginContainerBgColor}
              >
                <Image src={websiteLogo} alt="website logo" />
                <InputContainer>
                  <Label htmlFor="username" labelTextColor={labelTextColor}>
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={usernameInput}
                    onChange={this.onChangeUsername}
                    inputBgColor={inputBgColor}
                    inputTextColor={inputTextColor}
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="password" labelTextColor={labelTextColor}>
                    PASSWORD
                  </Label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    value={passwordInput}
                    onChange={this.onChangePassword}
                    inputBgColor={inputBgColor}
                    inputTextColor={inputTextColor}
                  />
                </InputContainer>
                <ShowPasswordContainer>
                  <ShowPasswordInput
                    type="checkbox"
                    id="showPassword"
                    onClick={this.onChangeShowPassword}
                  />
                  <ShowPasswordLabel
                    htmlFor="showPassword"
                    labelTextColor={labelTextColor}
                  >
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit"> Login </LoginButton>
                <ErrorMessageContainer>
                  {showSubmitError && (
                    <ErrorMessage> *{errorMsg} </ErrorMessage>
                  )}
                </ErrorMessageContainer>
              </LoginContainer>
            </Login>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default LoginRoute
