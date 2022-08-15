document.querySelector('#search').addEventListener('click', getPokemon);

//---------------------------------------------------------------------
const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const lowerCaseName = (string) => {
	return string.toLowerCase();
};
//---------------------------------------------------------------------
//Get a single Pokemon
function getPokemon(e) {
	const name = document.querySelector('#pokemonName').value;
	const pokemonName = lowerCaseName(name);

	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
		.then((response) => response.json())
		.then((data) => {
			document.querySelector('.pokemonBox').innerHTML = `
        <div class="pokemonCard">
      <div class="pokemonCardImage">
        <img
          src="${data.sprites.other['official-artwork'].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
	  <p class="idClass">Pokedex Id: ${data.id}</p>
        <h1>${capitalizeFirstLetter(data.name)}</h3>
		
        <p id="types"class="types">Type: ${data.types
					.map((type) => type.type.name)
					.join(' / ')}</p>
		<p>Weight: ${data.weight}</p>
		<p>Height: ${data.height}</p>
		<p>Base Experience: ${data.base_experience}</p>
      </div>
      </div>`;
			console.log(
				data.id,
				data.name,
				data.types.map((type) => type.type.name).join(' / '),
				data.weight,
				data.height,
				data.base_experience
			);
		})
		// ${data.types[0].type.name}
		.catch((err) => {
			document.querySelector('.pokemonBox').innerHTML = `
      <h4>Sorry your Pokemon not found </h4>
      `;
			console.log('Pokemon not found', err);
		});

	e.preventDefault();
}
//---------------------------------------------------------------------

const fetchPokemonKanto = () => {
	const promises = [];
	for (let i = 1; i <= 150; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((results) => {
		const pokemon = results.map((result) => ({
			name: result.name,
			image: result.sprites.other['official-artwork'].front_default,
			type: result.types.map((type) => type.type.name).join(' / '),
			id: result.id,
		}));
		displayPokemon(pokemon);
	});
};

const displayPokemon = (pokemon) => {
	console.log(pokemon);
	const pokemonHTMLString = pokemon
		.map(
			(pokeman) => `
       <div class="pokemonCard">
	   <div class="pokemonCardImage">
            <img class="card-image" src="${pokeman.image}"/>
			</div>
			<div class="pokemonInfos">
			<p>Id:${pokeman.id}</p>
            <h2 class="card-title">${capitalizeFirstLetter(pokeman.name)}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
			</div>
      </div>
    `
		)
		.join('');
	pokeContainer.innerHTML = pokemonHTMLString;
};

fetchPokemonKanto();

//---------------------------------------------------------------------
// const fetchKantoPokemon =()=> {
// 	fetch('https://pokeapi.co/api/v2/pokemon/151/')
// 		.then((response) => response.json())
// 		.then((allpokemon) => console.log(allpokemon));
// }
//---------------------------------------------------------------------

//905 pokemon
//Generation I 1-151
//Generation II 152-251
//Generation III 252-386
//Generation IV 387-493
//Generation V 494-649
//Generation VI 650-721
//Generation VII 722-809
//Generation VIII 810-905
//Bulbasaur poison grass
//Mew Normal
