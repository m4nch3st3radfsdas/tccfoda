const audio = {
  Map: new Howl({
    src: './audio/pokemon.mp3',
    html5: true,
    volume: 0.5,
    loop: true
  }),
  initBattle: new Howl({
    src: './audio/initBattle.wav',
    html5: true,
    volume: 0.5
  }),
  battle: new Howl({
    src: './audio/.mp3',
    html5: true,
    volume: 0.8,
    loop: true
  }),
  tackleHit: new Howl({
    src: './audio/tackleHit.wav',
    html5: true,
    volume: 0.5
  }),
  fireballHit: new Howl({
    src: './audio/fireballHit.wav',
    html5: true,
    volume: 0.5
  }),
  initFireball: new Howl({
    src: './audio/initFireball.wav',
    html5: true,
    volume: 0.5
  }),
  victory: new Howl({
    src: './audio/victory.wav',
    html5: true,
    volume: 0.5
  })

}

function startMapMusic() {
  if (!audio.Map.playing()) {
    audio.Map.play();
  }
  document.removeEventListener('click', startMapMusic); // remove o ouvinte
}

document.addEventListener('click', startMapMusic);

