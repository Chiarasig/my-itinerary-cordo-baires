import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import hotelsActions from "../../redux/actions/hotelsActions";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";


export default function CardsHotels() {
  const dispatch = useDispatch();
  const { getHotels, getHotelsFilter, getHotelsSelect } = hotelsActions;
  const { hotels } = useSelector((state) => state.hotels);
  const { order, name } = useSelector((state) => state.hotels);
  const search = useRef("");
  const select = useRef("");

  useEffect(() => {
    if (hotels.length === 0) {
      dispatch(getHotels());
    }
    // eslint-disable-next-line
  }, []);

  let filter = () => {
   
    let text = search.current.value;
    let selectFil = select.current.value;
    console.log(text);
    console.log(selectFil)

    if (selectFil === 0) {
      dispatch(getHotelsFilter(text));
    } else {
      let filters = {
        text: search.current.value,
        order: select.current.value
      }
      dispatch(getHotelsSelect(filters));
    }
  };
  return (
    <>
      <div className="containerFilters">
        <input
          ref={search}
          className="search"
          type="text"
          placeholder="Search"
          onChange={filter}
        />
        <select onChange={filter} ref={select} id="filterSelect" type="select">
          <option value="0">Select Order</option>
          <option value="1">Ascend</option>
          <option value="-1">Descend</option>
        </select>
      </div>
      <div className="containerHotelsCards Font_Arial">
        {hotels.length !== 0 ? (
          hotels.map((hotels) => (
            <div key={hotels.id} className="hotelCard">
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
          ))
        ) : (
          <h1>No results were found, please try again with another search</h1>
        )}
      </div>
    </>
  );
}
