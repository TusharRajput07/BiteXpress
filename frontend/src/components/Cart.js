import { useDispatch, useSelector } from "react-redux";
import CartDishCard from "./CartDishCard";
import { Link } from "react-router-dom";
import useCartDetails from "../utils/useCartDetails";
import { updateItem } from "../utils/cartSlice";
import { RES_IMAGE_URL } from "../utils/constants";

const Cart = () => {
  const dishObject = useSelector((store) => store.cart.dishObject);
  const resObject = useSelector((store) => store.cart.resObject);
  const dispatch = useDispatch();
  const { cartQty, totalPrice } = useCartDetails();

  const { name, locality, areaName, cloudinaryImageId } = resObject ?? {};

  const handleClearCart = () => {
    dispatch(updateItem({}));
  };

  if (cartQty === 0) {
    return (
      <div className="empty-cart-container" data-testid="emptyCart">
        <h2>🍃Your cart feels very light!🍃</h2>
        <Link to="/">
          <div className="explore-restaurant">Explore Restaurants</div>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <div className="cart-page-left-container">
        <div className="cart-res-details">
          <div className="cart-res-header-left">
            <img
              src={RES_IMAGE_URL + cloudinaryImageId}
              className="cart-res-img"
            ></img>
            <div className="cart-res-name-container">
              <div className="cart-res-name">{name}</div>
              <div className="cart-res-location">
                {locality + ", " + areaName}
              </div>
            </div>
          </div>
          <div
            className="clear-cart"
            data-testid="clearCartBtn"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </div>
        </div>

        {Object.values(dishObject).map((value) => (
          <CartDishCard key={cloudinaryImageId} value={value} />
        ))}
      </div>
      <div className="cart-page-right-container">
        <div className="bill-card">
          <div className="bill-card-heading">Bill Details</div>
          <div className="bill-card-items">
            <div className="bill-card-items-left">Item Total</div>
            <div className="bill-card-items-right">
              ₹ {totalPrice.toFixed(2)}
            </div>
          </div>
          <div className="bill-card-items">
            <div className="bill-card-items-left">Delivery Fee</div>
            <div className="bill-card-items-right">FREE!</div>
          </div>
          <div className="bill-card-items">
            <div className="bill-card-items-left">Packaging and Handling</div>
            <div className="bill-card-items-right">FREE!</div>
          </div>
          <div className="bill-card-items">
            <div className="bill-card-items-left">Restaurant charges</div>
            <div className="bill-card-items-right">₹ 25</div>
          </div>
          <div className="bill-card-divider"></div>
          <div className="bill-card-pay">
            <div className="bill-card-pay-left">To Pay</div>
            <div className="bill-card-pay-right">
              ₹ {(totalPrice + 25).toFixed(2)}
            </div>
          </div>
        </div>
        <div className="bill-policy">
          <div className="note">Note :</div>
          <div className="note-content">
            {" "}
            If you cancel within 60 seconds of placing your order, a 100% refund
            will be issued. No refund for cancellations made after 60 seconds.
            <br />
            <br />
            Avoid cancellation as it leads to food wastage.
          </div>
        </div>

        <div className="proceed-pay">PROCEED TO PAY</div>
      </div>
    </div>
  );
};

export default Cart;
