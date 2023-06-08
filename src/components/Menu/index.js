import {AiFillHome, AiFillFire} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

import Context from '../../context/Context'

import {
  MenuAndContactUsContainer,
  MenuList,
  MenuItem,
  MenuItemLink,
  ContactUs,
  ContactUsHeading,
  SocialMediaIconsContainer,
  Image,
  ContactUsDescription,
} from './style'

const Menu = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#ffffff'

      const textColor = isDarkTheme ? '#ffffff' : '#000000'

      return (
        <MenuAndContactUsContainer bgColor={bgColor}>
          {/* Menu List */}
          <MenuList>
            <MenuItemLink to="/">
              <MenuItem textColor={textColor}>
                <AiFillHome />
                Home
              </MenuItem>
            </MenuItemLink>
            <MenuItemLink to="/trending">
              <MenuItem textColor={textColor}>
                <AiFillFire />
                Trending
              </MenuItem>
            </MenuItemLink>
            <MenuItemLink to="/gaming">
              <MenuItem textColor={textColor}>
                <SiYoutubegaming />
                Gaming
              </MenuItem>
            </MenuItemLink>
            <MenuItemLink to="/saved-videos">
              <MenuItem textColor={textColor}>
                <MdPlaylistAdd />
                Saved videos
              </MenuItem>
            </MenuItemLink>
          </MenuList>
          {/* Contact Us */}
          <ContactUs>
            <ContactUsHeading textColor={textColor}>
              CONTACT US
            </ContactUsHeading>
            <SocialMediaIconsContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaIconsContainer>
            <ContactUsDescription textColor={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUs>
        </MenuAndContactUsContainer>
      )
    }}
  </Context.Consumer>
)

export default Menu
