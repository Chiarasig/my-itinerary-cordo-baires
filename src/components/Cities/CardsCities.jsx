import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from '../../api/url'
import citiesActions from "../../redux/actions/citiesActions";
import { useDispatch, useSelector } from "react-redux";


export default function CardsCities() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cityReducer.cities);
  const result = useSelector((state) => state.cityReducer.filteredCities);
  const [search, setSearch] = useState("");
  const [checkbox, setCheckbox] = useState([]);
  const [checkboxChecked, setCheckboxChecked] = useState([])

  useEffect(() => {
    dispatch(citiesActions.getCities())
  }, []);

  useEffect(()=>{
    setCheckbox(new Set(cities.map((object) => object.continent)))
  },[cities]);


  useEffect(() => {
    let filter = {
      name: search,
    };
    if (checkboxChecked.length > 0) {
      filter.continent = checkboxChecked.toString();
    }
    dispatch(citiesActions.getCitiesByFilter(filter));
  }, [search, checkboxChecked])

  /* creamos una función, en la cual si está "checked" lo agregamos a un array vacio, en caso que se quite el checked lo eliminamos del array mediante el método splice, y el indexOf que nos devuelve la posición del elemento a quitar en este caso */
  function handleChange(e) {
    if (e.target.checked) {
      setCheckboxChecked([...checkboxChecked, e.target.value])
    } else {
      setCheckboxChecked(checkboxChecked.filter((data) => !data.includes(e.target.value)));
    }
  }

  const searcher = (e) => {
    setSearch(e.target.value)
  };

  let checkboxes = [...checkbox]

  return (
    <>
      <div className="containerFiltersCities">
        <input
          className="searchCities"
          type="text"
          placeholder="Search"
          value={search}
          onChange={searcher}
        />
      {checkboxes.map((checkbox, index) => (
        <label key={index} className="checkboxCities">
          <input onChange={handleChange} className="checkboxCities" type="checkbox" name="letter" value={checkbox} />{checkbox}
        </label>
      ))}
      </div>
      <div className="containerCitiessCards Font_Arial">
      {cities.length > 0 && search === '' && checkboxChecked.length === 0 ?
        cities.map((cities) => (
          <div key={cities._id} className="citiesCard text-center flex">
            <img className="cardImg" src={cities.photo} alt={cities.name} />
            <h3 className="subtittleCard">{cities.name}</h3>
            <Link to={`/cities/detail/${cities._id}`} className="viewMoreSubttitle Font_Arial"><p className="">view more</p>
            </Link>
          </div>
        )) : null }
      {result.length !== 0 ?
        result.map((cities) => (
          <div key={cities._id} className="citiesCard text-center flex">
            <img className="cardImg" src={cities.photo} alt={cities.name} />
            <h3 className="subtittleCard">{cities.name}</h3>
            <Link to={`/cities/detail/${cities._id}`} className="viewMoreSubttitle Font_Arial"><p className="">view more</p>
            </Link>
          </div>
        ))
        : (
          <h1 className="Font_Arial">No results were found, please try again with another search</h1>
        )}
        </div>
    </>
  );
}