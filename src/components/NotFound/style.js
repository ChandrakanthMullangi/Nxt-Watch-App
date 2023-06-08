import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  display: flex;
  height: 87.5vh;
`

export const NotFoundContainer = styled.div`
  height: 87.5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: ${props => props.bgColor};
`

export const NotFoundImage = styled.img`
  width: 250px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  color: ${props => props.headingColor};
  margin-bottom: 0px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const NotFoundDescription = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => props.descriptionColor};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 35px;
  }
`
