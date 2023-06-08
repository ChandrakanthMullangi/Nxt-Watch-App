import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'

import HomeRoute from './components/HomeRoute'

import TrendingRoute from './components/TrendingRoute'

import GamingRoute from './components/GamingRoute'

import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'

import SavedVideosRoute from './components/SavedVideosRoute'

import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

import Context from './context/Context'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <Context.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
