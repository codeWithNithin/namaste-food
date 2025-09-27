import "./RestorauntCard.css";

const RestorauntCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating } = resData;

  return (
    <div className="restoraunt-card">
      <div className="card-img">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="img"
        />
      </div>
      <div className="content">
        <h3> {name} </h3>
        <div className="ratings">
          <span>⭐</span>
          <span> {avgRating} . 45 - 50 mins </span>
        </div>
        <div className="address"> {cuisines.join(",")} </div>
      </div>
    </div>
  );
};

export default RestorauntCard;
