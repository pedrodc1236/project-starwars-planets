import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Input from './components/Input';

function App() {
  return (
    <Provider>
      <h1>Projeto Star Wars - Trybe</h1>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
