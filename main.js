const player1 = {
	name: 'Scorpion',
	hp: 10,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['Kunai'],
	attack: function () {
		console.log(this.name + ' ' + 'Fight...');
	}
};
player1.attack();

const player2 = {
	name: 'Liu Kang',
	hp: 50,
	img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
	weapon: ['Nunchaku'],
	attack: function () {
		console.log(this.name + ' ' + 'Fight...');
	}
};
player2.attack();

function createPlayer(className, player) {

	//! div.player1
	const $player1 = document.createElement('div');
	$player1.classList.add(className);

	const $arenas = document.querySelector('.arenas');
	$arenas.appendChild($player1);

//////////////////////////////////////////////////////////////
	//! div.progressbar
	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');
	$player1.appendChild($progressbar);

	//! div.life
	const $life = document.createElement('div');
	$life.classList.add('life');
	$progressbar.appendChild($life);

	let playerHpBar = ` ${player.hp}%`;
	$life.style.width = playerHpBar;

	//! div.name
	const $name = document.createElement('div');
	$name.classList.add('name');
	$progressbar.appendChild($name);

	$name.innerText = player.name + playerHpBar;

/////////////////////////////////////////////////////////////

	//! div.character
	const $character = document.createElement('div');
	$character.classList.add('character');
	$player1.appendChild($character);

	const $img = document.createElement('img');
	$img.src = player.img;
	$character.appendChild($img);

}

createPlayer('player1', player1);
createPlayer('player2', player2);