import styled from 'styled-components'

// Trending

export const SavedVideosContainer = styled.div`
  display: flex;
  height: 87.5vh;
`

export const SavedVideosHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: gray;
  padding: 8px 24px;
`

export const SavedVideosHeading = styled.h1`
  font-family: Roboto;
  margin-left: 50px;
`

export const SavedVideos = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const SavedVideosList = styled.ul`
  margin-top: 50px;
`
