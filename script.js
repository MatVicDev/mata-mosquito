let altura = 0
let largura = 0
let vidas = 1
let tempo = 60

let velocidadeMosquito = 1500

let nivel = window.location.search.replace('?nivel=', '')

if(nivel === 'normal') {
	velocidadeMosquito = 1500
} else if(nivel === 'dificil') {
	velocidadeMosquito = 1000
} else if(nivel === 'chucknorris') {
	velocidadeMosquito = 750
}


function tamanhoTela()
{
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

tamanhoTela()

let cronometro = setInterval(function() {

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criarMoscas)

		window.location.href = "vitoria.html"
	} else {
		document.getElementById('cronometro').innerHTML = tempo
		tempo--
	}

	
	
}, 1000)

function posicaoAleatoria()
{
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3) {
			window.location.href = "game_over.html"
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
		}
		vidas++
		
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX 
	posicaoY = posicaoY < 0 ? 0 : posicaoY 

	console.log(posicaoX, posicaoY)

	// Criar o elemento HTML de imagem
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.position = 'absolute'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		mosquito.remove()
	}

	document.body.appendChild(mosquito)
}

function tamanhoAleatorio()
{
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio()
{
	var lado = Math.floor(Math.random() * 2)

	switch(lado) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}