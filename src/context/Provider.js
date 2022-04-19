import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import apiRequest from '../services/apiRequest';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [planetIncludes, setPlanetIncludes] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
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
  };

  useEffect(() => {
    async function api() {
      const result = await apiRequest();
      result.forEach((el) => delete el.residents);
      setData(result);
      setLoading(false);
    }
    api();
  }, []);

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
