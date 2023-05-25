import './index.css'

const ItemsList = props => {
  const {ItemsData} = props

  const {id, displayName} = ItemsData
  console.log(id)
  console.lgo(displayName)

  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}
export default ItemsList
