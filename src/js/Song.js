export default class Song {
    constructor(k_song, v_song, c_song) {
        this.element = document.querySelector(k_song);
        this.audio = new Audio(v_song);
        this.album = document.querySelector(c_song);
        this.vinyl = this.element.querySelector('.vinyl');
    }
}

export function playSong(song) {
    song.element.onclick = () => {
        if (song.audio.paused) {
            song.vinyl.style.transform = 'translate(-40%, 0)';
            song.audio.play();
        } else {
            song.vinyl.style.transform = 'translate(-100%, 0)';
            song.audio.pause();
        }
    }
}