import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import apiRequest from '../services/apiRequest';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [planetIncludes, setPlanetIncludes] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [array, setArray] = useState([]);
  const contextValue = {
    loading,
    setLoading,
    data,
    setData,
    filterByName: {
      name,
    },
    setName,
    planetIncludes,
    setPlanetIncludes,
    column,
    comparison,
    value,
    setColumn,
    setComparison,
    setValue,
    array,
    setArray,
  };

  const arrayColumns = () => {
    const arrayOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    setArray(arrayOptions);
  };

  useEffect(() => {
    async function api() {
      const result = await apiRequest();
      result.forEach((el) => delete el.residents);
      setData(result);
      setLoading(false);
    }
    api();
    arrayColumns();
  }, []);

  useEffect(() => {
    setColumn(array[0]);
  }, [array]);

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
