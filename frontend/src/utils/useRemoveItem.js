import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../utils/cartSlice";

const useRemoveItem = () => {
  const dishObject = useSelector((store) => store.cart.dishObject);
  const dispatch = useDispatch();

  const removeDishFromCart = (dish) => {
    const tempObject = { ...dishObject };

    const dishId = dish.id;

    tempObject[dishId] = {
      ...tempObject[dishId],
      qty: tempObject[dishId].qty - 1,
    };

    if (tempObject[dishId].qty === 0) {
      delete tempObject[dishId];
    }

    console.log(tempObject);

    dispatch(updateItem(tempObject));
  };

  return removeDishFromCart;
};

export default useRemoveItem;
