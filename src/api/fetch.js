export default () => {
  return fetch('../src/public/api.json')
    .then(response => response.json())
    .then(characters => characters.results)
}