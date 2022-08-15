document.querySelector('#search').addEventListener('click', getPokemon);

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const lowerCaseName = (string) => {
	return string.toLowerCase();
};

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
		
        <p class="types">Type: ${data.types
					.map((type) => type.type.name)
					.join(' / ')}</p>
		<p>Weight: ${data.weight}</p>
		<p>Height: ${data.height}</p>
		<p>Base Experience: ${data.base_experience}</p>
      </div>
      </div>`;
		})
		// ${data.types[0].type.name}
		.catch((err) => {
			document.querySelector('.pokemonBox').innerHTML = `
      <h4>Pokemon not found </h4>
      `;
			console.log('Pokemon not found', err);
		});

	e.preventDefault();
}

const fetchKantoPokemon = () => {
	fetch('https://pokeapi.co/api/v2/pokemon/151/')
		.then((response) => response.json())
		.then((allpokemon) => console.log(allpokemon));
};

//905 pokemon
//Generation I 1-151
//Generation II 152-251
//Generation III 252-386
//Generation IV 387-493
//Generation V 494-649
//Generation VI 650-721
//Generation VII 722-809
//Generation VIII 810-905
//bulbasaur poison grass
//mew Normal

// const fetchKantoPokemon = () => {
// 	fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
// 		.then((response) => response.json())
// 		.then((allpokemon) => console.log(allpokemon));
// };
