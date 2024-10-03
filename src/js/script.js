import Player from "./Player.js";
import songs from "../assets/songs/*.mp3";

let map = {};

let aux = 1;
for (var key of Object.keys(songs)) {
    map[`.item-${aux++}`] = songs[key]
}

const player = new Player(map)