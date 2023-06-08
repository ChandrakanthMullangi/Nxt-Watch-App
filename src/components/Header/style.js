import {Link} from 'react-router-dom'

import styled from 'styled-components'

// Navbar for Small Devices

export const NavbarForSM = styled.nav`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavbarLogoForSM = styled.img`
  width: auto;
  height: 30px;
`

export const NavItemsForSM = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`

export const NavItemForSM = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
`

export const MenuForSM = styled.button`
  outline: none;
  border: none;
  color: ${props => props.menuButtonSMColor};
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
`

export const MenuItemLinkForSM = styled(Link)`
  text-decoration: none;
`

export const LogoutForSM = styled.button`
  outline: none;
  border: none;
  color: ${props => props.logoutButtonSMColor};
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
`

// Navbar for Large Devices

export const NavbarForLG = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.bgColor};
  }
`

export const NavbarLogoForLG = styled.img`
  width: auto;
  height: 40px;
`

export const NavItemsForLG = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`

export const NavItemForLG = styled.img`
  width: 40px;
  height: auto;
`

export const LogoutForLG = styled.button`
  outline: none;
  color: ${props => props.textColor};
  border: ${props => `2px solid ${props.borderColor}`};
  padding: 8px 16px;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  color: ${props => props.themeButtonColor};
  cursor: pointer;
`

// Logout popup for small devices

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  height: 160px;
  width: 300px;
  background-color: ${props => props.popupBgColor};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 250px;
    width: 450px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  border: 1px solid gray;
  height: 35px;
  width: 70px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    height: 50px;
    width: 100px;
  }
`
export const ConfirmButton = styled.button`
  border: 1px solid #3b82f6;
  background-color: #3b82f6;
  color: white;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  height: 35px;
  width: 70px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    height: 50px;
    width: 100px;
  }
`
export const PopupMessage = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  text-align: center;
  color: ${props => props.popupMessageColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 260px;
  @media screen and (min-width: 768px) {
    width: 410px;
  }
`

// Menu popup container for small devices */

export const MenuPopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`

export const CloseIconButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 5vh;
`

export const CloseIconButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
`

export const MenuOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100vw;
`

export const MenuOption = styled.li`
  list-style-type: none;
  margin-bottom: 20px;
  width: 30vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Option = styled.span`
  margin-left: 8px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
`
