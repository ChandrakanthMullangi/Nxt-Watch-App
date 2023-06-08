import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const TrendingVideoItemLink = styled(Link)`
  text-decoration: none;
`

export const TrendingVideoItem = styled.li`
  list-style-type: none;
`

export const TrendingVideoItemContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 800px;
  }
`

export const TrendingVideoItemImage = styled.img`
  width: 400px;
  height: auto;
`

export const TrendingVideoItemContent = styled.div`
  width: 400px;
  padding: 8px 16px;
  @media screen and (min-width: 768px) {
    width: 800px;
  }
`

export const TrendingVideoItemTitle = styled.p`
  font-family: Roboto;
  line-height: 25px;
  color: ${props => props.titleColor};
`

export const TrendingVideoItemChannelName = styled.p`
  font-family: Roboto;
  color: ${props => props.channelAndViewCountColor};
`

export const TrendingVideoItemViewCountAndPublishedAt = styled.p`
  font-family: Roboto;
  color: ${props => props.channelAndViewCountColor};
`
