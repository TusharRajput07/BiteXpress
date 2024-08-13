import { useState } from "react";
import RestaurantDetailCard from "./RestaurantDetailCard";
import { useParams } from "react-router-dom";
import { ShimmerMenu } from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import AccordionHeader from "./AccordionHeader";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, accordionList } = useResMenu(resId);
  const [openIndex, setOpenIndex] = useState(0); // boolean state variable for the index of accordion which is open

  if (!resInfo) {
    return <ShimmerMenu />;
  }
  return (
    <div className="res-menu">
      <RestaurantDetailCard resinfo={resInfo} />
      <div className="menu-heading">Bestseller Dishes</div>
      {accordionList
        ?.filter(
          (a) =>
            a?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        ?.map((a, index) => (
          // controlled component
          <AccordionHeader
            resInfo={resInfo}
            key={a?.card?.card?.title}
            info={a?.card?.card}
            showItems={index === openIndex ? true : false}
            openAccordion={() =>
              index === openIndex ? setOpenIndex(null) : setOpenIndex(index)
            }
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
