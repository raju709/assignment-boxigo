// Write your React code here.
import {Component} from 'react'

import {BsFillPersonFill} from 'react-icons/bs'

import {MdOutlineEmojiTransportation} from 'react-icons/md'
import {RiLogoutCircleFill} from 'react-icons/ri'

import {TbBusStop} from 'react-icons/tb'

import MoveItems from '../MoveItems'
import MainPage from '../MainPage'

import './index.css'

class Home extends Component {
  state = {
    moveList: [],
    isVisible: true,
  }

  componentDidMount() {
    this.getMoveList()
  }

  getMoveList = async () => {
    const response = await fetch('http://test.api.boxigo.in/sample-data/')
    const fetchedData = await response.json()
    console.log(fetchedData)

    const updatedData = fetchedData.Customer_Estimate_Flow.map(eachData => ({
      estimateId: eachData.estimate_id,
      fromAddress: eachData.from_address,
      toAddress: eachData.to_address,
      movingFrom: eachData.moving_from,
      movingOn: eachData.moving_on,
      distance: eachData.distance,
      userId: eachData.user_id,
      propertySize: eachData.property_size,
      movingTo: eachData.moving_to,
      totalItems: eachData.total_items,
      oldHouseAdditionalInfo: eachData.old_house_additional_info,
      newFloorNo: eachData.new_floor_no,
      newElevatorAvailability: eachData.new_elevator_availability,
      newParkingDistance: eachData.new_parking_distance,
      oldFloorNo: eachData.old_floor_no,
      oldElevatorAvailability: eachData.old_elevator_availability,
      oldParkingDistance: eachData.old_parking_distance,
      items: eachData.items,
    }))

    /* const updatedItems = updatedData.items.inventory.map(eachItem => ({
      category: eachItem.category,
    })) */

    this.setState({moveList: updatedData})
  }

  deleteUser = () => {
    this.setState({isVisible: false})
  }

  render() {
    const {moveList, isVisible} = this.state
    console.log(isVisible)

    return (
      <div className="app-container">
        <nav>
          <img
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/sdwlnz51ii8wy1kosapn"
            alt="logo"
            className="logo"
          />
        </nav>

        {isVisible ? (
          <div className="container">
            <div className="sidebar-container">
              <div className="bus-container">
                <TbBusStop className="icon" />
                <li className="lable">MY MOVES</li>
              </div>
              <div className="icon-container">
                <BsFillPersonFill className="icon" />
                <li className="lable">PROFILE</li>
              </div>
              <div className="icon-container">
                <MdOutlineEmojiTransportation className="icon" />
                <li className="lable">GET QUOTE</li>
              </div>
              <div className="icon-container">
                <RiLogoutCircleFill className="icon" />
                <li className="lable">LOGOUT</li>
              </div>
            </div>
            <div className="my-moves-container">
              <h1 className="main-heading">MY MOVES</h1>
              <div>
                <ul>
                  {moveList.map(eachMove => (
                    <MoveItems
                      eachMoveData={eachMove}
                      key={eachMove.estimateId}
                      deleteUser={this.deleteUser}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <ul>
              <MainPage listItemsData={moveList} />
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
