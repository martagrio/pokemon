const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json';

const fetchPokemons = () => fetch(ENDPOINT).then(response => response.json());

export {fetchPokemons};