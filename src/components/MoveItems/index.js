// Write your React code here.

import {AiOutlineHome} from 'react-icons/ai'

import {GiPathDistance} from 'react-icons/gi'

import {BiError} from 'react-icons/bi'

import {
  BsFillBuildingsFill,
  BsFillCalendarDayFill,
  BsArrowRightCircle,
} from 'react-icons/bs'

import './index.css'

const MoveItems = props => {
  const {eachMoveData, deleteUser} = props
  const {
    estimateId,
    movingFrom,
    movingTo,
    propertySize,
    totalItems,
    distance,
    movingOn,
  } = eachMoveData

  const onDelete = () => {
    deleteUser(estimateId)
  }

  return (
    <div className="move-item">
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
          <button type="button" className="btn1" onClick={onDelete}>
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
          <span className="span">Disclaimer:</span>Please update your move date
          before todays of shifting
        </p>
      </div>
    </div>
  )
}
export default MoveItems
