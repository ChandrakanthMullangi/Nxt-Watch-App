import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const GamingVideoLink = styled(Link)`
  text-decoration: none;
`

export const GamingVideoItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const GamingVideoItemImage = styled.img`
  width: 190px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const GamingVideoItemContent = styled.div`
  width: 150px;
  height: 100px;
  padding: 0px 16px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const GamingVideoItemTitle = styled.p`
  font-family: Roboto;
  line-height: 25px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.titleColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`

export const GamingVideoItemViewCount = styled.p`
  font-family: Roboto;
  color: ${props => props.viewCountColor};
`
