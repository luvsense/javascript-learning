async function fetchData() {
  try {
    const randomPokemon = Math.floor(Math.random() * (1000 - 1) + 1);
    console.log(randomPokemon);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
    );

    if (!response.ok) {
      throw new Error('could not fetch resource');
    }

    const data = await response.json();

    const pokemonName = data.forms[0].name;
    document.querySelector('#pokemonName').textContent = `${pokemonName}`;
    console.log(pokemonName);
    const pokemonSprite = data.sprites.front_default;
    document.querySelector('img').src = `${pokemonSprite}`;
  } catch (error) {
    console.error(error);
  }
}
