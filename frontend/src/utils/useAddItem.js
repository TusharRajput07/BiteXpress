/*
  this custom hook takes a dish and adds it to the dishObject in cartSlice. As it is a good practice 
  to return something from the hook, we wrap our logic inside a function and return that function.
  the logic is quite simple => 
  create a new temp Object equal to dishObject. Add the dish or increase the qty of existing dish according
  to current state of the tempObject. and dispatch the whole tempObject, which will replace the dishObject in
  the cart slice.
*/

import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../utils/cartSlice";

const useAddItem = () => {
  const dishObject = useSelector((store) => store.cart.dishObject);
  const dispatch = useDispatch();

  const addDishToCart = (dish, emptyCart) => {
    let tempObject = emptyCart ? {} : { ...dishObject };

    const dishId = dish.id;

    if (tempObject[dishId]) {
      tempObject[dishId] = {
        // can't directly mutate. so replace with a new object
        ...tempObject[dishId], // keep everything the same
        qty: tempObject[dishId].qty + 1, // just change qty
      };
    } else {
      tempObject[dishId] = {
        id: dishId,
        qty: 1,
        dish: dish,
      };
    }

    dispatch(updateItem(tempObject));
  };

  return addDishToCart;
};

export default useAddItem;
