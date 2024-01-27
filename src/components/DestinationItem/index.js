// Write your code here
import './index.css'

const DestinationItem = props => {
  const {DestinationDetails, deleteDestination} = props
  const {name, imgUrl, id} = DestinationDetails

  const onDelete = () => {
    deleteDestination(id)
  }

  return (
    <li className="destination-card-container">
      <img
        src={imgUrl}
        className="destination-image"
        alt={name}
        onClick={onDelete}
      />
      <h1 className="destination-name">{name}</h1>
    </li>
  )
}

export default DestinationItem
