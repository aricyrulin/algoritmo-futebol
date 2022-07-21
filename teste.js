class Jogador {
	constructor(name, ovr) {
		this._name = name;
		this._ovr = ovr;
	}

	get name() {
		return this._name;
	}
	get ovr() {
		return this._ovr;
	}
}

class Atacante extends Jogador {
	constructor(name, ovr) {
		super(name, ovr);
	}
}

class Goleiro extends Jogador {
	constructor(name, ovr) {
		super(name, ovr);
	}
}

let rogerGuedes = new Atacante('Róger Guedes', 82);
let hulk = new Atacante('Hulk', 87);
let raphaelVeiga = new Atacante('Raphael Veiga', 93);

let joaoPaulo = new Goleiro('João Paulo', 85);
let weverton = new Goleiro('Weverton', 92);
let cassio = new Goleiro('Cássio', 80);

const atacantes = [rogerGuedes, hulk, raphaelVeiga];
const goleiros = [joaoPaulo, weverton, cassio];
const x1 = [];

const ataBtn = document.querySelector('#ataBtn');
const golBtn = document.querySelector('#golBtn');
const penaltiBtn = document.querySelector('#baterPenalti');

ataBtn.addEventListener('click', () => {
	let i = Math.floor(Math.random() * atacantes.length);
	document.querySelector('#atacante').textContent = atacantes[i].name;
	let x1Ata = Array(atacantes[i].ovr * 4).fill(atacantes[i]);
	for (let j = 0; j < x1Ata.length; j++) {
		x1.push(x1Ata[j]);
	}
});

golBtn.addEventListener('click', () => {
	let i = Math.floor(Math.random() * goleiros.length);
	document.querySelector('#goleiro').textContent = goleiros[i].name;
	let x1Gol = Array(goleiros[i].ovr).fill(goleiros[i]);
	for (let j = 0; j < x1Gol.length; j++) {
		x1.push(x1Gol[j]);
	}
});

penaltiBtn.addEventListener('click', () => {
	let numb = Math.floor(Math.random() * x1.length);
	if (atacantes.includes(x1[numb])) {
		document.querySelector('#foiGol').textContent = 'Gol!';
	} else {
		document.querySelector('#foiGol').textContent = 'Defendeu goleiro!';
	}
});

let jogo = [];
let min = Array(540).fill('nada');
for (let i = 0; i < min.length; i++) {
	jogo.push(min[i]);
}

let time1;
let time2;
let aGols = 0;
let bGols = 0;

function test(timeA, timeAOvr, timeB, timeBOvr) {
	time1 = timeA;
	time2 = timeB;
	let arrA;
	let arrB;
	if (timeAOvr > timeBOvr && timeAOvr - timeBOvr <= 5) {
		arrA = Array(Math.floor(timeAOvr * 1.25 * (timeAOvr / timeBOvr))).fill(
			timeA
		);
		arrB = Array(timeBOvr).fill(timeB);
	} else if (
		timeAOvr > timeBOvr &&
		timeAOvr - timeBOvr > 5 &&
		timeAOvr - timeBOvr <= 10
	) {
		arrA = Array(Math.floor(timeAOvr * 1.5 * (timeAOvr / timeBOvr))).fill(
			timeA
		);
		arrB = Array(timeBOvr).fill(timeB);
	} else if (
		timeAOvr > timeBOvr &&
		timeAOvr - timeBOvr > 10 &&
		timeAOvr - timeBOvr <= 15
	) {
		arrA = Array(Math.floor(timeAOvr * 1.75 * (timeAOvr / timeBOvr))).fill(
			timeA
		);
		arrB = Array(timeBOvr).fill(timeB);
	} else if (timeAOvr > timeBOvr && timeAOvr - timeBOvr > 15) {
		arrA = Array(Math.floor(timeAOvr * 3 * (timeAOvr / timeBOvr))).fill(timeA);
		arrB = Array(timeBOvr).fill(timeB);
	} else if (timeBOvr > timeAOvr && timeBOvr - timeAOvr <= 5) {
		arrA = Array(timeAOvr).fill(timeA);
		arrB = Array(Math.floor(timeBOvr * 1.25 * (timeBOvr / timeAOvr))).fill(
			timeB
		);
	} else if (
		timeBOvr > timeAOvr &&
		timeBOvr - timeAOvr > 5 &&
		timeBOvr - timeAOvr <= 10
	) {
		arrA = Array(timeAOvr).fill(timeA);
		arrB = Array(Math.floor(timeBOvr * 1.5 * (timeBOvr / timeAOvr))).fill(
			timeB
		);
	} else if (
		timeBOvr > timeAOvr &&
		timeBOvr - timeAOvr > 10 &&
		timeBOvr - timeAOvr <= 15
	) {
		arrA = Array(timeAOvr).fill(timeA);
		arrB = Array(Math.floor(timeBOvr * 1.75 * (timeBOvr / timeAOvr))).fill(
			timeB
		);
	} else if (timeBOvr > timeAOvr && timeBOvr - timeAOvr > 15) {
		arrA = Array(timeAOvr).fill(timeA);
		arrB = Array(Math.floor(timeBOvr * 3 * (timeBOvr / timeAOvr))).fill(timeB);
	} else {
		arrA = Array(timeAOvr).fill(timeA);
		arrB = Array(timeBOvr).fill(timeB);
	}
	for (let i = 0; i < arrA.length; i++) {
		jogo.push(arrA[i]);
	}
	for (let j = 0; j < arrB.length; j++) {
		jogo.push(arrB[j]);
	}
}

test('Atlético MG', 90, 'Corinthians', 90);

function checkResult(arr) {
	let k = Math.floor(Math.random() * arr.length);
	const result = `${time1} ${aGols} X ${bGols} ${time2}`;
	if (jogo[k] === time1) {
		aGols++;
	} else if (jogo[k] === time2) {
		bGols++;
	}
	document.querySelector('#result').textContent = result;
}

checkResult(jogo);
checkResult(jogo);
checkResult(jogo);
checkResult(jogo);
checkResult(jogo);
checkResult(jogo);
checkResult(jogo);
checkResult(jogo);
checkResult(jogo);
checkResult(jogo);