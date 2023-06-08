import Context from '../../context/Context'

import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './style'

const FailureView = props => {
  const {onClickRetry} = props

  const clickOnRetry = () => {
    onClickRetry()
  }

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const failureHeadingTextColor = isDarkTheme ? '#ffffff' : ' #1e293b'

        const failureDescriptionTextColor = isDarkTheme ? ' #e2e8f0' : '#616e7c'

        return (
          <FailureViewContainer>
            <FailureImage src={failureImageUrl} alt="failure view" />
            <FailureHeading failureHeadingTextColor={failureHeadingTextColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription
              failureDescriptionTextColor={failureDescriptionTextColor}
            >
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureButton type="button" onClick={clickOnRetry}>
              Retry
            </FailureButton>
          </FailureViewContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default FailureView
