import styled from 'styled-components'

export const Home = styled.div`
  width: 100%;
  display: column;
  @media screen and (min-width: 768px) {
    height: 87.5vh;
    width: 100vw;
    display: flex;
  }
`

export const VideosContainer = styled.div`
  height: 87.5vh;
  background-color: ${props => props.bgColor};
  width: 100vw;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    height: 87.5vh;
    width: 85vw;
    overflow-y: scroll;
  }
`
