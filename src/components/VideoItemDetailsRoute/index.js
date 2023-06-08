import {Component} from 'react'

import Cookies from 'js-cookie'

import Header from '../Header'

import Menu from '../Menu'

import VideoPlayer from '../VideoPlayer'

import Context from '../../context/Context'

import {VideoContainer, Video} from './style'

import FailureView from '../FailureView'

import LoaderView from '../LoaderView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoData: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props

    const {params} = match

    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(videoItemDetailsApiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channelName: data.video_details.channel.name,
        channelProfileImageUrl: data.video_details.channel.profile_image_url,
        channelSubscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderPlayVideoView = () => {
    const {videoData, isLiked, isDisliked} = this.state

    const {match} = this.props

    const {params} = match

    const {id} = params

    return (
      <VideoPlayer
        videoData={videoData}
        key={id}
        isLiked={isLiked}
        isDisliked={isDisliked}
        onClickLike={this.onClickLike}
        onClickDislike={this.onClickDislike}
      />
    )
  }

  clickOnRetry = () => {
    this.getVideoData()
  }

  renderFailureView = () => <FailureView clickOnRetry={this.clickOnRetry} />

  renderLoadingView = () => <LoaderView />

  renderVideoDetailView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPlayVideoView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'

          return (
            <>
              <Header />
              <VideoContainer bgColor={bgColor} data-testid="videoItemDetails">
                <Menu />
                <Video>{this.renderVideoDetailView()}</Video>
              </VideoContainer>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
