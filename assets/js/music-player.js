// footerDiv to restrict all document search to footer (but some classes works outside footer)
const footerDiv = document.querySelector('footer');
// this is for gradient effect on both the volumne bar and music progress bar
const progressBar = document.getElementById('music-progress-bar');
const volumeBar = document.getElementById('volume-bar');

function updateProgressBarFill(progressElement) {
  const value = progressElement.value;
  progressElement.style.setProperty('--progress-fill', value + '%');
}

progressBar.addEventListener('input', () => {
  updateProgressBarFill(progressBar);
});

volumeBar.addEventListener('input', () => {
  updateProgressBarFill(volumeBar);
});


// play pause button toggle on the main controls of music player
const play_btn = document.querySelector('.circular-outline');
play_btn.addEventListener('click', togglePlayPause);
// audio file for music
const audio = new Audio('assets/music-file/Owl-City_Fireflies.mp3');
// this function controls the toggle play/plause button and changes icon for them
function togglePlayPause() {
  const cur_icon = play_btn.querySelector('i');
  if (audio.paused) {
    audio.play();
    cur_icon.classList.remove('fa-play');
    cur_icon.classList.add('fa-pause');
  } else {
    audio.pause();
    cur_icon.classList.remove('fa-pause');
    cur_icon.classList.add('fa-play');
  }
}
// selecting all the .play-music divs and applying the playing effect
// if the music is plaused/not playing .. else replay the music if the music is playing 
// another feature to slide up the music bar if music is played for first time
const playMusicBtn = document.querySelectorAll('.play-music');
const footer = document.querySelector('footer');
let hasPlayedMusic = false;

playMusicBtn.forEach(playBtn => {
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      togglePlayPause();
      if (!hasPlayedMusic) {
        footer.classList.add('slide-up');
        audio.currentTime = 0;
        hasPlayedMusic = true;
      }
    } else {
      audio.currentTime = 0;
    }
  });
});
// this is prev button in the main controls .. it will change to replay the music when pressed
const prevBtn = footerDiv.querySelector('.fa-backward-step');
prevBtn.addEventListener('click', () => {
  audio.currentTime = 0;
  if (audio.paused) {
    togglePlayPause();
  }
});

// Select the .fa-expand icon
const expandBtn = footerDiv.querySelector('.fa-xmark');
expandBtn.addEventListener('click', () => {
  footer.classList.remove('slide-up');
  hasPlayedMusic = false;
  if (!audio.paused) {
    togglePlayPause();
  }
});
