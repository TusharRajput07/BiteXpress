import RestaurantDishCard from "./RestaurantDishCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const AccordionHeader = (props) => {
  const { info, showItems, openAccordion, resInfo } = props;
  const { title, itemCards } = info;

  return (
    <div>
      <div className="accordion-header-container" onClick={openAccordion}>
        <div className="accordion-header-title">
          {title} ({itemCards.length})
        </div>
        <div>
          {showItems ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
      {showItems &&
        itemCards.map((dish) => (
          <RestaurantDishCard
            resInfo={resInfo}
            key={dish?.card?.info?.id}
            dish={dish?.card?.info}
          />
        ))}
    </div>
  );
};

export default AccordionHeader;
