import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  padding: 0px;
  @media screen and (min-width: 768px) {
    padding: 35px;
  }
`

export const VideoTitle = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  padding: 12px;
  margin-bottom: 0px;
  color: ${props => props.videoTitleColor};
  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`

export const VideoViewsContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`

export const VideoViewsContainerOne = styled.div`
  display: flex;
  align-items: center;
`

export const VideoViewsContainerTwo = styled.div`
  display: flex;
`

export const ViewsCount = styled.p`
  margin-right: 15px;
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.videoViewsCountColor};
`

export const PublishedAt = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.videoPublishedAtColor};
`

export const HorizontalBreak = styled.hr`
  width: 100%;
`

export const ChannelContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;

  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`

export const ChannelImage = styled.img`
  height: 50px;
  width: auto;
`

export const ChannelContentContainer = styled.div`
  width: 100%;
  padding-left: 25px;
`

export const ChannelName = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  color: ${props => props.channelNameColor};
`

export const ChannelSubscriber = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.channelSubscribersColor};
`

export const VideoDescription = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.videoDescriptionColor};
`

export const SocialButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  cursor: pointer;
  color: ${props => props.color};
`

export const SocialButtonText = styled.p`
  font-family: Roboto;
  font-size: 18px;
  margin-left: 8px;
`
