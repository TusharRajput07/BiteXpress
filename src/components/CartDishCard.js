import useAddItem from "../utils/useAddItem";
import useRemoveItem from "../utils/useRemoveItem";

const CartDishCard = ({ value }) => {
  const { id, qty, dish } = value;
  const { name, isVeg, price, defaultPrice } = dish;
  const addDishToCart = useAddItem();
  const removeDishFromCart = useRemoveItem();

  return (
    <div className="cart-dish-card" data-testid="cartCard">
      <div className="cart-dish-card-left-container">
        <div className="res-dish-type">
          <div className={`type-outer ${isVeg ? "" : "red-icon-outer"}`}>
            <div
              className={`type-inner ${isVeg ? "" : "red-icon-inner"}`}
            ></div>
          </div>
        </div>
        <div className="cart-dish-name">{name}</div>
      </div>
      <div className="cart-dish-quantity-button">
        <div
          className="cart-dish-minus"
          onClick={() => removeDishFromCart(dish)}
        >
          -
        </div>
        <div className="cart-dish-qty">{qty}</div>
        <div className="cart-dish-plus" onClick={() => addDishToCart(dish)}>
          +
        </div>
      </div>
      <div className="cart-dish-price">
        ₹{" "}
        {price
          ? ((price / 100) * qty).toFixed(2)
          : ((defaultPrice / 100) * qty).toFixed(2)}
      </div>
    </div>
  );
};

export default CartDishCard;
