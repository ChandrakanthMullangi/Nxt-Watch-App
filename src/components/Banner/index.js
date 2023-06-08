import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import {
  BannerImageContainer,
  BannerContentContainer,
  BannerImage,
  BannerText,
  BannerButton,
  CloseButtonContainer,
  CloseButton,
} from './style'

class Banner extends Component {
  state = {isBannerClose: 'flex'}

  onClickBannerClose = () => {
    this.setState({isBannerClose: 'none'})
  }

  render() {
    const {isBannerClose} = this.state
    return (
      <BannerImageContainer bannerClose={isBannerClose} data-testid="banner">
        <BannerContentContainer>
          <BannerImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI </BannerText>
          <BannerButton type="button"> GET IT NOW </BannerButton>
        </BannerContentContainer>
        <CloseButtonContainer>
          <CloseButton
            type="button"
            onClick={this.onClickBannerClose}
            data-testid="close"
          >
            <IoMdClose />
          </CloseButton>
        </CloseButtonContainer>
      </BannerImageContainer>
    )
  }
}

export default Banner
