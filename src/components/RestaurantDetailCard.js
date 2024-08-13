const RestaurantDetailCard = (props) => {
  const { resinfo } = props;
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    locality,
    areaName,
    sla,
  } = resinfo;

  return (
    <div className="res-detail-card">
      <div className="res-detail-name">{name}</div>
      <div className="res-detail-upper-container">
        <div className="res-detail-stars">{avgRating} stars</div>
        <div className="res-detail-price">{costForTwoMessage}</div>
      </div>
      <div className="res-detail-cuisine">{cuisines?.join(", ")}</div>
      <div className="res-detail-location">
        {locality}, {areaName}
      </div>
      <div className="res-detail-time">{sla?.deliveryTime} minutes</div>
    </div>
  );
};

export default RestaurantDetailCard;
