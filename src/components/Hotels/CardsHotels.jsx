import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import "../../index.css";

let results = [];
results.sort((a, b) => a.name.localeCompare(b.name));
function ascendentOrderer() {
  results.sort((a, b) => a.name.localeCompare(b.name));
  console.log(results);
}
function descendentOrderer() {
  results.sort((a, b) => b.name.localeCompare(a.name));
  console.log(results);
}

export default function CardsHotels() {

  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ascendente");

  useEffect(() => {
    axios.get(`${BASE_URL}/hotel`)
      .then((res) =>{
        console.log(res.data.response);
        setHotels(res.data.response)
    })
  }, [])

  const searcher = (e) => {
    setSearch(e.target.value);
  };
  if (searcher !== "") {
    console.log(searcher);
    results = hotels;
  }
  if (order === "ascendente") {
    ascendentOrderer();
    results = hotels.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
  } else if (order === "descendente") {
    descendentOrderer();
    results = hotels.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
  }
console.log(results)
  return (
    <>
    <div className="containerFilters">
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={searcher}
        />
        <select
          id="filterSelect"
          type="select"
          onChange={(e) => {
            let orderer = e.target.value;
            setOrder(orderer);
            console.log(searcher);
          }}
        >
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>
      <div className="containerHotelsCards Font_Arial">
      {results.length !== 0 ?
        results.map((hotels) => (
          <div key={hotels.id} className="hotelCard">
            <img className="cardImgHotel" src={hotels.photo} alt={hotels.name} />
            <h3 className="subtittleCard">{hotels.name}</h3>
            <Link to={`/hotels/detail/${hotels._id}`} className="viewMoreSubttitle"><p>view more</p>
            </Link>
          </div>
        ))
        : (
          <h1>No results were found, please try again with another search</h1>
        )}
        </div>
    </>
  );
}
