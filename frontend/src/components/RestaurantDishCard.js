import { useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useDispatch, useSelector } from "react-redux";
import useAddItem from "../utils/useAddItem";
import useRemoveItem from "../utils/useRemoveItem";
import ChangeRestaurant from "./ChangeRestaurant";
import { updateRes } from "../utils/cartSlice";

const RestaurantDishCard = (props) => {
  const dishObject = useSelector((store) => store.cart.dishObject);
  const resObject = useSelector((store) => store.cart.resObject);
  const addDishToCart = useAddItem();
  const removeDishFromCart = useRemoveItem();
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const { dish, resInfo } = props;
  const {
    name,
    price,
    defaultPrice,
    isVeg,
    ratings,
    description,
    imageId,
    id,
  } = dish;

  const handleAddItem = () => {
    if (!resObject) {
      setRestaurant();
      addDishToCart(dish);
    } else if (resInfo?.id !== resObject?.id) {
      setOpenDialog(true);
    } else {
      addDishToCart(dish);
    }
  };

  const handleDialogResponse = (response) => {
    if (response) {
      setRestaurant();
      addDishToCart(dish, true);
    }
    setOpenDialog(false);
  };

  const setRestaurant = () => {
    const { id, name, locality, areaName, cloudinaryImageId } = resInfo;
    dispatch(updateRes({ id, name, locality, areaName, cloudinaryImageId }));
  };

  return (
    <div className="res-dish-card" data-testid="foodItem">
      <div className="res-dish-left-container">
        <div className="res-dish-left-upper-container">
          <div className="res-dish-name">{name}</div>
          <div className="res-dish-type">
            <div className={`type-outer ${isVeg ? "" : "red-icon-outer"}`}>
              <div
                className={`type-inner ${isVeg ? "" : "red-icon-inner"}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="res-dish-price">
          &#8377; {price ? price / 100 : defaultPrice ? defaultPrice / 100 : ""}
        </div>
        {ratings?.aggregatedRating?.rating && (
          <div className="res-dish-stars">
            {ratings?.aggregatedRating?.rating}
            <StarRoundedIcon fontSize="inherit" />
          </div>
        )}
        <div className="res-dish-description">{description}</div>
      </div>
      <div className="res-dish-right-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
            imageId
          }
          alt="dish-image"
          className="res-dish-image"
        />

        {dishObject[id] ? (
          <div className="add-to-cart-aft">
            <div className="addMinus" onClick={() => removeDishFromCart(dish)}>
              -
            </div>
            <div className="cartQty">{dishObject[id].qty}</div>
            <div className="addPlus" onClick={() => addDishToCart(dish)}>
              +
            </div>
          </div>
        ) : (
          <div
            className="add-to-cart-init"
            data-testid="addBtn"
            onClick={() => handleAddItem()}
          >
            Add
          </div>
        )}
      </div>

      {openDialog && (
        <ChangeRestaurant
          open={openDialog}
          handleDialogResponse={handleDialogResponse}
        />
      )}
    </div>
  );
};

export default RestaurantDishCard;
