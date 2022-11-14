import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from '../../api/url'

export default function CardsCities() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [checkbox, setCheckbox] = useState([]);
  const [result, setResult] = useState([]);

  const [checkboxChecked, setCheckboxChecked] = useState([])

  //Fetch de varios json (arrays) de hoteles y ciudades//
  useEffect(() => {
    axios.get(`${BASE_URL}/city`)
      .then((res) => {
        console.log(res.data.response);
        setCities(res.data.response);
        setResult(res.data.response);
        setCheckbox(new Set(res.data.response.map((object) => object.continent)));
      });
    // eslint-disable-next-line
  }, []);
  console.log(checkbox);

  useEffect(() => {
    console.log("ingresa segundo usf")
    filtering();
  }, [search, checkboxChecked])

  /* creamos una función, en la cual si está "checked" lo agregamos a un array vacio, en caso que se quite el checked lo eliminamos del array mediante el método splice, y el indexOf que nos devuelve la posición del elemento a quitar en este caso */
  function handleChange(e) {
    console.log("ingresa a handleCheck");
    if (e.target.checked) {
      setCheckboxChecked([...checkboxChecked, e.target.value])
    } else {
      setCheckboxChecked(checkboxChecked.filter((data) => !data.includes(e.target.value)));
      console.log(checkboxChecked);
    }
    console.log(checkboxChecked)
  }

  function filtering() {
    console.log("checkboxChecked", checkboxChecked);
    let filterCheckbox = cities.filter(cities => checkboxChecked.includes(cities.continent) || checkboxChecked.length === 0)
    console.log(filterCheckbox)
    setResult(filterCheckbox.filter(cities => cities.name.toLowerCase().includes(search.toLowerCase())))
    console.log(result);
    console.log(search)
  }

  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value);
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
      {result.length !== 0 ?
        result.map((cities) => (
          <div key={cities._id} className="citiesCard text-center flex">
            <img className="cardImg" src={cities.photo} alt={cities.name} />
            <h3 className="subtittleCard">{cities.name}</h3>
            <Link to={`/cities/detail/${cities._id}`} className="viewMoreSubttitle Font_Arial"><p>view more</p>
            </Link>
          </div>
        ))
        : (
          <h1>No se encontraron coincidencias</h1>
        )}
        </div>
    </>
  );
}