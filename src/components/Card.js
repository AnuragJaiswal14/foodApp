import React from "react";
import "./Card.css";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "./StateProvider";
function Card({ image, label }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatches the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: uuidv4(),
        title: label,
        image: image,
        price: 14.12,
        rating: 3,
      },
    });
  };
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <img src={image} className="rounded-2xl" alt="" />
      </div>

      <h4 className="text-xl">{label}</h4>
      <div className="border-b w-10 pt-2" />
      <div className="flex justify-between items-end pt-5">
        <p className="flex items-center "></p>

        <div className="product__rating">
          {Array(4)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div>
          <p className=" t text-right- font-extralight"> $100.22</p>
          <button className="addtocart " onClick={addToBasket}>
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
