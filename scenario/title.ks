; Limpa a tela e remove o histórico de comandos
[cm]
@clearstack

; Mostra a imagem de fundo do menu (coloque title.jpg na pasta bgimage)
@bg storage="entrance2.gif" time=100 width=1920 height=1080
@wait time=200

; Toca a música de fundo do menu (coloque menu_tema.mp3 na pasta data/bgm/)
[playbgm storage="menu_tema.mp3" loop=true]


*start

; Botão: Iniciar Jogo
[button x=135 y=230 graphic="title/button_start.png" enterimg="title/button_start2.png" target="gamestart" keyfocus="1"]

; Botão: Carregar Jogo
[button x=135 y=320 graphic="title/button_load.png" enterimg="title/button_load2.png" role="load" keyfocus="2"]

; Botão: Galeria de CGs
[button x=135 y=410 graphic="title/button_cg.png" enterimg="title/button_cg2.png" storage="cg.ks" keyfocus="3"]

; Botão: Repetir Cena
[button x=135 y=500 graphic="title/button_replay.png" enterimg="title/button_replay2.png" storage="replay.ks" keyfocus="4"]

; Botão: Configurações
[button x=135 y=590 graphic="title/button_config.png" enterimg="title/button_config2.png" role="sleepgame" storage="config.ks" keyfocus="5"]

[s]

*gamestart
; Vai para o primeiro capítulo do jogo (crie ou edite o arquivo scene1.ks)
@jump storage="scene1.ks"




