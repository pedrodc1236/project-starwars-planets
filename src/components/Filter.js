import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filter() {
  const {
    column,
    comparison,
    value,
    setColumn,
    setComparison,
    setValue,
    data,
    setPlanetIncludes,
  } = useContext(AppContext);

  const handleChangeInputNumber = ({ target }) => {
    if (target.name === 'column') {
      setColumn(target.value);
    }
    if (target.name === 'comparison') {
      setComparison(target.value);
    }
    if (target.name === 'value') {
      setValue(target.value);
    }
  };

  const handleFiltrarClick = () => {
    if (comparison === 'maior que') {
      const filterPlanet = data.filter((obj) => Number(obj[column]) > Number(value));
      setPlanetIncludes(filterPlanet);
    }
    if (comparison === 'menor que') {
      const filterPlanet = data.filter((obj) => Number(obj[column]) < Number(value));
      setPlanetIncludes(filterPlanet);
    }
    if (comparison === 'igual a') {
      const filterPlanet = data.filter((obj) => Number(obj[column]) === Number(value));
      setPlanetIncludes(filterPlanet);
    }
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ handleChangeInputNumber }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleChangeInputNumber }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ value }
        onChange={ handleChangeInputNumber }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFiltrarClick }
      >
        FILTRAR
      </button>
    </form>
  );
}

export default Filter;
