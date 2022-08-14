document.querySelector('#search').addEventListener('click', getPokemon);

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
	return string.toLowerCase();
}

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
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Type: ${data.type}</p>
      </div>
      </div>`;
		})
		.catch((err) => {
			document.querySelector('.pokemonBox').innerHTML = `
      <h4>Pokemon not found </h4>
      `;
			console.log('Pokemon not found', err);
		});

	e.preventDefault();
	console.log(data);
}

const fetchKantoPokemon = () => {
	fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then((response) => response.json())
		.then((allpokemon) => console.log(allpokemon));
};
