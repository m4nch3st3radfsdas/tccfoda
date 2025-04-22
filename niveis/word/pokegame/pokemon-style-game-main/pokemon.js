// Elementos do DOM
const elements = {
  fightBtn: document.getElementById('fight-btn'),
  bagBtn: document.getElementById('bag-btn'),
  pokemonBtn: document.getElementById('pokemon-btn'),
  runBtn: document.getElementById('run-btn'),
  submitBtn: document.getElementById('submit-answer'),
  answerInput: document.getElementById('answer-input'),
  questionMenu: document.getElementById('question-menu'),
  questionText: document.getElementById('question-text'),
  dialogText: document.querySelector('.dialog-text'),
  opponentSprite: document.querySelector('.opponent-pokemon'),
  playerSprite: document.querySelector('.player-pokemon'),
  attackEffect: document.getElementById('attack-effect'),
  opponentHpBar: document.getElementById('opponent-hp-bar'),
  playerHpBar: document.getElementById('player-hp-bar'),
  victoryScreen: document.getElementById('victory-screen'),
  defeatScreen: document.getElementById('defeat-screen'),
  restartBtn: document.getElementById('restart-btn'),
  restartBtn2: document.getElementById('restart-btn-2'),
  musicControl: document.querySelector('.music-control'),
  soundControl: document.querySelector('.sound-control')
};

// Elementos de áudio
const audioElements = {
  music: document.getElementById('battle-music'),
  hit: document.getElementById('hit-sound'),
  victory: document.getElementById('victory-sound'),
  defeat: document.getElementById('defeat-sound')
};

// Banco de perguntas e respostas sobre Word Básico
const wordQuestions = [
  {
    question: "Qual guia do Word contém as opções para salvar e imprimir documentos?",
    answer: "arquivo"
  },
  {
    question: "Qual atalho de teclado salva um documento no Word?",
    answer: "ctrl s"
  },
  {
    question: "Como se chama o recurso que corrige erros de ortografia automaticamente no Word?",
    answer: "corretor ortográfico"
  },
  {
    question: "Qual botão na guia Página Inicial centraliza o texto selecionado?",
    answer: "centralizar"
  },
  {
    question: "O que o ícone com a letra 'A' e um marcador colorido representa na barra de ferramentas?",
    answer: "cor da fonte"
  },
  {
    question: "Qual guia contém as opções para inserir tabelas e imagens?",
    answer: "inserir"
  },
  {
    question: "Qual atalho coloca o texto selecionado em negrito?",
    answer: "ctrl n"
  },
  {
    question: "Como se chama a barra na parte superior do Word que mostra o nome do documento?",
    answer: "barra de título"
  },
  {
    question: "Qual opção na guia Layout altera as margens do documento?",
    answer: "margens"
  },
  {
    question: "O que o ícone com uma impressora representa na barra de ferramentas?",
    answer: "imprimir"
  },
  {
    question: "Qual atalho de teclado salva um documento no Word?",
    answer: "ctrl s"
  },
  {
    question: "Qual atalho de teclado aplica itálico ao texto selecionado?",
    answer: "ctrl i"
  },
  {
    question: "Qual atalho de teclado sublinha o texto selecionado?",
    answer: "ctrl u"
  },
  {
    question: "Qual guia permite adicionar cabeçalho e rodapé?",
    answer: "inserir"
  },
  {
    question: "Como se chama a função que permite ver alterações feitas no documento?",
    answer: "controle de alterações"
  },
  {
    question: "Qual guia é usada para alterar o espaçamento entre linhas?",
    answer: "layout"
  },
  {
    question: "Qual é o nome da ferramenta que verifica a gramática?",
    answer: "verificador gramatical"
  },
  {
    question: "Como se chama o espaço entre as bordas da página e o texto?",
    answer: "margem"
  },
  {
    question: "Qual guia você acessa para alterar o tamanho da página?",
    answer: "layout"
  },
  {
    question: "Qual recurso cria um índice automaticamente no Word?",
    answer: "sumário"
  },
  {
    question: "Como se chama a coleção de estilos de formatação pré-definidos?",
    answer: "estilos"
  },
  {
    question: "Qual é o nome da ferramenta que permite revisar e comentar um documento?",
    answer: "revisão"
  },
  {
    question: "Qual guia possui a opção 'Contar Palavras'?",
    answer: "revisão"
  },
  {
    question: "Qual é o nome do modo que mostra o documento como será impresso?",
    answer: "layout de impressão"
  },
  {
    question: "Como se chama o recurso que quebra uma página automaticamente?",
    answer: "quebra de página"
  },
  {
    question: "Qual guia permite adicionar uma quebra de seção?",
    answer: "layout"
  },
  {
    question: "Como se chama o conjunto de letras, números e símbolos com um estilo específico?",
    answer: "fonte"
  },
  {
    question: "Qual comando desfaz a última ação realizada?",
    answer: "ctrl z"
  },
  {
    question: "Qual comando refaz a última ação desfeita?",
    answer: "ctrl y"
  },
  {
    question: "Qual guia permite inserir gráficos?",
    answer: "inserir"
  },
  {
    question: "Como se chama a função que copia apenas a formatação do texto?",
    answer: "pincel de formatação"
  },
  {
    question: "Qual é o nome do recurso que cria cartas em massa a partir de um banco de dados?",
    answer: "mala direta"
  },
  {
    question: "Qual é o nome da barra que contém os menus e comandos principais?",
    answer: "faixa de opções"
  },
  {
    question: "Qual é o comando para salvar como PDF?",
    answer: "salvar como pdf"
  },
  {
    question: "Qual é a função do atalho Ctrl + Home?",
    answer: "ir para o início do documento"
  },
  {
    question: "Qual é a função do atalho Ctrl + End?",
    answer: "ir para o final do documento"
  },
  {
    question: "Qual é a função do atalho Ctrl + A?",
    answer: "selecionar tudo"
  },
  {
    question: "Qual é o comando para alterar o alinhamento para a direita?",
    answer: "ctrl r"
  },
  {
    question: "Qual é o comando para justificar o texto?",
    answer: "ctrl j"
  },
  {
    question: "Qual é a extensão padrão de arquivos do Word a partir da versão 2007?",
    answer: ".docx"
  },
  {
    question: "O que significa a sigla 'RTF' em arquivos de texto?",
    answer: "rich text format"
  },
  {
    question: "Qual comando permite localizar palavras no texto?",
    answer: "ctrl f"
  },
  {
    question: "Qual comando permite substituir palavras no texto?",
    answer: "ctrl h"
  },
  {
    question: "Qual guia permite adicionar caixas de texto e formas?",
    answer: "inserir"
  },
  {
    question: "O que o Word exibe com o atalho Ctrl + P?",
    answer: "janela de impressão"
  },
  {
    question: "Como se chama o recurso que mostra sugestões ao digitar?",
    answer: "autocorreção"
  },
  {
    question: "Qual guia permite aplicar marcas d'água no documento?",
    answer: "design"
  },
  {
    question: "Como se chama o número da página exibido automaticamente?",
    answer: "número de página"
  },
  {
    question: "Qual é o nome da visualização que permite editar cabeçalhos e rodapés?",
    answer: "modo de edição de cabeçalho e rodapé"
  },
  {
    question: "Qual guia permite aplicar temas e estilos visuais ao documento?",
    answer: "design"
  },
  {
    question: "Qual atalho recorta o texto selecionado?",
    answer: "ctrl x"
  }
];

function retiraAcento(texto) {
  let textoSemAcento = texto
    .replace(/[áàãâä]/gi, "a")
    .replace(/[éèêë]/gi, "e")
    .replace(/[íìîï]/gi, "i")
    .replace(/[óòõôö]/gi, "o")
    .replace(/[úùûü]/gi, "u")
    .replace(/[ç]/gi, "c")
    .replace(/[ñ]/gi, "n");
  return textoSemAcento;
}

// Variáveis do jogo
let gameState = {
  questionsAnswered: 0,
  correctAnswers: 0,
  playerHP: 100,
  opponentHP: 100,
  currentQuestion: null,
  usedQuestions: [],
  musicEnabled: false,
  soundEffectsEnabled: true,
  audioInitialized: false,
  battleInitialized: false
};

// Inicialização do jogo
function initGame() {
  // Configura eventos
  setupEventListeners();

  // Inicializa áudio após interação do usuário
  document.addEventListener('click', function initOnFirstClick() {
    initAudio();
    document.removeEventListener('click', initOnFirstClick);
  }, { once: true });

  // Entra em tela cheia
  enterFullscreen();

  console.log("Jogo inicializado com sucesso!");
}

// Configura os event listeners
function setupEventListeners() {
  elements.fightBtn.addEventListener('click', fight);
  elements.bagBtn.addEventListener('click', bag);
  elements.pokemonBtn.addEventListener('click', pokemon);
  elements.runBtn.addEventListener('click', run);
  elements.submitBtn.addEventListener('click', checkAnswer);
  elements.answerInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkAnswer();
  });
  elements.restartBtn.addEventListener('click', restartBattle);
  elements.restartBtn2.addEventListener('click', restartBattle);
  elements.musicControl.addEventListener('click', toggleMusic);
  elements.soundControl.addEventListener('click', toggleSound);
  setupKeyboardNavigation(); // Adicione esta linha

  console.log("Event listeners configurados");
}

function setupKeyboardNavigation() {
  window.addEventListener('keydown', (event) => {
    const focusedElement = document.activeElement;
    const actionButtons = Array.from(document.querySelectorAll('.box .actions button'));
    const currentIndex = actionButtons.indexOf(focusedElement);

    if (currentIndex !== -1) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault(); // Evita o comportamento padrão da seta
        const newIndex = (currentIndex - 1 + actionButtons.length) % actionButtons.length;
        actionButtons[newIndex].focus();
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault(); // Evita o comportamento padrão da seta
        const newIndex = (currentIndex + 1) % actionButtons.length;
        actionButtons[newIndex].focus();
      } else if (event.key === 'Enter') {
        event.preventDefault(); // Evita o comportamento padrão do Enter
        focusedElement.click(); // Simula um clique no botão focado
      }

      // Atualiza a classe 'focused' para o botão ativo
      actionButtons.forEach(button => button.classList.remove('focused'));
      document.activeElement.classList.add('focused');
    }
  });
}

// Inicializa o áudio
function initAudio() {
  if (!gameState.audioInitialized) {
    Object.values(audioElements).forEach(audio => {
      audio.volume = 0.7;
    });
    gameState.audioInitialized = true;
    console.log("Áudio inicializado");
  }
}

// Alternar música
function toggleMusic() {
  if (!gameState.audioInitialized) initAudio();

  gameState.musicEnabled = !gameState.musicEnabled;

  if (gameState.musicEnabled) {
    audioElements.music.play()
      .then(() => {
        elements.musicControl.textContent = '🔊 Música';
        console.log("Música iniciada");
      })
      .catch(e => {
        console.error("Erro ao tocar música:", e);
        elements.musicControl.textContent = '🔈 Música';
      });
  } else {
    audioElements.music.pause();
    elements.musicControl.textContent = '🔈 Música';
  }
}

// Alternar efeitos sonoros
function toggleSound() {
  gameState.soundEffectsEnabled = !gameState.soundEffectsEnabled;
  elements.soundControl.textContent =
    gameState.soundEffectsEnabled ? '🔊 Efeitos' : '🔈 Efeitos';
}

// Tocar efeito sonoro
function playSound(sound) {
  if (!gameState.soundEffectsEnabled || !gameState.audioInitialized) return;

  try {
    audioElements[sound].currentTime = 0;
    audioElements[sound].play().catch(e => console.error(`Erro ao tocar ${sound}:`, e));
  } catch (error) {
    console.error(`Erro com elemento de áudio ${sound}:`, error);
  }
}

// Entrar em tela cheia
function enterFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(err => {
      console.error("Erro ao tentar entrar em tela cheia:", err);
    });
  }
}

// Selecionar pergunta aleatória
function getRandomQuestion() {
  // Reinicia as perguntas se todas foram usadas
  if (gameState.usedQuestions.length >= wordQuestions.length) {
    gameState.usedQuestions = [];
    console.log("Perguntas reiniciadas");
  }

  // Filtra perguntas não utilizadas
  const availableQuestions = wordQuestions.filter(q => !gameState.usedQuestions.includes(q));

  // Seleciona uma pergunta aleatória
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  gameState.currentQuestion = availableQuestions[randomIndex];
  gameState.usedQuestions.push(gameState.currentQuestion);

  console.log("Pergunta selecionada:", gameState.currentQuestion.question);
  return gameState.currentQuestion;
}

// Mostrar pergunta
function showQuestion() {
  if (!gameState.battleInitialized) {
    initAudio();
    gameState.battleInitialized = true;
  }

  if (gameState.usedQuestions.length === 0) {
    getRandomQuestion();
  } else {
    gameState.currentQuestion = getRandomQuestion();
  }

  elements.questionText.textContent = gameState.currentQuestion.question;
  elements.questionMenu.style.display = 'block';
  elements.answerInput.value = '';
  elements.answerInput.focus();

  console.log("Pergunta exibida:", gameState.currentQuestion.question);
}

// Ação de lutar
function fight() {
  console.log("Botão Lutar pressionado");

  // Efeito visual de ataque
  elements.attackEffect.style.opacity = '1';

  setTimeout(() => {
    elements.attackEffect.style.opacity = '0';
    showQuestion();
  }, 300);
}

// Verificar resposta
function checkAnswer() {
  const userAnswer = elements.answerInput.value.toLowerCase().trim();

  elements.questionMenu.style.display = 'none';
  gameState.questionsAnswered++;

  console.log(`Resposta verificada: "${userAnswer}" (Correta: "${gameState.currentQuestion.answer}")`);

  if (userAnswer === gameState.currentQuestion.answer.toLowerCase()) {
    // Resposta correta
    gameState.correctAnswers++;
    elements.dialogText.textContent = 'Correto! O ataque foi eficaz!';

    // Animação e som de dano no oponente
    elements.opponentSprite.classList.add('hit-animation-opponent');
    playSound('hit'); // Toca o som de acerto

    setTimeout(() => {
      elements.opponentSprite.classList.remove('hit-animation-opponent');

      // Calcular dano
      const damage = 100 / 6;
      gameState.opponentHP = Math.max(0, gameState.opponentHP - damage);
      elements.opponentHpBar.style.width = `${gameState.opponentHP}%`;

      // Verificar vitória
      if (gameState.opponentHP <= 0) {
        setTimeout(() => {
          elements.victoryScreen.style.display = 'flex';
          audioElements.music.pause(); 
          playSound('victory');
          console.log("Vitória! Inimigo derrotado");
        }, 1000);
      }
    }, 500);
  } else {
    // Resposta incorreta
    elements.dialogText.textContent = `Errado! A resposta correta era "${gameState.currentQuestion.answer}".`;

    // Oponente contra-ataca
    setTimeout(() => {
      elements.dialogText.textContent = 'CHARIZARD usou TACKLE!';

      // Efeito de ataque do oponente
      elements.attackEffect.style.opacity = '1';
      playSound('hit');

      setTimeout(() => {
        elements.attackEffect.style.opacity = '0';

        // Animação e dano ao jogador
        elements.playerSprite.classList.add('hit-animation-player');
        playSound('hit');

        setTimeout(() => {
          elements.playerSprite.classList.remove('hit-animation-player');

          // Aplicar dano ao jogador
          gameState.playerHP = Math.max(0, gameState.playerHP - 20);
          elements.playerHpBar.style.width = `${gameState.playerHP}%`;

          // Verificar derrota
          if (gameState.playerHP <= 0) {
            setTimeout(() => {
              elements.defeatScreen.style.display = 'flex';
              audioElements.music.pause(); 
              playSound('defeat');
              console.log("Derrota! Pokémon desmaiou");
            }, 1000);
          } else {
            setTimeout(() => {
              elements.dialogText.textContent = 'O que BLASTOISE vai fazer agora?';
            }, 1000);
          }
        }, 500);
      }, 300);
    }, 1500);
  }
}

// Ações secundárias
function bag() {
  elements.dialogText.textContent = 'Você não tem itens na mochila ainda!';
  console.log("Abrir mochila");
}

function pokemon() {
  elements.dialogText.textContent = 'Você não tem outros Pokémon!';
  console.log("Trocar Pokémon");
}

function run() {
  elements.dialogText.textContent =
    Math.random() > 0.3 ? 'Você fugiu em segurança!' : "Não foi possível fugir!";
  console.log("Tentar fugir");
}

// Reiniciar batalha
function restartBattle() {
  gameState = {
    questionsAnswered: 0,
    correctAnswers: 0,
    playerHP: 100,
    opponentHP: 100,
    currentQuestion: null,
    usedQuestions: [],
    musicEnabled: gameState.musicEnabled,
    soundEffectsEnabled: gameState.soundEffectsEnabled,
    audioInitialized: gameState.audioInitialized,
    battleInitialized: false
  };

  audioElements.music.play();

  elements.playerHpBar.style.width = '100%';
  elements.opponentHpBar.style.width = '100%';
  elements.victoryScreen.style.display = 'none';
  elements.defeatScreen.style.display = 'none';
  elements.dialogText.textContent = 'Um CHARIZARAD selvagem apareceu! O que BLASTOISE vai fazer?';

  console.log("Batalha reiniciada");
}

// Inicia o jogo quando a página carrega
window.addEventListener('load', initGame);