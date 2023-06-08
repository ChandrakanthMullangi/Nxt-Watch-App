import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const HomeVideoLink = styled(Link)`
  text-decoration: none;
`

export const HomeVideoItem = styled.li`
  list-style-type: none;
  width: 400px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const HomeVideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const HomeVideoItemImage = styled.img`
  width: 400px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const HomeVideoItemContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  width: 400px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const HomeVideoItemChannelImage = styled.img`
  height: 40px;
  width: auto;
`

export const HomeVideoItemContent = styled.div`
  width: 300px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 270px;
  }
`

export const HomeVideoItemTitle = styled.p`
  font-family: Roboto;
  line-height: 25px;
  color: ${props => props.titleColor};
`

export const HomeVideoItemChannelName = styled.p`
  font-family: Roboto;
  color: ${props => props.channelAndViewCountColor};
`

export const HomeVideoItemViewCountAndPublishedAt = styled.p`
  font-family: Roboto;
  color: ${props => props.channelAndViewCountColor};
`
