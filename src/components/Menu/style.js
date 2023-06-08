import {Link} from 'react-router-dom'

import styled from 'styled-components'

// Menu and Contact us Container

export const MenuAndContactUsContainer = styled.div`
   display: none;
   @media screen and (min-width: 768px) {
    height: 87.5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px;
    width: 280px;
    background-color: ${props => props.bgColor};
   }
  }
`

// Menu Section

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 230px;
  gap: 15px;
`

export const MenuItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 230px;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.textColor};
`

export const MenuItemLink = styled(Link)`
  text-decoration: none;
`

// Contact Us Section

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ContactUsHeading = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.textColor};
`

export const SocialMediaIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`

export const Image = styled.img`
  width: 40px;
  height: auto;
`

export const ContactUsDescription = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.textColor};
`
