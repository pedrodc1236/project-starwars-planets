import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const {
    data,
    loading,
    planetIncludes,
  } = useContext(AppContext);

  return (
    !loading
      ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          {
            planetIncludes.length === 0
              ? (
                <tbody>
                  { data.map((obj) => (
                    <tr key={ obj.name }>
                      <td>{ obj.name }</td>
                      <td>{ obj.rotation_period }</td>
                      <td>{ obj.orbital_period }</td>
                      <td>{ obj.diameter }</td>
                      <td>{ obj.climate }</td>
                      <td>{ obj.gravity }</td>
                      <td>{ obj.terrain }</td>
                      <td>{ obj.surface_water }</td>
                      <td>{ obj.population }</td>
                      <td>{ obj.films }</td>
                      <td>{ obj.created }</td>
                      <td>{ obj.edited }</td>
                      <td>{ obj.url }</td>
                    </tr>
                  ))}
                </tbody>
              )
              : (
                <tbody>
                  { planetIncludes.map((planet) => (
                    <tr key={ planet.name }>
                      <td>{ planet.name }</td>
                      <td>{ planet.rotation_period }</td>
                      <td>{ planet.orbital_period }</td>
                      <td>{ planet.diameter }</td>
                      <td>{ planet.climate }</td>
                      <td>{ planet.gravity }</td>
                      <td>{ planet.terrain }</td>
                      <td>{ planet.surface_water }</td>
                      <td>{ planet.population }</td>
                      <td>{ planet.films }</td>
                      <td>{ planet.created }</td>
                      <td>{ planet.edited }</td>
                      <td>{ planet.url }</td>
                    </tr>
                  ))}
                </tbody>
              )
          }
        </table>)
      : (
        <div>
          <h1>Loading...</h1>
        </div>
      )
  );
}

export default Table;
