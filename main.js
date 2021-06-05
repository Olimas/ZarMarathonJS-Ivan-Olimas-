const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['Kunai'],
	attack: function () {
		console.log(this.name + ' ' + 'Fight...');
	}
};
player1.attack();

const player2 = {
	player: 2,
	name: 'Liu Kang',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
	weapon: ['Nunchaku'],
	attack: function () {
		console.log(this.name + ' ' + 'Fight...');
	}
};
player2.attack();

function createElement(tag, className) {
	const $tag = document.createElement(tag);
	if (className) {
		$tag.classList.add(className);
	}
	return $tag;
}

function createPlayer(playerObj) {

	const $player = createElement('div', 'player'+playerObj.player);
	const $progressbar = createElement('div', 'progressbar');
	const $character = createElement('div', 'character');
	const $life = createElement('div', 'life');
	const $name = createElement('div', 'name');
	const $img = createElement('img');
//////////////////////////////////////////////////////////////
	let playerHpBar = ` ${playerObj.hp}%`;
	$life.style.width = playerHpBar;
	$name.innerText = playerObj.name + playerHpBar;
	$img.src = playerObj.img;

	$progressbar.appendChild($name);
	$progressbar.appendChild($life);

	$character.appendChild($img);

	$player.appendChild($progressbar);
	$player.appendChild($character);

	return $player;
}

function changeHP(player) {
	const $playerLife = document.querySelector('.player'+ player.player +' .life');
	player.hp -= Math.ceil(Math.random() * 20);

	let playerHpPercent = player.hp + '%';
	$playerLife.style.width = playerHpPercent;

	let $name = document.querySelector('.player'+ player.player +' .name')
	$name.innerText = player.name + playerHpPercent;

	if (player1.hp < 0 && player2.hp > 0) {
		$arenas.appendChild(playerLose(player2.name));
		player.hp = 0;
		$playerLife.style.width = 0;
	} else if (player1.hp > 0 && player2.hp < 0) {
		$arenas.appendChild(playerLose(player1.name));
		player.hp = 0;
		$playerLife.style.width = 0;
	} else if (player1.hp <= 0 && player2.hp <= 0) {
		$arenas.appendChild(playerLose('draw'));
		player.hp = 0;
		$playerLife.style.width = 0;
	}
	if (player.hp <= 0) {
		$name.innerText = 0;
	}
	console.log(player.hp);
}

function playerLose(name) {
	const $loseTitle = createElement('div', 'loseTitle');
	if (name != 'draw') {
		$loseTitle.innerText = name + ' win';
	} else if (name = 'draw') {
		document.querySelector('.loseTitle').remove()
		$loseTitle.innerText = name;
	}

	$randomButton.disabled = true;
	return $loseTitle;
}

$randomButton.addEventListener('click', function () {
	console.log('click');
	changeHP(player1);
	changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));