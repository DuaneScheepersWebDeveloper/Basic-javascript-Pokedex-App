document.querySelector('#search').addEventListener('click', getPokemon);
document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('region')
		.addEventListener('input', handleSelectRegion);
});
//---------------------------------------------------------------------
const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const lowerCaseName = (string) => {
	return string.toLowerCase();
};

const colorsTypes = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
	ice: '#DBF1FD ',
	ghost: '#DA70D6',
	steel: '#CED2D7',
	dark: '#282828',
};

//Get a single Pokemon
function getPokemon(e) {
	const name = document.querySelector('#pokemonName').value;
	const pokemonName = lowerCaseName(name);

	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
		.then((response) => response.json())
		.then((data) => {
			document.querySelector('.pokemonBox').innerHTML = `
        <div class="pokemonCardSingle">
      <div class="pokemonCardImageSingle">
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
//Displaying multiple Pokemon
//Kanto Gen 1
const fetchPokemonKanto = () => {
	const promises = [];
	for (let i = 1; i <= 150; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((data) => {
		const pokemon = data.map((data) => ({
			name: data.name,
			image: data.sprites.other['official-artwork'].front_default,
			type: data.types.map((type) => type.type.name).join(' / '),
			id: data.id,
		}));
		displayPokemon(pokemon);
	});
};
//---------------------------------------------------------------------
const fetchPokemonJohto = () => {
	const promises = [];
	for (let i = 152; i <= 251; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((data) => {
		const pokemon = data.map((data) => ({
			name: data.name,
			image: data.sprites.other['official-artwork'].front_default,
			type: data.types.map((type) => type.type.name).join(' / '),
			id: data.id,
		}));

		displayPokemon(pokemon);
	});
};
//---------------------------------------------------------------------
const fetchPokemonHoenn = () => {
	const promises = [];
	for (let i = 252; i <= 386; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((data) => {
		const pokemon = data.map((data) => ({
			name: data.name,
			image: data.sprites.other['official-artwork'].front_default,
			type: data.types.map((type) => type.type.name).join(' / '),
			id: data.id,
		}));
		displayPokemon(pokemon);
	});
};
//---------------------------------------------------------------------
const fetchPokemonSinnoh = () => {
	const promises = [];
	for (let i = 387; i <= 494; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((data) => {
		const pokemon = data.map((data) => ({
			name: data.name,
			image: data.sprites.other['official-artwork'].front_default,
			type: data.types.map((type) => type.type.name).join(' / '),
			id: data.id,
		}));
		displayPokemon(pokemon);
	});
};
//---------------------------------------------------------------------
const fetchPokemonUnova = () => {
	const promises = [];
	for (let i = 495; i <= 649; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((data) => {
		const pokemon = data.map((data) => ({
			name: data.name,
			image: data.sprites.other['official-artwork'].front_default,
			type: data.types.map((type) => type.type.name).join(' / '),
			id: data.id,
		}));
		displayPokemon(pokemon);
	});
};
//---------------------------------------------------------------------
const fetchPokemonKalos = () => {
	const promises = [];
	for (let i = 650; i <= 721; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((data) => {
		const pokemon = data.map((data) => ({
			name: data.name,
			image: data.sprites.other['official-artwork'].front_default,
			type: data.types.map((type) => type.type.name).join(' / '),
			id: data.id,
		}));
		displayPokemon(pokemon);
	});
};
//---------------------------------------------------------------------
const fetchPokemonAlola = () => {
	const promises = [];
	for (let i = 722; i <= 809; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((data) => {
		const pokemon = data.map((data) => ({
			name: data.name,
			image: data.sprites.other['official-artwork'].front_default,
			type: data.types.map((type) => type.type.name).join(' / '),
			id: data.id,
		}));
		displayPokemon(pokemon);
	});
};
//---------------------------------------------------------------------
const fetchPokemonGalar = () => {
	const promises = [];
	for (let i = 810; i <= 905; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((data) => {
		const pokemon = data.map((data) => ({
			name: data.name,
			image: data.sprites.other['official-artwork'].front_default,
			type: data.types.map((type) => type.type.name).join(' / '),
			id: data.id,
		}));
		displayPokemon(pokemon);
	});
};
//---------------------------------------------------------------------
//data.types[0].type.name
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

function handleSelectRegion(ev) {
	let select = ev.target;
	switch (select.value) {
		case 'Kanto':
			fetchPokemonKanto();
			break;
		case 'Johto':
			fetchPokemonJohto();
			break;
		case 'Hoenn':
			fetchPokemonHoenn();
			break;
		case 'Sinnoh':
			fetchPokemonSinnoh();
			break;
		case 'Unova':
			fetchPokemonUnova();
			break;
		case 'Kalos':
			fetchPokemonKalos();
			break;
		case 'Alola':
			fetchPokemonAlola();
			break;
		case 'Galar':
			fetchPokemonGalar();
			break;
		default:
			fetchPokemonKanto();
	}
}

//---------------------------------------------------------------------
const fetchMew = () => {
	fetch('https://pokeapi.co/api/v2/pokemon/1/')
		.then((response) => response.json())
		.then((data) => {
			const types = data.types.map((type) => type.type.name).join(' / ');
			console.log(types);
		});
};
//---------------------------------------------------------------------

//905 pokemon
//Generation I 1-151 Kanto
//Generation II 152-251 Johto
//Generation III 252-386 Hoenn
//Generation IV 387-493 Sinnoh
//Generation V 494-649 Unova
//Generation VI 650-721 Kalos
//Generation VII 722-809 Alola
//Generation VIII 810-905 Galar
//Bulbasaur poison grass
//Mew Normal

//---------------------------------------------------------------------
