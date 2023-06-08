import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoViewsContainer,
  VideoViewsContainerOne,
  VideoViewsContainerTwo,
  SocialButton,
  SocialButtonText,
  ViewsCount,
  PublishedAt,
  HorizontalBreak,
  ChannelImage,
  ChannelContainer,
  ChannelContentContainer,
  ChannelName,
  ChannelSubscriber,
  VideoDescription,
} from './style'

import Context from '../../context/Context'

const VideoPlayer = props => {
  const {videoData, isLiked, isDisliked, onClickLike, onClickDislike} = props

  const {
    title,
    videoUrl,
    viewCount,
    publishedAt,
    channelName,
    channelProfileImageUrl,
    channelSubscriberCount,
    description,
  } = videoData

  const clickOnLike = () => {
    onClickLike()
  }

  const clickOnDislike = () => {
    onClickDislike()
  }

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        const videoTitleColor = isDarkTheme ? '#ffffff' : '#000000'

        const videoViewsCountColor = isDarkTheme ? '#e2e8f0' : '#64748b'

        const videoPublishedAtColor = isDarkTheme ? '#e2e8f0' : '#64748b'

        const channelNameColor = isDarkTheme ? '#ffffff' : '#000000'

        const channelSubscribersColor = isDarkTheme ? '#e2e8f0' : '#64748b'

        const videoDescriptionColor = isDarkTheme ? '#ffffff' : '#000000'

        const likeIconColor = isLiked ? '#2563eb' : '#64748b'

        const dislikeIconColor = isDisliked ? '#2563eb' : '#64748b'
        return (
          <VideoPlayerContainer>
            <ReactPlayer url={videoUrl} controls width="100%" />
            <VideoTitle videoTitleColor={videoTitleColor}> {title} </VideoTitle>
            <VideoViewsContainer>
              <VideoViewsContainerOne>
                <ViewsCount videoViewsCountColor={videoViewsCountColor}>
                  {viewCount} views
                </ViewsCount>
                <PublishedAt videoPublishedAtColor={videoPublishedAtColor}>
                  {publishedAt}
                </PublishedAt>
              </VideoViewsContainerOne>
              <VideoViewsContainerTwo>
                <SocialButton
                  type="button"
                  onClick={clickOnLike}
                  color={likeIconColor}
                >
                  <AiOutlineLike size={25} />
                  <SocialButtonText> Like </SocialButtonText>
                </SocialButton>
                <SocialButton
                  type="button"
                  onClick={clickOnDislike}
                  color={dislikeIconColor}
                >
                  <AiOutlineDislike size={25} />
                  <SocialButtonText> Dislike </SocialButtonText>
                </SocialButton>
                <SocialButton type="button">
                  <BiListPlus size={25} />
                  <SocialButtonText> Saved </SocialButtonText>
                </SocialButton>
              </VideoViewsContainerTwo>
            </VideoViewsContainer>
            <HorizontalBreak />
            <ChannelContainer>
              <ChannelImage src={channelProfileImageUrl} alt={channelName} />
              <ChannelContentContainer>
                <ChannelName channelNameColor={channelNameColor}>
                  {channelName}
                </ChannelName>
                <ChannelSubscriber
                  channelSubscribersColor={channelSubscribersColor}
                >
                  {channelSubscriberCount} subscribers
                </ChannelSubscriber>
                <VideoDescription videoDescriptionColor={videoDescriptionColor}>
                  {description}
                </VideoDescription>
              </ChannelContentContainer>
            </ChannelContainer>
          </VideoPlayerContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default VideoPlayer
