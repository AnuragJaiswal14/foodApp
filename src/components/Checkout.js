import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="flex">
      <div className="total-payable">
        <h2 className="qwerty">
          Total Amount Payable is: ${getBasketTotal(basket)}
        </h2>
      </div>
      <div className="items">
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
