import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {BsMoon} from 'react-icons/bs'

import {FiSun, FiMenu, FiLogOut} from 'react-icons/fi'

import {AiFillHome, AiFillFire, AiOutlineClose} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

import Popup from 'reactjs-popup'

import Context from '../../context/Context'

import {
  NavbarForSM,
  NavbarLogoForSM,
  NavItemsForSM,
  NavItemForSM,
  MenuForSM,
  MenuItemLinkForSM,
  LogoutForSM,
  NavbarForLG,
  NavbarLogoForLG,
  NavItemsForLG,
  NavItemForLG,
  LogoutForLG,
  ThemeButton,
  PopupContainer,
  PopupMessage,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  CloseIconButtonContainer,
  CloseIconButton,
  MenuPopupContainer,
  MenuOptionsContainer,
  MenuOption,
  Option,
} from './style'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value

        const onChangeTheme = () => {
          changeTheme()
        }

        const bgColor = isDarkTheme ? '#181818' : '#ffffff'

        const textColor = isDarkTheme ? '#f9f9f9' : '#3b82f6'

        const borderColor = isDarkTheme ? '#ffffff' : '#3b82f6'

        const themeButtonColor = isDarkTheme ? '#ffffff' : '#000000'

        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const logoutButtonSMColor = isDarkTheme ? '#ffffff' : '#000000'

        const menuButtonSMColor = isDarkTheme ? '#ffffff' : '#000000'

        const popupBgColor = isDarkTheme ? '#000000' : '#ffffff'

        const popupMessageColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <>
            {/* Navbar For Small Devices */}
            <NavbarForSM bgColor={bgColor}>
              <Link to="/">
                <NavbarLogoForSM src={websiteLogo} alt="website logo" />
              </Link>
              <NavItemsForSM>
                <NavItemForSM type="button">
                  <ThemeButton
                    type="button"
                    onClick={onChangeTheme}
                    themeButtonColor={themeButtonColor}
                    data-testid="theme"
                  >
                    {isDarkTheme ? <FiSun /> : <BsMoon />}
                  </ThemeButton>
                  {/* Menu Popup for Small Devices */}
                  <Popup
                    modal
                    trigger={
                      <MenuForSM
                        type="button"
                        menuButtonSMColor={menuButtonSMColor}
                      >
                        <FiMenu />
                      </MenuForSM>
                    }
                    Menu
                  >
                    {close => (
                      <MenuPopupContainer popupBgColor={popupBgColor}>
                        <CloseIconButtonContainer>
                          <CloseIconButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            <AiOutlineClose />
                          </CloseIconButton>
                        </CloseIconButtonContainer>
                        <MenuOptionsContainer>
                          <MenuItemLinkForSM to="/">
                            <MenuOption>
                              <AiFillHome /> <Option>Home</Option>
                            </MenuOption>
                          </MenuItemLinkForSM>
                          <MenuItemLinkForSM to="/trending">
                            <MenuOption>
                              <AiFillFire /> <Option>Trending</Option>
                            </MenuOption>
                          </MenuItemLinkForSM>
                          <MenuItemLinkForSM to="/gaming">
                            <MenuOption>
                              <SiYoutubegaming /> <Option> Gaming</Option>
                            </MenuOption>
                          </MenuItemLinkForSM>
                          <MenuItemLinkForSM to="/saved-videos">
                            <MenuOption>
                              <MdPlaylistAdd /> <Option>Saved videos</Option>
                            </MenuOption>
                          </MenuItemLinkForSM>
                        </MenuOptionsContainer>
                      </MenuPopupContainer>
                    )}
                  </Popup>
                  {/* Logout Popup for Small Devices */}
                  <Popup
                    modal
                    trigger={
                      <LogoutForSM
                        type="button"
                        logoutButtonSMColor={logoutButtonSMColor}
                      >
                        <FiLogOut />
                      </LogoutForSM>
                    }
                  >
                    {close => (
                      <PopupContainer popupBgColor={popupBgColor}>
                        <PopupMessage popupMessageColor={popupMessageColor}>
                          Are you sure, you want to logout?
                        </PopupMessage>
                        <ButtonsContainer>
                          <CloseButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            Cancel
                          </CloseButton>

                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </PopupContainer>
                    )}
                  </Popup>
                </NavItemForSM>
              </NavItemsForSM>
            </NavbarForSM>
            {/* Navbar For Large Devices */}
            <NavbarForLG bgColor={bgColor}>
              <Link to="/">
                <NavbarLogoForLG src={websiteLogo} alt="website logo" />
              </Link>
              <NavItemsForLG>
                <ThemeButton
                  type="button"
                  onClick={onChangeTheme}
                  themeButtonColor={themeButtonColor}
                  data-testid="theme"
                >
                  {isDarkTheme ? <FiSun /> : <BsMoon />}
                </ThemeButton>
                <NavItemForLG
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup
                  modal
                  trigger={
                    <LogoutForLG
                      type="button"
                      textColor={textColor}
                      borderColor={borderColor}
                    >
                      Logout
                    </LogoutForLG>
                  }
                >
                  {close => (
                    <PopupContainer popupBgColor={popupBgColor}>
                      <PopupMessage popupMessageColor={popupMessageColor}>
                        Are you sure, you want to logout?
                      </PopupMessage>
                      <ButtonsContainer>
                        <CloseButton
                          type="button"
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </CloseButton>

                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </NavItemsForLG>
            </NavbarForLG>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(Header)
