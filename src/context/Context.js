import React from 'react'

const Context = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  searchInput: '',
  savedVideos: [],
  addVideo: () => {},
  activeTab: 'Home',
  changeTab: () => {},
})

export default Context
