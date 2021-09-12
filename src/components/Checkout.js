import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="flex">
      <div className="items">
        <center>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </center>
      </div>
      <div className="total-payable">
        <h1>Total Amount Payable is: ${getBasketTotal(basket)}</h1>
      </div>
    </div>
  );
}

export default Checkout;
