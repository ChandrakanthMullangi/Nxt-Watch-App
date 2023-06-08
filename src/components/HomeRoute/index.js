import {Component} from 'react'

import Header from '../Header'

import Menu from '../Menu'

import {Home, VideosContainer} from './style'

import HomeVideos from '../HomeVideos'

import Context from '../../context/Context'

class HomeRoute extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <>
              <Header />
              <Home data-testid="home">
                <Menu />
                <VideosContainer bgColor={bgColor}>
                  <HomeVideos />
                </VideosContainer>
              </Home>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default HomeRoute
