var jogo = []; // armazena posições jogadas
var tabuleiro = []; // armazena referências dos elementos do tabuleiro
var jogando = true; // indica se o jogo está rodando

function inicializarJogo() {
    jogando = true;
    jogo = [
        ['', '', ''], // 0,0 | 0,1 | 0,2
        ['', '', ''], // 1,0 | 1,1 | 1,2
        ['', '', '']  // 2,0 | 2,1 | 2,2
    ];
    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    atualizaTabuleiro();
    document.getElementById("dvQuemComeca").innerHTML = "Quem Começa: Jogador";
}

function atualizaTabuleiro(){
   
    for(var l = 0; l < 3; l++){
        for(var c = 0; c < 3; c++){
      tabuleiro[l][c].innerHTML = jogo[l][c];
      tabuleiro[l][c].style.cursor = jogo[l][c] == '' ? "pointer" : "default";
       if (jogo[l][c] === 'X' ) {
         tabuleiro[l][c].style.color='blue';
       }else if( jogo[l][c] === 'O'){
         tabuleiro[l][c].style.color='red';
       }else{
        tabuleiro[l][c].style.color='';
       }
    
       
      }
    }

}
 function jogar(p) {
     if (jogando == false) {
        return;
    }
   
    var linha = Math.floor((p - 1) / 3 );
    var coluna = ( p - 1) % 3;

    if (jogo[linha][coluna] !== '') {
        return;
    }

  jogo[linha][coluna] = 'X';

atualizaTabuleiro();

 }

function iniciar() {
    inicializarJogo();
}

window.addEventListener("load", iniciar);
