import {AiFillFire} from 'react-icons/ai'

import Header from '../Header'

import Menu from '../Menu'

import Context from '../../context/Context'

import {
  SavedVideosContainer,
  SavedVideos,
  SavedVideosHeader,
  SavedVideosHeading,
} from './style'

const SavedVideosRoute = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

      return (
        <>
          <Header />
          <SavedVideosContainer data-testid="savedVideos">
            <Menu />
            <SavedVideos bgColor={bgColor}>
              <SavedVideosHeader>
                <AiFillFire />
                <SavedVideosHeading>Saved Videos</SavedVideosHeading>
              </SavedVideosHeader>
            </SavedVideos>
          </SavedVideosContainer>
        </>
      )
    }}
  </Context.Consumer>
)

export default SavedVideosRoute
