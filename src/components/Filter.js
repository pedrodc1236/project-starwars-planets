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
    setData,
    array,
    setArray,
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
      setData(filterPlanet);
    }
    if (comparison === 'menor que') {
      const filterPlanet = data.filter((obj) => Number(obj[column]) < Number(value));
      setData(filterPlanet);
    }
    if (comparison === 'igual a') {
      const filterPlanet = data.filter((obj) => Number(obj[column]) === Number(value));
      setData(filterPlanet);
    }
    const newArray = array.filter((columnOption) => columnOption !== column);
    setArray(newArray);
  };

  return (
    <section>
      <form>
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ handleChangeInputNumber }
        >
          { array.map((columnOption, i) => <option key={ i }>{ columnOption }</option>) }
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
    </section>
  );
}

export default Filter;
