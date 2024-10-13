Aqui está um plano de cinco aulas para implementar o Jogo da Velha, dividindo o código em partes gerenciáveis, com a possibilidade de testar as alterações após cada aula.

---

## Aula 1: Estrutura Básica do Jogo

### Objetivo
Criar a estrutura inicial do jogo, com a configuração do tabuleiro e a exibição na interface.

### Código

```javascript
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
}

function atualizaTabuleiro() {
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            tabuleiro[l][c].innerHTML = jogo[l][c];
        }
    }
}

// Inicia o jogo ao carregar a página
window.addEventListener("load", inicializarJogo);
```

### Teste
1. Crie um HTML básico com 9 elementos (`<div>`) com IDs de `p1` a `p9`.
2. Verifique se, ao carregar a página, o tabuleiro é exibido vazio.

---

## Aula 2: Implementação das Jogadas do Jogador

### Objetivo
Adicionar a funcionalidade para que o jogador possa fazer jogadas.

### Código

```javascript
function jogar(p) {
    if (!jogando || jogo[Math.floor((p - 1) / 3)][(p - 1) % 3] !== '') return;

    jogo[Math.floor((p - 1) / 3)][(p - 1) % 3] = 'X';
    atualizaTabuleiro();
}

// Adiciona eventos de clique para cada posição
for (let i = 1; i <= 9; i++) {
    document.getElementById("p" + i).addEventListener("click", function() {
        jogar(i);
    });
}
```

### Teste
1. Após implementar, clique nas células do tabuleiro.
2. Verifique se as posições são preenchidas com 'X' após o clique.

---

## Aula 3: Verificação de Vitória

### Objetivo
Adicionar a funcionalidade para verificar se um jogador venceu.

### Código

```javascript
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

function jogar(p) {
    if (!jogando || jogo[Math.floor((p - 1) / 3)][(p - 1) % 3] !== '') return;

    jogo[Math.floor((p - 1) / 3)][(p - 1) % 3] = 'X';
    atualizaTabuleiro();

    let resultado = verificaVitoria();
    if (resultado) {
        alert(resultado + " VENCEU!");
        jogando = false;
        return;
    }
}
```

### Teste
1. Jogue e verifique se ao completar uma linha, coluna ou diagonal com 'X', o alerta correspondente aparece.
2. Teste todas as possibilidades de vitória.

---

## Aula 4: Verificação de Empate

### Objetivo
Adicionar a funcionalidade para verificar se o jogo terminou em empate.

### Código

```javascript
function verificarEmpate() {
    return jogo.flat().every(pos => pos !== '');
}

function jogar(p) {
    if (!jogando || jogo[Math.floor((p - 1) / 3)][(p - 1) % 3] !== '') return;

    jogo[Math.floor((p - 1) / 3)][(p - 1) % 3] = 'X';
    atualizaTabuleiro();

    let resultado = verificaVitoria();
    if (resultado) {
        alert(resultado + " VENCEU!");
        jogando = false;
        return;
    }

    // Verifica empate
    if (verificarEmpate()) {
        alert("Empate!");
        jogando = false;
    }
}
```

### Teste
1. Jogue até que todas as posições estejam preenchidas sem um vencedor.
2. Verifique se a mensagem "Empate!" é exibida corretamente.

---

## Aula 5: Implementação da Jogada da CPU

### Objetivo
Adicionar a lógica para que a CPU jogue automaticamente.

### Código

```javascript
function cpuJoga() {
    if (!jogando) return;

    // Joga aleatoriamente (pode ser aprimorado)
    let jogadaFeita = false;

    do {
        let l = Math.floor(Math.random() * 3);
        let c = Math.floor(Math.random() * 3);
        if (jogo[l][c] === '') {
            jogo[l][c] = 'O';
            jogadaFeita = true;
        }
    } while (!jogadaFeita);

    atualizaTabuleiro();

    let resultado = verificaVitoria();
    if (resultado) {
        alert(resultado + " VENCEU!");
        jogando = false;
        return;
    }

    if (verificarEmpate()) {
        alert("Empate!");
        jogando = false;
    }
}

function jogar(p) {
    // ... código existente ...

    // Chama a função da CPU após a jogada do jogador
    cpuJoga();
}
```

### Teste
1. Jogue contra a CPU e verifique se a CPU faz suas jogadas automaticamente após a sua.
2. Teste diferentes cenários para garantir que a CPU está jogando corretamente.

---

### Conclusão

Após completar as cinco aulas, você terá um jogo da velha funcional que permite a interação entre um jogador e a CPU, incluindo a verificação de vitórias e empates. Esse plano de aulas permite que você teste cada funcionalidade antes de avançar, garantindo um aprendizado sólido.