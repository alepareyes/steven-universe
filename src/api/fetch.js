export default () => {
  return fetch('https://alepareyes.github.io/steven-universe/api/new-api.json')
    .then(response => response.json())
    .then(characters => characters.results)
}