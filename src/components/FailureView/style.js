import styled from 'styled-components'

// Failure View

export const FailureViewContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  height: auto;
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const FailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  margin-bottom: 0px;
  text-align: center;
  color: ${props => props.failureHeadingTextColor};
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const FailureDescription = styled.p`
  font-family: Roboto;
  color: ${props => props.failureDescriptionTextColor};
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const FailureButton = styled.button`
  font-family: Roboto;
  background-color: #4f46e5;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`
