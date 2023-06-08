import {
  HomeVideoLink,
  HomeVideoItem,
  HomeVideoItemContainer,
  HomeVideoItemImage,
  HomeVideoItemContentContainer,
  HomeVideoItemChannelImage,
  HomeVideoItemContent,
  HomeVideoItemTitle,
  HomeVideoItemChannelName,
  HomeVideoItemViewCountAndPublishedAt,
} from './style'

import Context from '../../context/Context'

const HomeVideoCard = props => {
  const {videoData} = props

  const {id, thumbnailUrl, title, viewCount, publishedAt} = videoData

  const {channel} = videoData

  const {name, profileImageUrl} = channel

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        const titleColor = isDarkTheme ? '#ffffff' : '#1e293b'

        const channelAndViewCountColor = isDarkTheme ? '#cbd5e1' : '#475569'

        return (
          <HomeVideoLink to={`/videos/${id}`}>
            <HomeVideoItem>
              <HomeVideoItemContainer>
                <HomeVideoItemImage src={thumbnailUrl} alt={name} />
                <HomeVideoItemContentContainer>
                  <HomeVideoItemChannelImage src={profileImageUrl} alt={name} />
                  <HomeVideoItemContent>
                    <HomeVideoItemTitle titleColor={titleColor}>
                      {title}
                    </HomeVideoItemTitle>
                    <HomeVideoItemChannelName
                      channelAndViewCountColor={channelAndViewCountColor}
                    >
                      {name}
                    </HomeVideoItemChannelName>
                    <HomeVideoItemViewCountAndPublishedAt
                      channelAndViewCountColor={channelAndViewCountColor}
                    >
                      {viewCount} views {publishedAt}
                    </HomeVideoItemViewCountAndPublishedAt>
                  </HomeVideoItemContent>
                </HomeVideoItemContentContainer>
              </HomeVideoItemContainer>
            </HomeVideoItem>
          </HomeVideoLink>
        )
      }}
    </Context.Consumer>
  )
}

export default HomeVideoCard
