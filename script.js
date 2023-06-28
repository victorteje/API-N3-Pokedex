const poke_container = document.getElementById('poke-container');
const pokemon_count = 18;
const colors = {
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
	normal: '#F5F5F5'
}

const pokeIterator = async() => {
	for (let i = 1; i <= pokemon_count; i++) {
		await getData(i);
	}
}

const getData = async(id) => {
	let response = await fetch(`https:pokeapi.co/api/v2/pokemon/${id}`);
    let data = await response.json();
	console.log(data);
	printPokemon(data);
}

const printPokemon = (data) => {
	let card = document.createElement("div");
	card.classList.add("pokemon");
	poke_container.appendChild(card);
	
	let type = data.types[0].type.name;
	let cardBackground = colors[type];
	card.style.backgroundColor = cardBackground
	

	
	let imageSource = data.sprites.other['official-artwork'].front_default;

	let cardInfo =
		`<div class="img-container">
			<img src=${imageSource} alt=${data.name}>
		</div>
		<div class="info">
			<span class="number">${data.id}</span>
			<h3 class="name">${data.name}</h3>
			<small class="type">Type: ${data.types[0].type.name}<span></span></small>
		</div>`;
	
	card.innerHTML = cardInfo;
}

pokeIterator();