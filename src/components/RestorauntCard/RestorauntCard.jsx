import { useNavigate } from "react-router-dom";
import "./RestorauntCard.css";

const RestorauntCard = ({ resData }) => {
  const navigate = useNavigate();

  const { name, cuisines, cloudinaryImageId, avgRating, id } = resData;

  const onCardClick = () => {
    navigate(`/restourant/${id}`);
  };

  return (
    <div className="restoraunt-card" onClick={onCardClick}>
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

export const RestorauntCardWithLabel = (RestorauntCard) => {
  return (props) => {
    return (
      <div>
        <label> Promoted </label>
        <RestorauntCard {...props} />
      </div>
    );
  };
};

export default RestorauntCard;
