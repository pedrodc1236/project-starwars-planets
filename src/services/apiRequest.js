const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const apiRequest = async () => {
  const request = await fetch(endpoint);
  const data = await request.json();
  const result = data.results;
  return result;
};

export default apiRequest;
