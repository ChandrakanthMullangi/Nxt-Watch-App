import {Component} from 'react'

import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'

import Context from '../../context/Context'

import Header from '../Header'

import Menu from '../Menu'

import {
  GamingVideosContainer,
  GamingVideoHeader,
  GamingVideosHeading,
  GamingVideos,
  GamingVideosList,
} from './style'

import GamingVideoCard from '../GamingVideoCard'

import FailureView from '../FailureView'

import LoaderView from '../LoaderView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IS_LOADING',
}

class GamingRoute extends Component {
  state = {gamingVideosData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(gamingVideosApiUrl, options)

    if (response.ok) {
      const data = await response.json()

      console.log(data)

      const updatedData = data.videos.map(eachObj => ({
        id: eachObj.id,
        publishedAt: eachObj.published_at,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }))

      this.setState({
        gamingVideosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessApiView = () => {
    const {gamingVideosData} = this.state

    return (
      <GamingVideosList>
        {gamingVideosData.map(eachObj => (
          <GamingVideoCard key={eachObj.id} videoData={eachObj} />
        ))}
      </GamingVideosList>
    )
  }

  clickOnRetry = () => {
    this.getGamingVideos()
  }

  renderFailureApiView = () => <FailureView clickOnRetry={this.clickOnRetry} />

  renderLoadingApiView = () => <LoaderView />

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessApiView()
      case apiStatusConstants.failure:
        return this.renderFailureApiView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingApiView()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <GamingVideosContainer data-testid="gaming">
                <Menu />
                <GamingVideos bgColor={bgColor}>
                  <GamingVideoHeader>
                    <SiYoutubegaming />
                    <GamingVideosHeading> Gaming </GamingVideosHeading>
                  </GamingVideoHeader>
                  {this.renderGamingVideos()}
                </GamingVideos>
              </GamingVideosContainer>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default GamingRoute
