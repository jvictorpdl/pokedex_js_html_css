const pokemonName = document.getElementById('pokemon_name');
const pokemonNumber = document.getElementById('pokemon_number');
const pokemonImage = document.getElementById('pokemon_image');


const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    const data = await APIResponse.json();

    return data;
}

const renderPokemon = async (pokemon) => {
    
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = `./5th Gen Animated Sprites/${num}.gif`
   
    //data['sprites']['versions']['generation-v']
   // ['black-white']['animated']['front_default'];
    //
    input.value = '';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value);
})

