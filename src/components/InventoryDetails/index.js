// Write your React code here.
import MeterialDetails from '../MeterialDetails'

import './index.css'

const InventoryDetails = props => {
  const {items} = props
  const {inventory} = items

  return (
    <div className="">
      <ul>
        {inventory.map(eachList => (
          <MeterialDetails inventoryData={eachList} key={eachList.id} />
        ))}
      </ul>
    </div>
  )
}
export default InventoryDetails
