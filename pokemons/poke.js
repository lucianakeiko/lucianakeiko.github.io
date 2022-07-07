const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    fetch(url)
    .then(resp => resp.json())
    .then( poke => {
        console.log(poke)
    })
}

fetchPokemon()