import Song, {playSong} from './Song.js';

export default class Player {
    constructor(map) {
        let aux = 1;
        for (var [key, value] of Object.entries(map)) {
            const songKey = key;
            const songValue = value;
            const songCover = `#cv${aux++}`;
            const song = new Song(songKey, songValue, songCover);
            playSong(song)
        }
    }
}