const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');
const playlistItems = playlist.querySelectorAll('a');

let currentTrack = 0;

function playTrack(trackIndex) {
    audioPlayer.src = playlistItems[trackIndex].getAttribute('href');
    audioPlayer.load();
    audioPlayer.play();
}

playlistItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        playTrack(index);
        currentTrack = index;
    });
});

audioPlayer.addEventListener('ended', () => {
    currentTrack++;
    if (currentTrack < playlistItems.length) {
        playTrack(currentTrack);
    } else {
        currentTrack = 0;
        playTrack(currentTrack);
    }
});

playTrack(currentTrack);