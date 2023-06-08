import {Component} from 'react'

import {AiOutlineSearch} from 'react-icons/ai'

import Cookies from 'js-cookie'

import HomeVideoCard from '../HomeVideoCard'

import FailureView from '../FailureView'

import LoaderView from '../LoaderView'

import {
  HomeVideosContainer,
  HomeVideosList,
  Search,
  SearchInput,
  SearchButton,
} from './style'

import Context from '../../context/Context'

import Banner from '../Banner'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IS_LOADING',
}

class HomeVideos extends Component {
  state = {
    searchInput: '',
    homeVideosData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const {searchInput} = this.state

    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(homeVideosApiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = data.videos.map(eachObj => ({
        channel: {
          name: eachObj.channel.name,
          profileImageUrl: eachObj.channel.profile_image_url,
        },
        id: eachObj.id,
        publishedAt: eachObj.published_at,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }))

      this.setState({
        homeVideosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderSuccessApiView = () => {
    const {homeVideosData} = this.state

    return (
      <HomeVideosList>
        {homeVideosData.map(eachObj => (
          <HomeVideoCard key={eachObj.id} videoData={eachObj} />
        ))}
      </HomeVideosList>
    )
  }

  clickOnRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  renderFailureApiView = () => <FailureView clickOnRetry={this.clickOnRetry} />

  renderLoadingApiView = () => <LoaderView />

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessApiView()
      case apiStatusConstants.failure:
        return this.renderFailureApiView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingApiView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          const searchBarBgColor = isDarkTheme ? 'transparent' : '#ffffff'

          const searchBarInputTextColor = isDarkTheme ? '#ffffff' : '#000000'

          const searchBarBorderColor = isDarkTheme ? '#7e858e' : '#ebebeb'

          const searchButtonBgColor = isDarkTheme ? '#424242' : '#ebebeb'

          const searchButtonColor = isDarkTheme ? '#7e858e' : '#424242'

          return (
            <HomeVideosContainer>
              <Banner />
              <Search>
                <SearchInput
                  type="text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  searchBarInputTextColor={searchBarInputTextColor}
                  searchBarBgColor={searchBarBgColor}
                  searchBarBorderColor={searchBarBorderColor}
                />
                <SearchButton
                  type="button"
                  searchButtonBgColor={searchButtonBgColor}
                  searchButtonColor={searchButtonColor}
                  searchBarBorderColor={searchBarBorderColor}
                  data-testid="searchButton"
                >
                  <AiOutlineSearch />
                </SearchButton>
              </Search>
              {this.renderHomeVideos()}
            </HomeVideosContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default HomeVideos
