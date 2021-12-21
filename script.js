let altura = 0
let largura = 0

function tamanhoTela()
{
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

tamanhoTela()

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX 
posicaoY = posicaoY < 0 ? 0 : posicaoY 

console.log(posicaoX, posicaoY)

// Criar o elemento HTML de imagem
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio()
mosquito.style.position = 'absolute'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'

document.body.appendChild(mosquito)

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