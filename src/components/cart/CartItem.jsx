import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const CartItem = ({ item }) => {
  const { id, item_image, item_name, prices, quantity, delivary_date } = item;

  const { updateQuantity, removeFromCart } = useContext(CartContext)

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item_image} alt={item_name} />
      </div>
      <div className="item-right-part">
        <div>
          <div className="item-name">{item_name}</div>
          <div className="price-container">
            <span className="current-price">₹ {prices.current_price}</span>
          </div>
          <div className="return-period">
            <span className="return-period-days">14 days</span> return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{delivary_date}</span>
          </div>
        </div>

        <div className="quantity-control">
          <button onClick={() => updateQuantity(id, -1)}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <span>{quantity}</span>
          <button onClick={() => updateQuantity(id, +1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

      </div>
      <div className="remove-from-cart" onClick={() => removeFromCart(id)}>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
};