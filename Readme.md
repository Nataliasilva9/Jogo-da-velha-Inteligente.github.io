# Documentação do Jogo da Velha (Tic-Tac-Toe)

## Visão Geral

Este jogo é uma implementação simples do clássico "Jogo da Velha", onde dois jogadores se alternam para marcar suas jogadas em um tabuleiro 3x3. O jogador pode jogar como 'X' e a CPU joga como 'O'. O objetivo é alinhar três de suas marcas em linha, seja horizontalmente, verticalmente ou diagonalmente.

## Estrutura do Código

### Variáveis Principais

- **`jogo`**: Array que armazena as posições jogadas. Cada posição pode ser 'X', 'O' ou uma string vazia ('') se não estiver ocupada.
  
- **`tabuleiro`**: Array que armazena referências dos elementos do DOM representando as posições do tabuleiro.
  
- **`jogando`**: Booleano que indica se o jogo está ativo.

### Funções

#### 1. `inicializarJogo()`

Esta função reinicializa o jogo, configurando o estado inicial.

- **Ações:**
  - Define `jogando` como `true`.
  - Inicializa o array `jogo` com posições vazias.
  - Inicializa o array `tabuleiro` com referências a elementos HTML.
  - Atualiza a interface do usuário chamando `atualizaTabuleiro()`.
  - Exibe quem começa o jogo.

#### 2. `atualizaTabuleiro()`

Atualiza o conteúdo do tabuleiro com as jogadas atuais.

- **Ações:**
  - Percorre o array `jogo` e atualiza cada célula no tabuleiro com o valor correspondente ('X', 'O' ou vazio).
  - Modifica o cursor do mouse dependendo se a célula está vazia ou ocupada.

#### 3. `verificaVitoria()`

Verifica se há um vencedor.

- **Ações:**
  - Verifica todas as linhas, colunas e diagonais.
  - Retorna 'X' ou 'O' se um jogador vencer; caso contrário, retorna uma string vazia.

#### 4. `verificarEmpate()`

Verifica se o jogo terminou em empate.

- **Ações:**
  - Retorna `true` se todas as posições estiverem ocupadas e não houver vencedor.

#### 5. `jogar(p)`

Gerencia a jogada do jogador.

- **Parâmetro:**
  - `p`: Índice da posição onde o jogador deseja jogar (1 a 9).

- **Ações:**
  - Verifica se o jogo ainda está em andamento e se a posição está livre.
  - Atualiza o array `jogo` com a jogada do jogador ('X').
  - Atualiza o tabuleiro e verifica se há um vencedor ou empate.
  - Se não houver vencedor ou empate, chama a função `cpuJoga()`.

#### 6. `cpuJoga()`

Gerencia a jogada da CPU.

- **Ações:**
  - Primeiro, tenta vencer se houver uma jogada vencedora disponível.
  - Se não for possível vencer, tenta bloquear a jogada do jogador.
  - Se não puder ganhar nem bloquear, joga em uma posição aleatória.
  - Atualiza o tabuleiro e verifica se há um vencedor ou empate após a jogada da CPU.

#### 7. `iniciar()`

Função chamada ao carregar a página para iniciar o jogo.

- **Ações:**
  - Chama `inicializarJogo()` para configurar o jogo.

### Interação com o Usuário

O jogo é iniciado automaticamente ao carregar a página. Os jogadores interagem com o tabuleiro clicando nas posições disponíveis. O jogo continua até que um jogador vença ou ocorra um empate, momento em que uma mensagem de alerta é exibida.

## Conclusão

Este jogo da velha é uma implementação simples e direta que demonstra conceitos básicos de programação como arrays, manipulação do DOM e controle de fluxo. Ele pode ser expandido com funcionalidades adicionais, como um placar ou diferentes níveis de dificuldade para a CPU.