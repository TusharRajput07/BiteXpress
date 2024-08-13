// Shimmer Component
export const Shimmer = () => {
  return (
    <div className="body">
      <div className="search-container">
        <div className="shimmer-search"></div>
      </div>

      <div className="heading-container">
        <div className="shimmer-heading"></div>
        <div className="shimmer-filter"></div>
      </div>

      <div className="res-container shimmer-card-container">
        <div className="shimmer-cards"></div>
        <div className="shimmer-cards"></div>
        <div className="shimmer-cards"></div>
        <div className="shimmer-cards"></div>
        <div className="shimmer-cards"></div>
        <div className="shimmer-cards"></div>
      </div>
    </div>
  );
};

// Shimmer Menu Component
export const ShimmerMenu = () => {
  return (
    <div className="res-menu">
      <div className="res-detail-card shimmer-menu-banner"></div>
      <div className="menu-heading shimmer-heading"></div>
      <div className="res-dish-card shimmer-dish-card"></div>
      <div className="res-dish-card shimmer-dish-card"></div>
    </div>
  );
};
