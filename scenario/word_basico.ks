; Arquivo: word_basico.ks

*start

[cm]
[bg storage="corredor1.jpg" time=100]

; Configuração da janela de mensagem
[position layer="message0" left=160 top=500 width=1000 height=200 page=fore visible=true]
[position layer=message0 page=fore margint="45" marginl="50" marginr="70" marginb="60"]
@layopt layer=message0 visible=true
[ptext name="chara_name_area" layer="message0" color="white" size=28 bold=true x=180 y=510]
[chara_config ptext="chara_name_area"]

; Declaração da personagem Yuna
[chara_new name="Yuna" storage="chara/yuna/normal.png" jname="Yuna"]
[chara_face name="Yuna" face="angry" storage="chara/yuna/angry.png"]
[chara_face name="Yuna" face="doki" storage="chara/yuna/doki.png"]
[chara_face name="Yuna" face="happy" storage="chara/yuna/happy.png"]
[chara_face name="Yuna" face="sad" storage="chara/yuna/sad.png"]
[chara_face name="Yuna" face="normal" storage="chara/yuna/normal.png"]
[chara_face name="Yuna" face="atent" storage="chara/yuna/atent.png"]

; Declaração da personagem Misato
[chara_new name="Misato" storage="chara/misato/normal.png" jname="Misato"]
[chara_face name="Misato" face="angry" storage="chara/misato/angry.png"]
[chara_face name="Misato" face="doki" storage="chara/misato/doki.png"]
[chara_face name="Misato" face="happy" storage="chara/misato/happy.png"]
[chara_face name="Misato" face="sad" storage="chara/misato/sad.png"]
[chara_face name="Misato" face="normal" storage="chara/misato/normal.png"]
[chara_face name="Misato" face="atent" storage="chara/misato/atent.png"]

; Exibe a personagem
[chara_mod  name="Yuna" face="happy" pos=center left=150 top=0]

; Aula começa
[playse storage="yuna1wordb.wav"]
#Yuna
Legal! Agora estamos indo pra sua sala.[p]
[playse storage="yuna2wordb.wav"]
Aproveita e já vai se familiarizando com a escola, você vai passar por aqui bastante![p]

[stopse]

#
(Até na Visual Novel os caras que é te obrigar a frequentar escola kkkkk)[p]

#
Oh Yuna,onde é que fica essa sala hein? Falta muito?[p]

[chara_mod  name="Yuna" face="normal" pos=center left=150 right=0 ]
[playse storage="yuna3wordb.wav"]
#Yuna
Calma que já tá chegando, é depois dessas escadas.[p] 
[stopse]

[bg storage="corredor2.png" transition="fadein" time=1000]


#Yuna
Pronto,chegamos!!![p]

#Yuna
Agora é só entrar na primeira porta e a professora já vai te receber, beleza?[p]

#Yuna
Boa aula!!!!![p]


[chara_hide name="Yuna"]

#
E agora hein,como será que é essa professora?[p]

#
Tomara que seja legal né[p]

#
(Esse curso não sei não...)[p]

#
Bom, lá vou eu[p]

[bg storage="labinfo.jpeg" time=100]

[playbgm storage="musica1.mp3" loop=true]

#
É um laboratório de informática?[p]

#
Tá bom então. Mas cade a professora?[p]

#
Ela não devia tá aqui agora?[p]

[chara_show  name="Misato" face="happy" pos=center left=150 top=0]


[playse storage="mi1.wav"]
#Misato
Olá Jovem![p]
[stopse]

[playse storage="mi2.wav"]
#Misato
Boas Vindas ao Curso de Word![p]
[stopse]

[playse storage="mi3.wav"]
#Misato
Mais especificamente o módulo básico do curso.[p]
[stopse]

[playse storage="mi4.wav"]
#Misato
Espero que tenhamos um ótimo aprendizado e que todos sejamos produtivos![p]
[stopse]

[stopse]
[playse storage="yuna4wordb.wav"]
#Yuna
Me diz aí: você sabe o que é um documento do Word?[p]

[stopse]
[glink  color="blue"  storage="word_basico.ks"  size="28"  x="360"  width="500"  y="150"  text="Não faço idéia"  target="*basic"  ]
[glink  color="blue"  storage="word_basico.ks"  size="28"  x="360"  width="500"  y="250"  text="Sim, mas me explique denovo."  target="*intermediario"  ]
[glink  color="blue"  storage="word_basico.ks"  size="28"  x="360"  width="500"  y="350"  text="Sim, pode pular!"  target="*advanced"  ]
[s]


*basic
#Yuna
Um documento do Word é como uma folha digital onde você pode digitar textos, adicionar imagens, tabelas, e muito mais![p]
É como um caderno inteligente dentro do computador![p]
Vamos começar dando uma olhada pela tela inical do Word! Pronto?[p]
[jump storage="word_basico.ks" target="*continuar1"]

*advanced
#Yuna
Beleza! Então vamos abrir o Word e ver como funciona a interface dele![p]
[jump storage="word_basico.ks" target="*continuar1"]


*continuar1

[chara_hide name="Yuna"]
[chara_show name="Yuna" face="atent"  scale=70 pos=left left=-280 top=0]


[image layer=0 page=fore storage="word1.png" x=490 y=0 width=790 height=500]


#Yuna
Essa aqui é a tela inicial. Repare que temos várias abas como [font color="blue"]Página Inicial[resetfont], [font color="blue"]Inserir[resetfont], [font color="blue"]Design[resetfont]...[p]

#
Tem mesmo várias abas...[p]

#Yuna
Sim, e cada uma delas tem uma função e cada aba também tem suas ferramentas. Vamos começar com a aba "Página Inicial"![p]

[image layer=0 page=fore storage="word2.png" x=490 y=0 width=790 height=500]

#
Qual seria a função dessa Página Inicial?[p]

#Yuna
A guia Página Inicial contém os recursos Recortar e Colar, as opções de Fonte e Parágrafo e o que mais você precisa para adicionar e organizar slides.[p]

#
Entendi,e qual a próxima aba?[p]

#Yuna
A próxima aba que vamos ver a aba de "Fontes"![p]


#Yuna
Agora vamos olhar com mais atenção para o grupo [font color="blue"]Fonte[resetfont]. Ele permite mudar o estilo do texto.[p]

[image layer=0 page=fore storage="word3.png" x=490 y=0 width=790 height=500]

#Yuna
Você pode mudar o tipo de letra, o tamanho, deixar [font color="red"]negrito[resetfont], [font color="blue"]itálico[resetfont], [font color="green"]sublinhado[resetfont] e até mudar a cor do texto![p]

#
Poderia explicar rapidamente quais as ferramentas da aba Fontes?[p]

#Yuna
Fonte, marcadores, tamanho da fonte, cor da fonte, espaçamento entre linha e parágrafo. Fonte, tamanho da fonte, cor da fonte, negrito, itálico e sublinhado.[p]


[image layer=0 page=fore storage="word4.png" x=490 y=0 width=790 height=500]

#Yuna
Agora veja esse outro grupo: [font color="blue"]Parágrafo[resetfont].[p]


#Yuna
Aqui você ajusta o alinhamento, espaçamento entre linhas, marcadores e numeração.[p]

#Yuna
Por exemplo, textos acadêmicos geralmente usam [font color="blue"]alinhamento justificado[resetfont].[p]

[freeimage layer=0 page=fore]

[chara_hide name="Yuna"]
[chara_show name="Yuna" face="normal"  pos=center left=150 top=0]

#Yuna
OK agora vamos rever o que você aprendeu, beleza?[p]

#Yuna
Você lembra onde mudar a cor do texto?

[glink  color="blue"  storage="word_basico.ks"  size="28"  x="360"  width="500"  y="150"  text="No grupo Fonte!"  target="*acerto"  ]
[glink  color="blue"  storage="word_basico.ks"  size="28"  x="360"  width="500"  y="250"  text="No grupo Parágrafo!"  target="*erro"  ]
[s  ]

*acerto
[chara_mod  name="Yuna" face="happy" pos=center left=150 right=0 ]
[playse storage="yunaacerto1.wav"]
#Yuna
Muito bem! A cor fica nas opções do grupo Fonte mesmo! 🎉[p]
[jump storage="word_basico.ks" target="*continuar2"]

*erro
[chara_mod  name="Yuna" face="doki" pos=center left=150 right=0 ]
[playse storage="yunaerro1.wav"]
#Yuna
Oops! Quase! Na verdade, a cor do texto está no grupo Fonte, lembra?[p]
[jump storage="word_basico.ks" target="*continuar2"]


*continuar2
[stopse]
[chara_mod  name="Yuna" face="normal" pos=center left=150 right=0 ]
#Yuna
Ok,e na seção de parágrafos? Quais as funções que podemos usar?

[glink  color="blue"  storage="word_basico.ks"  size="28"  x="360"  width="500"  y="150"  text="ajustar alinhamento, espaçamento entre linhas entre outros."  target="*acerto2"  ]
[glink  color="blue"  storage="word_basico.ks"  size="28"  x="360"  width="500"  y="250"  text="Salvar arquivos,mudar pasta de destino."  target="*erro2"  ]
[s  ]

*acerto2
[chara_mod  name="Yuna" face="happy" pos=center left=150 right=0 ]
[playse storage="yunaacerto2.wav"]
#Yuna
Muito bem! Essas são as funções da aba "Parágrafos"! 🎉[p]
[jump storage="word_basico.ks" target="*continuar3"]



*erro2
[chara_mod  name="Yuna" face="doki" pos=center left=150 right=0 ]
[playse storage="yunaerro2.wav"]
#Yuna
Oops! Quase! Essas opções são da aba "Arquivo"![p]
[jump storage="word_basico.ks" target="*continuar3"]


*continuar3

[stopse]
[chara_mod  name="Yuna" face="normal" pos=center left=150 right=0 ]
#Yuna
A próxima pergunta é sobre a página inicial[p]

#Yuna
Está preparado?


[end]
