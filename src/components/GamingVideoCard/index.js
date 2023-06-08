import {
  GamingVideoLink,
  GamingVideoItem,
  GamingVideoItemImage,
  GamingVideoItemContent,
  GamingVideoItemTitle,
  GamingVideoItemViewCount,
} from './style'

import Context from '../../context/Context'

const GamingVideoCard = props => {
  const {videoData} = props

  const {id, thumbnailUrl, title, viewCount} = videoData

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        const titleColor = isDarkTheme ? '#ffffff' : '#1e293b'

        const viewCountColor = isDarkTheme ? '#cbd5e1' : '#475569'

        return (
          <GamingVideoLink to={`/videos/${id}`}>
            <GamingVideoItem>
              <GamingVideoItemImage src={thumbnailUrl} alt={title} />
              <GamingVideoItemContent>
                <GamingVideoItemTitle titleColor={titleColor}>
                  {title}
                </GamingVideoItemTitle>
                <GamingVideoItemViewCount viewCountColor={viewCountColor}>
                  {viewCount} Watching WorldWide
                </GamingVideoItemViewCount>
              </GamingVideoItemContent>
            </GamingVideoItem>
          </GamingVideoLink>
        )
      }}
    </Context.Consumer>
  )
}

export default GamingVideoCard
