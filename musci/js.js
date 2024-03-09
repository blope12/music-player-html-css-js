const audioPlayer = document.getElementById('audio-player');
const musicImage = document.getElementById('music-image');

const songs = [
    {audio: 'music1.mp3', image: 'music1.jpg'},
    {audio: 'music2.mp3', image: 'music2.jpg'},
    {audio: 'music3.mp3', image: 'music3.jpg'},
];

let currentSongIndex = 0;

function playSong() {
    audioPlayer.play();
}

function pauseSong() {
    audioPlayer.pause();
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex].audio;
    musicImage.src = songs[currentSongIndex].image;
    playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex].audio;
    musicImage.src = songs[currentSongIndex].image;
    playSong();
}
