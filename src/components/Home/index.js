import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LocationContainer from '../LocationContainer'
import './index.css'

class Home extends Component {
  state = {isLoading: false, locationData: []}

  componentDidMount() {
    this.apiUrlData()
  }

  apiUrlData = async () => {
    this.setState({isLoading: true})
    const options = {
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/tg/packages')

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.packages.map(location => ({
        description: location.description,
        id: location.id,
        imageUrl: location.image_url,
        name: location.name,
      }))
      this.setState({locationData: updatedData, isLoading: false})
    }
  }

  renderLocationList = () => {
    const {locationData} = this.state
    return (
      <ul className="location-container">
        {locationData.map(each => (
          <LocationContainer key={each.id} locationDetails={each} />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )
  render() {
    const {isLoading, locationData} = this.state
    console.log(locationData)
    return (
      <div className="bg">
        <h1 className="head">Travel Guide</h1>
        <hr className="line" />
        <div className="con">
          {isLoading ? this.renderLoading() : this.renderLocationList()}
        </div>
      </div>
    )
  }
}

export default Home
