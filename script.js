var cartas1 = {
  nome: `Capitão América`,
  imagem: `https://live.staticflickr.com/65535/52359837918_e1263c4f63_c.jpg`,
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6 
  }
};

var cartas2 = {
  nome: `Homem de Ferro`,
  imagem: `https://live.staticflickr.com/65535/52359602461_45df70bbe9_c.jpg`,
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2 
  }
};

var cartas3 = {
  nome: `Vingador mais forte`,
  imagem: `https://live.staticflickr.com/65535/52360024045_684a047e44.jpg`,
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 1
  }
};
var cartas4 = {
  nome: `Playboyzinho`,
  imagem: `https://live.staticflickr.com/65535/52360023950_a2bc2770c9.jpg`,
  atributos: {
    ataque: 10,
    defesa: 5,
    magia: 10 
  }
};

var cartas5 = {

  nome: `Gavião Arqueiro`,

  imagem: `https://live.staticflickr.com/65535/52359915194_b34589efe4_c.jpg`,

  atributos: {

    ataque: 9,

    defesa: 5,

    magia: 0

  }

};

var cartas6= {
  nome: `Viuva Negra`,
  imagem: `https://live.staticflickr.com/65535/52358650547_a9c40d9591_b.jpg`,
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 0
  }
};


var cartas7 = {
  nome: `Wanda`,
  imagem: `https://live.staticflickr.com/65535/52360023850_fea2f92251_c.jpg`,
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 10
  }
};

var cartas8 = {
  nome: `Homem Formiga`,
  imagem: `https://live.staticflickr.com/65535/52360023760_d0268552af_w.jpg`,
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 0
  }
};

var cartas9 = {
  nome: `Homem Aranha`,
  imagem: `https://live.staticflickr.com/65535/52359915284_ce189ee179.jpg`,
  atributos: {
    ataque: 6,
    defesa: 9,
    magia: 7
  }
};

var cartas10 = {
  nome: `Dr. Estranho`,
  imagem: `https://live.staticflickr.com/65535/52359602301_c54d1fb67e_z.jpg`,
  atributos: {
    ataque: 8,
    defesa: 9,
    magia: 10
  }
};


var cartas = [cartas1, cartas2, cartas3, cartas4, cartas5, cartas6, cartas7, cartas8, cartas9, cartas10];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);

  while (numeroCartaMaquina == numeroCartaJogador) {
     numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById(`btnSortear`).disabled = true;
  document.getElementById(`btnJogar`).disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}


function exibirCartaJogador() {
  var divCartaJogador = document.getElementById(`carta-jogador`);
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura = `<img src="https://i.ibb.co/Qvbff2b/picwish-2.png" style=" width: inherit; height: inherit; position: absolute;">`;
  var tagHTML = `<div id='opcoes' class='carta-status' >`;

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById(`carta-maquina`);
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura = `<img src="https://i.ibb.co/Qvbff2b/picwish-2.png" style=" width: inherit; height: inherit; position: absolute;">`;
  var tagHTML = `<div id='opcoes' class='carta-status' >`;

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}