const elementoResposta = document.querySelector('#resposta')
const inputNome = document.querySelector('#inputNome')
const cancelar = document.querySelector('#cancelar')
const respostas = [
  'foi cancelado(a) por ser gostoso(a) demais.',
  'foi cancelado(a) por pegar ex de amigos(a).',
  'foi cancelado(a) por ser lindo(a) demais.',
  'foi cancelado(a) por só dar golpe.',
  'foi cancelado(a) por ter muitos contatinhos.',
  'foi cancelado(a) por ser fiel demais.',
  'foi cancelado(a) por ser corno(a) demais.',
  'foi cancelado(a) por ser feio(a) demais.',
  'foi cancelado(a) por ser insuportável.', 
  'foi cancelado(a) por se atrasar sempre.',
  'foi cancelado(a) por ser inútil.',
  'foi cancelado(a) por não ser ninguém.',
  'foi cancelado(a) por contar muita piada ruim.',
  'foi cancelado(a) por ter muita preguiça.',
  'foi cancelado(a) por ser insensível.',
  'foi cancelado(a) por ser impaciente demais.',
  'foi cancelado(a) por debochar demais.',
  'foi cancelado(a) por ser uma delícia.',
  'foi cancelado(a) por ser inteligente demais.',
  'foi cancelado(a) por ser atraente demais.',
  'foi cancelado(a) por ser BV.',
  'foi cancelado(a) por ser gado demais.',
  'foi cancelado(a) por procrastinar demais.', 
  'foi cancelado(a) por ser uma grande gostosa.',
  'foi cancelado(a) por ser uma pessoa horrível.',
  'foi cancelado(a) por ser inadimplente no Serasa.',
  'foi cancelado(a) por não fazer nada.',

]

function fazerCancelamento() {
  if (inputNome.value == '') {
    alert('Seu Nome')
    return
  }

  cancelar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputNome.value + '</div>'

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  setTimeout(function () {
    elementoResposta.style.opacity = 0
    cancelar.removeAttribute('disabled')
  }, 3000)
}