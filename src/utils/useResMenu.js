import { useEffect, useState } from "react";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [accordionList, setAccordionList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setResInfo(json?.data?.cards?.[2]?.card?.card?.info);

    setAccordionList(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  return { resInfo, accordionList };
};

export default useResMenu;
