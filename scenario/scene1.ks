;ティラノスクリプトサンプルゲーム

*start

[cm  ]
[clearfix]
[start_keyconfig]


[bg storage="entrance2.gif" time="100"]

[playbgm storage="hold.mp3" loop=true]

;メニューボタンの表示
@showmenubutton

;メッセージウィンドウの設定
[position layer="message0" left=160 top=500 width=1000 height=200 page=fore visible=true]

;文字が表示される領域を調整
[position layer=message0 page=fore margint="45" marginl="50" marginr="70" marginb="60"]


;メッセージウィンドウの表示
@layopt layer=message0 visible=true

;キャラクターの名前が表示される文字領域
[ptext name="chara_name_area" layer="message0" color="white" size=28 bold=true x=180 y=510]

;上記で定義した領域がキャラクターの名前表示であることを宣言（これがないと#の部分でエラーになります）
[chara_config ptext="chara_name_area"]

; Declara a personagem Yuna e define a imagem padrão (neutra)
[chara_new name="Yuna" storage="chara/yuna/normal.png" jname="Yuna" ]

; Expressões da Yuna (certifique-se de que os arquivos existem na pasta correta)
[chara_face name="Yuna" face="angry" storage="chara/yuna/angry.png"]
[chara_face name="Yuna" face="doki" storage="chara/yuna/doki.png"]
[chara_face name="Yuna" face="happy" storage="chara/yuna/happy.png"]
[chara_face name="Yuna" face="sad" storage="chara/yuna/sad.png"]
[chara_face name="Yuna" face="normal" storage="chara/yuna/normal.png"]


;yamato
[chara_new  name="yamato"  storage="chara/yamato/normal.png" jname="やまと" ]

#
OK, aqui é pra ser o começo do curso certo?[p]

Beleza, tem uma escola ali, e aí?.[p]

......[p]

O que era pra acontecer exatamente?[p]

Acho que vou é embora, isso sim![p]

Estou indo![p]

[font  size="30"   ]
[playse storage="yuna2.ogg"]
#?
Eeeeeespera aíííííí[p]
[resetfont]


[stopse]
#
Quem é?![p]


[wt time=4000]

; Exibe personagem
[chara_show  name="Yuna" face="happy" pos=center left=150 right=0 ]
[playse storage="yuna3.wav"]
#?
Olá![p]
[stopse]
[playse storage="yuna4.wav"]
Meu nome é Yuna.[p]
[chara_mod  name="Yuna" face="normal" pos=center left=150 right=0 ]
[stopse]
[playse storage="yuna5.wav"]
#Yuna
Você entrou aqui para aprender Word certo?[p]

[stopse]
[glink  color="blue"  storage="scene1.ks"  size="28"  x="360"  width="500"  y="150"  text="Sim, É isso mesmo!"  target="*basico"  ]
[glink  color="blue"  storage="scene1.ks"  size="28"  x="360"  width="500"  y="250"  text="Na verdade não."  target="*intermediario"  ]
[glink  color="blue"  storage="scene1.ks"  size="28"  x="360"  width="500"  y="350"  text="Sim, mas já me considero avançado."  target="*avancado"  ]
[s]

*avancado
#Yuna
Legal! Então vamos pular direto para os conteúdos avançados! 💪[p]
[jump storage="word_avancado.ks" target="*inicio"]

*intermediario
#Yuna
Beleza! Vamos começar do intermediário então. 😊[p]
[jump storage="word_intermediario.ks" target="*inicio"]

*basico
[playse storage="yuna6.wav"]
#Yuna
Ótimo! Então você está no lugar certo.[p]
[stopse]

vamos começar então o Módulo Básico de Word!!![p]

E aí, preparado?[p]

#
Claro, vamos nessa![p]

#
Mas peraí, quem é você?[p]

#
Beleza que aqui é o curso e tal mas você apareceu do nada né[p]

#
Poderia me explicar?[p]

[chara_mod  name="Yuna" face="happy" pos=center left=150 right=0 ]
#Yuna
Aaah sim, é verdade kkkkkkkk[p]

#Yuna
Bom, como eu já disse meu nome é Yuna e eu sirvo como uma guia para novos estudantes aqui do curso![p]

#Yuna
Só que as vezes eu acabo me atrasando um pouco pra receber o pessoal, tipo hoje hahaha[p]

[chara_mod  name="Yuna" face="normal" pos=center left=150 right=0 ]

#Yuna
Agora que já esclarecemos isso, que tal partimos pro curso? Hein?[p]

#
Ah tá, agora tá explicado.[p]

Meio do nada mas tá né, bora pro curso então[p]


[jump storage="word_basico.ks" target="*start"]


[chara_mod  name="Yuna" face="happy"  ]
[playse storage="yuna1.ogg"]
#Yuna
Legal! Vamos começar do zero então.
Vou te ensinar tudo o que você precisa saber pra dominar o Word![p]
#
......[p]
Bom, eu até quero aprender, mas lembra que eu não sei nada tá?[p]
Nunca mexi muito com pacote office...[p]

[chara_mod name="Yuna" face="default"]

#Yuna
Tenho uma informação valiosa pra você![p]
Quer saber? Quer saber, né?[p]
#
Hm, talvez...[p]
#Yuna
[cm]
[font size=40]
[delay speed=160]
TyranoScript![p]
[delay speed=30]
[resetfont]

#
......[p]
#Yuna
Com o TyranoScript, você pode fazer uma visual novel de verdade de forma super simples![p]
#
Sério? Isso me interessa bastante![p]

[chara_mod  name="Yuna" face="happy"  ]
#Akane
Sério mesmo?![p]
Só de jogar esse game, você já consegue aprender as funções do TyranoScript![p]
Então fica comigo até o final, beleza?[p]

Uma das características do TyranoScript é que ele funciona em [font color="red"]HTML5[resetfont][p]

#
Isso quer dizer o quê?[p]
#Akane
Quer dizer que os jogos feitos com ele podem funcionar em diversos ambientes![p]
#
Ah, isso é ótimo. Dá pra muita gente jogar, né?[p]

#Akane
Você pode criar aplicativos para Windows, para Mac, e até jogos em navegador![p]
Você pode colocar no seu site para outras pessoas jogarem facilmente![p]
E funciona em todos os navegadores principais, então pode ficar tranquilo![p]
#
Legal![p]

Mas e no celular? Muita gente acessa meu site pelo celular...[p]

#Akane
Sim! Jogos feitos com TyranoScript funcionam em smartphones também![p]
iPhone, Android, iPad, tablets... funciona tudo![p]
#
Uau![p]

#Akane
Você também pode transformar o jogo em aplicativo para vender na AppStore ou GooglePlay![p]
#
Nossa... talvez eu finalmente consiga sair da pobreza! hahaha[p]
#Akane
Bem, você precisa fazer um jogo divertido primeiro, senão não vende, né?[p]
#
Verdade...[p]

#Akane
Vamos mudar de cenário agora, ok?[p]
Vamos para o corredor![p]
[bg  time="3000"  method="crossfade" storage="rouka.jpg"  ]

#
Oh, mudamos mesmo![p]

#Akane
Tá frio! Vamos voltar pra sala logo![p]

[bg  time="1000" method="slide"  storage="room.jpg" ]
#
A transição foi diferente agora, né?[p]
#Akane
Sim! Estava com pressa dessa vez![p]
No TyranoScript você pode aplicar muitos efeitos na troca de cena![p]
Tem mais de 10 tipos de transições diferentes.[p]
#
Interessante.[p]

#Akane
Agora vou mudar o estilo da caixa de mensagem, tá?[p]
Além do estilo "adventure" (como estamos usando), você pode criar um estilo "visual novel" em tela cheia.[p]

; Esconde personagem
[chara_hide name="akane"]

; Caixa de mensagem tela cheia
[position layer="message0" left=20 top=40 width=1200 height=660 page=fore visible=true ]

Que tal? Esse estilo é ótimo se você quer que o jogador foque mais na leitura da história.[l][r]
O TyranoScript é super poderoso e bem flexível.[l][cm]

[font size=40]Você pode mudar o tamanho da fonte[l][r]
[resetfont]
[font color="pink"]E também a cor do texto![resetfont][l][r]

[ruby text=ru]Ru[ruby text=bi]bi[ruby text=fu]fu[ruby text=ka]ka[ruby text=n]n[ruby text=ta]ta[ruby text=n]n[ruby text=me]me — Sim, dá até pra usar rubis![l]
[cm]

; Texto vertical
[position vertical=true layer=message0 page=fore margint="45" marginl="0" marginr="70" marginb="60"]

Você também pode escrever verticalmente assim.[r][l]
E todos os recursos continuam funcionando normalmente, mesmo nesse modo.[r][l]

; Volta ao horizontal
[position vertical=false]

Você pode alternar entre os modos dependendo da cena![r][l]
Ok, vamos voltar ao modo adventure.[p]

; Retorna caixa de mensagem original
[position layer="message0" left=160 top=500 width=1000 height=200 page=fore visible=true]

@chara_show name="akane"

#Akane
Você também pode usar sua própria imagem como caixa de mensagens![p]

[font color="0x454D51"]
[deffont color="0x454D51"]

; Remove nome antigo
[free name="chara_name_area" layer="message0"]

; Define janela com moldura
[position layer="message0" width="1280" height="210" top="510" left="0"]
[position layer="message0" frame="frame.png" margint="50" marginl="100" marginr="100" opacity="230" page="fore"]

; Nome do personagem
[ptext name="chara_name_area" layer="message0" color="0xFAFAFA" size="28" bold="true" x="100" y="514"]
[chara_config ptext="chara_name_area"]

E aí? Você pode personalizar tudo conforme o estilo do seu jogo![p]

Por padrão, salvar e carregar o jogo pode ser feito nos botões no canto inferior direito...[p]
Mas também é possível personalizar os botões da interface![p]

; Esconde botão de menu
@hidemenubutton

; Adiciona botões de funções especiais

[button name="role_button" role="quicksave" graphic="button/qsave.png" enterimg="button/qsave2.png" x="40" y="690"]
[button name="role_button" role="quickload" graphic="button/qload.png" enterimg="button/qload2.png" x="140" y="690"]
[button name="role_button" role="save" graphic="button/save.png" enterimg="button/save2.png" x="240" y="690"]
[button name="role_button" role="load" graphic="button/load.png" enterimg="button/load2.png" x="340" y="690"]
[button name="role_button" role="auto" graphic="button/auto.png" enterimg="button/auto2.png" autoimg="button/auto3.png" x="440" y="690"]
[button name="role_button" role="skip" graphic="button/skip.png" enterimg="button/skip2.png" skipimg="button/skip3.png" x="540" y="690"]
[button name="role_button" role="backlog" graphic="button/log.png" enterimg="button/log2.png" x="640" y="690"]
[button name="role_button" role="fullscreen" graphic="button/screen.png" enterimg="button/screen2.png" x="740" y="690"]
[button name="role_button" role="sleepgame" graphic="button/sleep.png" enterimg="button/sleep2.png" storage="config.ks" x="840" y="690"]
[button name="role_button" role="menu" graphic="button/menu.png" enterimg="button/menu2.png" x="940" y="690"]
[button name="role_button" role="window" graphic="button/close.png" enterimg="button/close2.png" x="1040" y="690"]
[button name="role_button" role="title" graphic="button/title.png" enterimg="button/title2.png" x="1140" y="690"]

Com esses botões, você pode controlar todas as funções do jogo de forma prática![p]

#
Ufa! Isso tudo já parece suficiente pra criar um jogo completo![p]

#Akane
Claro! Também é possível adicionar música.[l][cm]
Vamos tocar um exemplo?[l][cm]

[link target=*playmusic]【1】Sim, por favor[endlink][r]
[link target=*noplay]【2】Não, agora não[endlink]
[s]

*playmusic

[cm]
Certo, vamos tocar a música.[l]
@playbgm time="3000" storage=music.ogg loop=true
A música vai tocar com fade-in gradual[l][cm]

@jump target="*common_bgm"

*noplay
[cm]
Tudo bem. Fica pra próxima.[l][cm]

*common_bgm

Ah, e com essas escolhas como agora, você pode criar caminhos diferentes para a história![l][cm]

#Akane
Vamos chamar outro personagem agora?[l][cm]
Yamato, vem cá![p]
[chara_show name="yamato"]

Viu como é fácil?[l][r]
Você pode usar quantos personagens quiser.[p]

#Yamato
Ei, já posso ir embora agora?[l][cm]

#Akane
Ah, foi mal! Obrigada mesmo![l][cm]

[chara_hide name="yamato"]

#Akane
E assim terminamos a explicação básica do TyranoScript![p]
O que achou?[p]

#
Acho que agora consigo tentar criar meu próprio jogo![p]

#Akane
Fico feliz! Comece com o tutorial oficial no site do TyranoScript, vai te ajudar muito![p]
Inclusive, esse jogo aqui também foi feito com ele![p]
Boa sorte na sua jornada como desenvolvedor de visual novels![p]
Obrigada por jogar![p]

Agora vou te mostrar alguns links úteis para continuar aprendendo![p]

[cm]
