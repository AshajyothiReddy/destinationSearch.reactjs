// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    destinationList: [],
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteDestination = id => {
    const {destinationList} = this.state
    const filteredDestinationsList = destinationList.filter(
      each => each.id !== id,
    )
    this.setState({
      destinationList: filteredDestinationsList,
    })
  }

  render() {
    const {destinationList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationList.filter(each =>
      each.name.includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="seach-image"
          />
        </div>
        <ul className="destination-list-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              DestinationDetails={eachDestination}
              key={eachDestination.id}
              deleteDestination={this.deleteDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
