import styled from 'styled-components'

// Gaming

export const GamingVideosContainer = styled.div`
  display: flex;
  height: 87.5vh;
`

export const GamingVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 50px;
`

export const GamingVideoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: gray;
  padding: 8px 24px;
`

export const GamingVideosHeading = styled.h1`
  font-family: Roboto;
  margin-left: 50px;
`

export const GamingVideos = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  background-color: ${props => props.bgColor};
`
