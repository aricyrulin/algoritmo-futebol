class Time {
	constructor(nomeCompleto, nome, logo, sigla, estado, estadio, tecnico) {
		this._nomeCompleto = nomeCompleto;
		this._nome = nome;
		this._logo = logo;
		this._sigla = sigla;
		this._tecnico = tecnico;
		this._estadio = estadio;
		this._estado = estado;
		this._jogadores = [];
	}

	get nome() {
		return this._nome;
	}
	get logo() {
		return this._logo;
	}
	get sigla() {
		return this._sigla;
	}
	get estado() {
		return this._estado;
	}
	get estadio() {
		return this._estadio;
	}
	get tecnico() {
		return this._tecnico;
	}
	get jogadores() {
		return this._jogadores;
	}

	addJogador(jogador) {
		jogadores.push(jogador);
	}
}

const americaMG = new Time(
	'América Futebol Clube',
	'América-MG',
	'https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_do_America_Futebol_Clube.svg',
	'AME',
	'Minas Gerais',
	{
		nome: 'Estádio Raimundo Sampaio',
		apelido: 'Arena Independência',
		capacidade: 23018,
		local: 'Belo Horizonte, MG',
	},
	'Vagner Mancini'
);
const athleticoPR = new Time(
	'Clube Athletico Paranaense',
	'Athletico-PR',
	'https://upload.wikimedia.org/wikipedia/pt/c/c7/Club_Athletico_Paranaense_2019.png',
	'CAP',
	'Paraná',
	{
		nome: 'Estádio Joaquim Américo Guimarães',
		apelido: 'Arena da Baixada',
		capacidade: 43000,
		local: 'Curitiba, PR',
	},
	'Fábio Carille'
);
const atleticoGO = new Time(
	'Atlético Clube Goianiense',
	'Atlético-GO',
	'https://upload.wikimedia.org/wikipedia/pt/c/cc/Atl%C3%A9tico_Clube_Goianiense_escudo_2020.png',
	'ACG',
	'Goiás',
	{
		nome: 'Estádio Antônio Accioly',
		apelido: 'Castelo do Dragão',
		capacidade: 12500,
		local: 'Goiânia, GO',
	},
	'Umberto Louzer'
);
const atleticoMG = new Time(
	'Clube Atlético Mineiro',
	'Atlético-MG',
	'https://upload.wikimedia.org/wikipedia/commons/2/27/Clube_Atl%C3%A9tico_Mineiro_logo.svg',
	'CAM',
	'Minas Gerais',
	{
		nome: 'Estádio Governador Magalhães Pinto',
		apelido: 'Mineirão',
		capacidade: 62000,
		local: 'Belo Horizonte, MG',
	},
	'Antonio Mohamed'
);
const avai = new Time(
	'Avaí Futebol Clube',
	'Avaí',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Avai_FC_%2805-E%29_-_SC.svg/1200px-Avai_FC_%2805-E%29_-_SC.svg.png',
	'AVA',
	'Santa Catarina',
	{
		nome: 'Estádio Aderbal Ramos da Silva',
		apelido: 'Ressacada',
		capacidade: 17800,
		local: 'Florianópolis, SC',
	},
	'Eduardo Barroca'
);
const botafogo = new Time(
	'Botafogo de Futebol e Regatas',
	'Botafogo',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Escudo_Botafogo.png/800px-Escudo_Botafogo.png',
	'BOT',
	'Rio de Janeiro',
	{
		nome: 'Estádio Olímpico Nilton Santos',
		apelido: 'Engenhão',
		capacidade: 46831,
		local: 'Rio de Janeiro, RJ',
	},
	'Luís Castro'
);
const ceara = new Time(
	'Ceará Sporting Club',
	'Ceará',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cear%C3%A1_Sporting_Club_logo.svg/1200px-Cear%C3%A1_Sporting_Club_logo.svg.png',
	'CEA',
	'Ceará',
	{
		nome: 'Estádio Governador Plácido Castelo',
		apelido: 'Arena Castelão',
		capacidade: 63903,
		local: 'Fortaleza, CE',
	},
	'Dorival Junior'
);
const corinthians = new Time(
	'Sport Club Corinthians Paulista',
	'Corinthians',
	'https://upload.wikimedia.org/wikipedia/en/5/5a/Sport_Club_Corinthians_Paulista_crest.svg',
	'COR',
	'São Paulo',
	{
		nome: 'Neo Química Arena',
		apelido: 'Neo Química Arena',
		capacidade: 49205,
		local: 'São Paulo, SP',
	},
	'Vítor Pereira'
);
const coritiba = new Time(
	'Coritiba Foot Ball Club',
	'Coritiba',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Coritiba_FBC_%282011%29_-_PR.svg/1200px-Coritiba_FBC_%282011%29_-_PR.svg.png',
	'CFC',
	'Paraná',
	{
		nome: 'Estádio Major Antônio Couto Pereira',
		apelido: 'Couto Pereira',
		capacidade: 40502,
		local: 'Curitiba, Paraná',
	},
	'Gustavo Morínigo'
);
const cuiaba = new Time(
	'Cuiabá Esporte Clube',
	'Cuiabá',
	'https://upload.wikimedia.org/wikipedia/pt/2/20/Cuiab%C3%A1EC2020.png',
	'CUI',
	'Mato Grosso',
	{
		nome: 'Arena Pantanal',
		apelido: 'Arena Pantanal',
		capacidade: 41112,
		local: 'Cuiabá, MT',
	},
	'Pintado'
);
const flamengo = new Time(
	'Clube de Regatas do Flamengo',
	'Flamengo',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/800px-Flamengo_braz_logo.svg.png',
	'FLA',
	'Rio de Janeiro',
	{
		nome: 'Estádio Jornalista Mário Filho',
		apelido: 'Maracanã',
		capacidade: 78838,
		local: 'Rio de Janeiro, RJ',
	},
	'Paulo Sousa'
);
const fluminense = new Time(
	'Fluminense Football Club',
	'Fluminense',
	'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1200px-FFC_escudo.svg.png',
	'FLU',
	'Rio de Janeiro',
	{
		nome: 'Estádio Jornalista Mário Filho',
		apelido: 'Maracanã',
		capacidade: 78838,
		local: 'Rio de Janeiro, RJ',
	},
	'Fernando Diniz'
);
const fortaleza = new Time(
	'Fortaleza Esporte Clube',
	'Fortaleza',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/FortalezaEsporteClube.svg/800px-FortalezaEsporteClube.svg.png',
	'FOR',
	'Ceará',
	{
		nome: 'Estádio Governador Plácido Castelo',
		apelido: 'Arena Castelão',
		capacidade: 63903,
		local: 'Fortaleza, CE',
	},
	'Juan Vojvoda'
);
const goias = new Time(
	'Goiás Esporte Clube',
	'Goiás',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Goias_Esporte_Clube_logo.svg/1200px-Goias_Esporte_Clube_logo.svg.png',
	'GOI',
	'Goiás',
	{
		nome: 'Estádio Hailé Pinheiro',
		apelido: 'Serrinha',
		capacidade: 10000,
		local: 'Goiânia, GO',
	},
	'Jair Ventura'
);
const internacional = new Time(
	'Sport Club Internacional',
	'Internacional',
	'https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg',
	'INT',
	'Rio Grande do Sul',
	{
		nome: 'Estádio José Pinheiro Borda',
		apelido: 'Beira-Rio',
		capacidade: 50842,
		local: 'Porto Alegre, RS',
	},
	'Mano Menezes'
);
const juventude = new Time(
	'Esporte Clube Juventude',
	'Juventude',
	'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Esporte_Clube_Juventude_logo.svg/640px-Esporte_Clube_Juventude_logo.svg.png',
	'JUV',
	'Rio Grande do Sul',
	{
		nome: 'Estádio Alfredo Jaconi',
		apelido: 'Estádio Alfredo Jaconi',
		capacidade: 19924,
		local: 'Caxias do Sul, RS',
	},
	'Eduardo Baptista'
);
const palmeiras = new Time(
	'Sociedade Esportiva Palmeiras',
	'Palmeiras',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png',
	'PAL',
	'São Paulo',
	{
		nome: 'Allianz Parque',
		apelido: 'Allianz Parque',
		capacidade: 45000,
		local: 'São Paulo, SP',
	},
	'Abel Ferreira'
);
const bragantino = new Time(
	'Red Bull Bragantino',
	'RB Bragantino',
	'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Red_Bull_Bragantino_logo.svg/1200px-Red_Bull_Bragantino_logo.svg.png',
	'BGT',
	'São Paulo',
	{
		nome: 'Estádio Nabi Abi Chedid',
		apelido: 'Estádio Nabi Abi Chedid',
		capacidade: 17724,
		local: 'Bragança Paulista, SP',
	},
	'Maurício Barbieri'
);
const santos = new Time(
	'Santos Futebol Clube',
	'Santos',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1864px-Santos_logo.svg.png',
	'SAN',
	'São Paulo',
	{
		nome: 'Estádio Urbano Caldeira',
		apelido: 'Vila Belmiro',
		capacidade: 16068,
		local: 'Santos, SP',
	},
	'Fabián Bustos'
);
const saoPaulo = new Time(
	'São Paulo Futebol Clube',
	'São Paulo',
	'https://upload.wikimedia.org/wikipedia/pt/4/4b/S%C3%A3o_Paulo_Futebol_Clube.png',
	'SAO',
	'São Paulo',
	{
		nome: 'Estádio Cícero Pompeu de Toledo',
		apelido: 'Morumbi',
		capacidade: 67052,
		local: 'São Paulo, SP',
	},
	'Rogério Ceni'
);

const timesArray = [
	americaMG,
	athleticoPR,
	atleticoGO,
	atleticoMG,
	avai,
	botafogo,
	ceara,
	corinthians,
	coritiba,
	cuiaba,
	flamengo,
	fluminense,
	fortaleza,
	goias,
	internacional,
	juventude,
	palmeiras,
	bragantino,
	santos,
	saoPaulo,
];

document.querySelector('#jogar').addEventListener('click', () => {
	for (let i = 0; i < timesArray.length; i++) {
		if (document.querySelector('#times').value === timesArray[i].nome)
			document.querySelector('#timeEscolhido').textContent =
				timesArray[i].tecnico;
	}
});
// class Jogador {
// 	constructor(nome, ovr) {
// 		this._nome = nome;
// 		this._ovr = ovr;
// 	}

// 	get nome() {
// 		return this._nome;
// 	}
// 	get ovr() {
// 		return this._ovr;
// 	}
// }

// class Atacante extends Jogador {
// 	constructor(nome, ovr) {
// 		super(nome, ovr);
// 	}
// }
