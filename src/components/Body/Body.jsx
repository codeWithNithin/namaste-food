import { useEffect, useState } from "react";
import RestorauntCard from "../RestorauntCard/RestorauntCard";
import "./Body.css";

const Body = () => {
  // create 2 state variables for api
  const [restoraunts, setRestoraunts] = useState([]);
  const [filteredRestoraunts, setFilteredRestoraunts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestoraunts();
  }, []);

  function fetchRestoraunts() {
    fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    )
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
        setRestoraunts(
          resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setFilteredRestoraunts(
          resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      });
  }

  const onSearchBtnClick = () => {
    const filtered = restoraunts.filter((restoraunt) =>
      restoraunt.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestoraunts(filtered);
  };

  return (
    <div className="body">
      <div className="top">
        <div className="search">
          <input
            type="text"
            placeholder="search for food"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={onSearchBtnClick}> search </button>
        </div>
        <div>
          <button
            onClick={() => {
              const filtered = restoraunts.filter(
                (restoraunt) => restoraunt.info.avgRating > 4
              );
              setFilteredRestoraunts(filtered);
            }}
          >
            Top rated restoraunt
          </button>
        </div>
      </div>
      <div className="restoraunt-container">
        {filteredRestoraunts.map((ele) => (
          <RestorauntCard key={ele.info.id} resData={ele.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
