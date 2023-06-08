import Loader from 'react-loader-spinner'

import LoadingContainer from './style'

const LoaderView = () => (
  <LoadingContainer data-testid="loader">
    <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
  </LoadingContainer>
)

export default LoaderView
