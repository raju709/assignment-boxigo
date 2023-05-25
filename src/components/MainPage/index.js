// Write your React code here.

import {
  BsArrowRightCircle,
  BsFillBuildingsFill,
  BsFillCalendarDayFill,
} from 'react-icons/bs'

import {AiOutlineHome} from 'react-icons/ai'

import {GiPathDistance} from 'react-icons/gi'

import {BiError} from 'react-icons/bi'

import InventoryDetails from '../InventoryDetails'

import './index.css'

const MainPage = props => {
  const {listItemsData} = props

  const {
    estimateId,
    movingFrom,
    movingTo,
    propertySize,
    totalItems,
    distance,
    movingOn,
    oldHouseAdditionalInfo,
    newFloorNo,
    newElevatorAvailability,
    newParkingDistance,
    oldParkingDistance,
    oldElevatorAvailability,
    oldFloorNo,
    items,
  } = listItemsData[0]

  /* const updatedItems = items.inventory.map(eachItem => ({
    category: eachItem.category,
    displayName: eachItem.displayName,
    id: eachItem.id,
    name: eachItem.name,
    order: eachItem.order,
  })) */

  return (
    <>
      <div className="move-items">
        <div className="top-section">
          <div className="sub-container">
            <p>From</p>
            <p className="text">{movingFrom}</p>
          </div>
          <div className="sub-container">
            <BsArrowRightCircle className="icons" />
          </div>
          <div className="sub-container">
            <p>To</p>
            <p className="text">{movingTo}</p>
          </div>
          <div className="sub-container">
            <p>Request#</p>
            <p className="estimateid-text">{estimateId}</p>
          </div>
        </div>
        <div className="bottom-section">
          <div className="home">
            <AiOutlineHome className="icon-color" />
            <p className="bottom-text">{propertySize}</p>
          </div>
          <div className="home">
            <BsFillBuildingsFill className="icon-color" />
            <p className="bottom-text">{totalItems}</p>
          </div>
          <div className="home">
            <GiPathDistance className="icon-color" />
            <p className="bottom-text">{distance}</p>
          </div>
          <div className="home">
            <BsFillCalendarDayFill className="icon-color" />
            <p className="bottom-text">{movingOn}</p>
          </div>
          <div className="btn-container">
            <button type="button" className="btn1">
              view more Details
            </button>
            <button type="button" className="btn2">
              Quotes Awaiting
            </button>
          </div>
        </div>

        <div className="last-container">
          <BiError className="icon-color" />
          <p className="disclaimer">
            <span className="span">Disclaimer:</span>Please update your move
            date before todays of shifting
          </p>
        </div>
        <div className="AditionalDetails-container">
          <div className="first-container">
            <h1 className="additional-text">Additional Information</h1>
            <button className="additional-btn" type="button">
              Edit Aditional Info
            </button>
          </div>
          <p>{oldHouseAdditionalInfo}</p>
        </div>
        <div className="HomeDetails-container">
          <div className="first-container">
            <h1 className="additional-text">Home Details</h1>
            <button className="additional-btn" type="button">
              Edit Home Details
            </button>
          </div>

          <h1 className="existing-text">Existing Home Details</h1>
          <div className="existing-container">
            <div className="each-container">
              <p>Floor No:</p>
              <p>{newFloorNo}</p>
            </div>
            <div className="each-container">
              <p>Elevator Avilable</p>
              <p>{newElevatorAvailability}</p>
            </div>
            <div className="each-container">
              <p>Distance from Elevator</p>
              <p>{newParkingDistance} </p>
            </div>
          </div>
          <h1 className="existing-text">Old Home Details</h1>
          <div className="existing-container">
            <div className="each-container">
              <p>Floor No:</p>
              <p>{oldFloorNo}</p>
            </div>
            <div className="each-container">
              <p>Elevator Avilable</p>
              <p>{oldElevatorAvailability}</p>
            </div>
            <div className="each-container">
              <p>Distance from Elevator</p>
              <p>{oldParkingDistance} </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="first-container">
            <h1 className="additional-text">Inventory Details</h1>
            <button className="additional-btn" type="button">
              Edit Inventory
            </button>
          </div>
        </div>
        <ul>
          <InventoryDetails items={items} />
        </ul>
      </div>
    </>
  )
}
export default MainPage
