import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestourantMenu = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://corsproxy.io/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=437301&catalog_qa=undefined&submitAction=ENTER%22`
    )
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
      });
  }, [id]);

  return (
    <div>
      <h1> name of restourant </h1>
      <p> Menu </p>

      <ul>
        <li> item1 </li>
        <li> item2 </li>
        <li> item3 </li>
      </ul>
    </div>
  );
};

export default RestourantMenu;
