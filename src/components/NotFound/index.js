import {
  NotFoundMainContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './style'

import Context from '../../context/Context'

import Header from '../Header'

import Menu from '../Menu'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const bgColor = isDarkTheme ? '#000000' : '#ffffff'

      const headingColor = isDarkTheme ? '#ffffff' : '#212121'

      const descriptionColor = isDarkTheme ? '#94a3b8' : '#475569'

      return (
        <>
          <Header />
          <NotFoundMainContainer>
            <Menu />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImage src={notFoundImageUrl} alt="not found" />
              <NotFoundHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription descriptionColor={descriptionColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </NotFoundMainContainer>
        </>
      )
    }}
  </Context.Consumer>
)

export default NotFound
