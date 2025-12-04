import { useContext } from "react"
import { assets } from "../../assets/assets"
import './FoodItem.css'
import { StoreContext } from "../../context/StoreContext"

const FoodItem = ({ id, image, name, desc, price }) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className="food-item">
      <div className="food-item-img-cnt">
        <img className="food-image" src={image} alt="" />
        {!cartItems[id]
          ? <img className="add-icon" onClick={() => addToCart(id)} src={assets.add_icon_white} />
          : <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="red remove icon" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="green add icon" />
            </div>
        }
      </div>
      <div className="food-item-details">
        <div className="wrap">
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt="starts rating" />
        </div>
        <p className="description">{desc}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
