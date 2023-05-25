import {Component} from 'react'

import {RiArrowDropDownLine} from 'react-icons/ri'

import Category from '../Category'

import './index.css'

class MeterialDetails extends Component {
  state = {
    isActive: false,
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {inventoryData} = this.props

    const {category} = inventoryData

    if (isActive) {
      console.log(isActive)

      return (
        <div className="item-container">
          <ul className="data-container">
            {category.map(eachData => (
              <Category key={eachData.id} categoryData={eachData} />
            ))}
          </ul>
        </div>
      )
    }
    return null
  }

  render() {
    const {inventoryData} = this.props

    console.log('Metarial render called ')

    console.log(inventoryData)
    const {displayName} = inventoryData

    return (
      <div className="div-container">
        <div className="name-img-container">
          <h1 className="heading">{displayName}</h1>
          <RiArrowDropDownLine
            className="drop-icon"
            onClick={this.onToggleIsActive}
          />
        </div>
        <div className="bottom-div">{this.renderAnswer()}</div>
      </div>
    )
  }
}
export default MeterialDetails
