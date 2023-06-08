import {Component} from 'react'

import {AiFillFire} from 'react-icons/ai'

import Cookies from 'js-cookie'

import Context from '../../context/Context'

import Header from '../Header'

import Menu from '../Menu'

import FailureView from '../FailureView'

import LoaderView from '../LoaderView'

import {
  TrendingVideosContainer,
  TrendingVideoHeader,
  TrendingVideosHeading,
  TrendingVideos,
  TrendingVideosList,
} from './style'

import TrendingVideoCard from '../TrendingVideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IS_LOADING',
}

class TrendingRoute extends Component {
  state = {trendingVideosData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(trendingVideosApiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = data.videos.map(eachObj => ({
        channel: {
          name: eachObj.channel.name,
          profileImageUrl: eachObj.channel.profile_image_url,
        },
        id: eachObj.id,
        publishedAt: eachObj.published_at,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }))

      this.setState({
        trendingVideosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessApiView = () => {
    const {trendingVideosData} = this.state

    return (
      <TrendingVideosList>
        {trendingVideosData.map(eachObj => (
          <TrendingVideoCard key={eachObj.id} videoData={eachObj} />
        ))}
      </TrendingVideosList>
    )
  }

  clickOnRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureApiView = () => <FailureView clickOnRetry={this.clickOnRetry} />

  renderLoadingApiView = () => <LoaderView />

  renderTrendingVideos = () => {
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
              <TrendingVideosContainer data-testid="trending">
                <Menu />
                <TrendingVideos bgColor={bgColor}>
                  <TrendingVideoHeader>
                    <AiFillFire />
                    <TrendingVideosHeading>
                      Trending Videos
                    </TrendingVideosHeading>
                  </TrendingVideoHeader>
                  {this.renderTrendingVideos()}
                </TrendingVideos>
              </TrendingVideosContainer>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default TrendingRoute
