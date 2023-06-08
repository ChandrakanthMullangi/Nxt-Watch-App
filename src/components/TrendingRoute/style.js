import styled from 'styled-components'

// Trending

export const TrendingVideosContainer = styled.div`
  display: flex;
  height: 87.5vh;
`

export const TrendingVideoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: gray;
  padding: 8px 24px;
`

export const TrendingVideosHeading = styled.h1`
  font-family: Roboto;
  margin-left: 50px;
`

export const TrendingVideos = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const TrendingVideosList = styled.ul`
  margin-top: 50px;
`
