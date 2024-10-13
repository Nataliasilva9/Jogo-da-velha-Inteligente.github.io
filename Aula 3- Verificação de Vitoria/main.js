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

function atualizaTabuleiro() {
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            tabuleiro[l][c].innerHTML = jogo[l][c];
            tabuleiro[l][c].style.cursor = jogo[l][c] === '' ? "pointer" : "default";

                                // Define a cor azul para 'X' e vermelha para 'O'
                                if (jogo[l][c] === 'X') {
                                    tabuleiro[l][c].style.color = "blue";
                                } else if (jogo[l][c] === 'O') {
                                    tabuleiro[l][c].style.color = "red";
                                } else {
                                    tabuleiro[l][c].style.color = ""; // Reseta a cor quando está vazio
                                }
                    
                    
        }
    }
}

function verificaVitoria() {
    // Verifica linhas
    for (var l = 0; l < 3; l++) {
        if (jogo[l][0] === jogo[l][1] && jogo[l][1] === jogo[l][2] && jogo[l][0] !== '') return jogo[l][0];
    }
    // Verifica colunas
    for (var c = 0; c < 3; c++) {
        if (jogo[0][c] === jogo[1][c] && jogo[1][c] === jogo[2][c] && jogo[0][c] !== '') return jogo[0][c];
    }
    // Verifica diagonais
    if (jogo[0][0] === jogo[1][1] && jogo[1][1] === jogo[2][2] && jogo[1][1] !== '') return jogo[1][1];
    if (jogo[0][2] === jogo[1][1] && jogo[1][1] === jogo[2][0] && jogo[1][1] !== '') return jogo[1][1];
    return "";
}


function verificarEmpate() {
    return jogo.flat().every(pos => pos !== '');
}

function jogar(p) {
    if (!jogando || jogo[Math.floor((p - 1) / 3)][(p - 1) % 3] !== '') return;

    jogo[Math.floor((p - 1) / 3)][(p - 1) % 3] = 'X';
    atualizaTabuleiro();
    

    

}


function iniciar() {
    inicializarJogo();
}

window.addEventListener("load", iniciar);
