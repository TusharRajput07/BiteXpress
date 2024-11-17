import { useEffect, useState } from "react";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [accordionList, setAccordionList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/menu?resId=${resId}`
      );

      const json = await response.json();

      setResInfo(json?.data?.cards?.[2]?.card?.card?.info);

      setAccordionList(
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    } catch (error) {
      console.error("Error:", error); // Handle any errors
    }
  };

  return { resInfo, accordionList };
};

export default useResMenu;
