import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hotelsActions from "../../redux/actions/hotelsActions";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";

export default function CardsHotels() {
  let [selectDefault, setSelectDefault] = useState("");
  let [searched, setSearched] = useState("");
  const hotels = useSelector((store) => store.hotelReducer);
  let dispatch = useDispatch();
  console.log(hotels);

  useEffect(() => {
    dispatch(hotelsActions.getHotels());
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    if (selectDefault == 0) {
      dispatch(hotelsActions.getHotelsByName(searched));
    } else {
      let filter = {
        name: searched,
        order: selectDefault,
      };
      dispatch(hotelsActions.getHotelByFilter(filter));
    }
  }, [searched, selectDefault]);

  let hand = (e) => {
    setSelectDefault(e.target.value);
  };

  let inputs = (e) => {
    setSearched(e.target.value.trim());
  };

  return (
    <>
      <div className="containerFilters">
          <input
            className="search"
            placeholder="Search..."
            onChange={inputs}
            type="text"
          />
          <select
            id="filterSelect"
            name="Select"
            type="select"
            value={selectDefault}
            onChange={hand}
          >
            <option value="0">Select order</option>
            <option value="1">Ascend</option>
            <option value="-1">Descend</option>
          </select>

      </div>
      <div className="containerHotelsCards Font_Arial">
        {
            hotels.length > 0 ?
            hotels.map(hotels => 
              <div key={hotels._id} className="hotelCard">
                <img
                  className="cardImgHotel"
                  src={hotels.photo}
                  alt={hotels.name}
                />
                <h3 className="subtittleCard">{hotels.name}</h3>
                <Link
                  to={`/hotels/detail/${hotels._id}`}
                  className="viewMoreSubttitle"
                >
                  <p>view more</p>
                </Link>
              </div>
            ) :
            <h2>No results were found, please try again with another search</h2>
        }
      </div>
    </>
  );
}
