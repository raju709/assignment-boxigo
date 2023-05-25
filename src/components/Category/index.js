import './index.css'

const Category = props => {
  const {categoryData} = props
  const {displayName} = categoryData

  return (
    <>
      <div className="items-category-container">
        <div className="category-container">
          <h1 className="category-heading">{displayName}</h1>
        </div>
      </div>
    </>
  )
}

export default Category
