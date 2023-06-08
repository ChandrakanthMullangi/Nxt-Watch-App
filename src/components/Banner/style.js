import styled from 'styled-components'

export const BannerImageContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 300px;
  padding: 25px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.bannerClose};
  justify-content: space-between;
  align-items: center;
`

export const BannerContentContainer = styled.div`
  width: 40%;
  height: 250px;
`

export const BannerImage = styled.img`
  width: 150px;
  height: auto;
`

export const BannerText = styled.p`
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  color: #1e293b;
`

export const BannerButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 2px solid #1e293b;
  padding: 10px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
`

export const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 250px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`
