import styled from 'styled-components'

export const VideoContainer = styled.div`
  height: 87.5vh;
  display: flex;
  background-color: ${props => props.bgColor};
`

export const Video = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
`
