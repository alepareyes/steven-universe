export default () => {
  return fetch('http://localhost:3000/api/api.json')
    .then(response => response.json())
    .then(characters => characters.results)
}