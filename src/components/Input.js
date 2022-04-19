import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Input() {
  const {
    name,
    setName,
    data,
    setPlanetIncludes,
  } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
    const containPlanet = [];
    data.forEach((planet) => {
      if (planet.name.toLowerCase()
        .includes(value.toLowerCase())) {
        containPlanet.push(planet);
        setPlanetIncludes(containPlanet);
      }
    });
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ handleChange }
      />
    </div>
  );
}

export default Input;
