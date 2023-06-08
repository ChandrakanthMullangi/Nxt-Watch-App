import {
  TrendingVideoItemLink,
  TrendingVideoItem,
  TrendingVideoItemContainer,
  TrendingVideoItemImage,
  TrendingVideoItemContent,
  TrendingVideoItemTitle,
  TrendingVideoItemChannelName,
  TrendingVideoItemViewCountAndPublishedAt,
} from './style'

import Context from '../../context/Context'

const TrendingVideoCard = props => {
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
          <TrendingVideoItemLink to={`/videos/${id}`}>
            <TrendingVideoItem>
              <TrendingVideoItemContainer>
                <TrendingVideoItemImage src={thumbnailUrl} alt={name} />
                <TrendingVideoItemContent>
                  <TrendingVideoItemTitle titleColor={titleColor}>
                    {title}
                  </TrendingVideoItemTitle>
                  <TrendingVideoItemChannelName
                    channelAndViewCountColor={channelAndViewCountColor}
                  >
                    {name}
                  </TrendingVideoItemChannelName>
                  <TrendingVideoItemViewCountAndPublishedAt
                    channelAndViewCountColor={channelAndViewCountColor}
                  >
                    {viewCount} views {publishedAt}
                  </TrendingVideoItemViewCountAndPublishedAt>
                </TrendingVideoItemContent>
              </TrendingVideoItemContainer>
            </TrendingVideoItem>
          </TrendingVideoItemLink>
        )
      }}
    </Context.Consumer>
  )
}

export default TrendingVideoCard
