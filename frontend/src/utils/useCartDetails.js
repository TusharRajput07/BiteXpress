/*
    this custom hook returns the state variable representing the current qty of the cart. 
    takes live access to the dishobject. whenever something changes in the dishObject, it calculates the 
    cartQty and returns it.
    dishObject changes => cartQty state variable changes => component reloades with new value
*/

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCartDetails = () => {
  const [cartQty, setCartQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const dishObject = useSelector((store) => store.cart.dishObject);

  useEffect(() => {
    let qt = 0;
    let total = 0;
    Object.values(dishObject).forEach((value) => {
      qt += value.qty;
      total += value.dish.price
        ? (value.dish.price / 100) * value.qty
        : (value.dish.defaultPrice / 100) * value.qty;
    });
    setCartQty(qt);
    setTotalPrice(total);
  }, [dishObject]);

  return { cartQty, totalPrice };
};

export default useCartDetails;
