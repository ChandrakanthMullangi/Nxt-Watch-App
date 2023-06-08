import styled from 'styled-components'

export const HomeVideosContainer = styled.div`
  width: 100%;
`

export const HomeVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 50px;
`

// Search Bar

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 40px;
`

export const SearchInput = styled.input`
  height: 42px;
  width: 400px;
  padding: 8px;
  outline: none;
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.searchBarInputTextColor};
  background-color: ${props => props.searchBarBgColor};
  border: ${props => `1px solid ${props.searchBarBorderColor}`};
`

export const SearchButton = styled.button`
  height: 42px;
  width: 100px;
  padding: 10px;
  outline: none;
  border: none;
  font-size: 24px;
  background-color: ${props => props.searchButtonBgColor};
  color: ${props => props.searchButtonColor};
  border: ${props => `1px solid ${props.searchBarBorderColor}`};
  cursor: pointer;
`
