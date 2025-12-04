import { food_list } from "../../assets/assets"
import './FoodDisplay.css'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {


  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if ( category === 'All' || category === item.category ) {
            return <FoodItem key={item._id} id={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
