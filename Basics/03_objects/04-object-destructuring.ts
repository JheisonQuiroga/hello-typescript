interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  songTitle: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 100,
  songDuration: 4,
  songTitle: "Bulevar",
  details: {
    author: "Pirlo",
    year: 2024,
  }
}

console.log({audioPlayer});

// Object destructuring
const { songDuration: anotherSong, songTitle, details: { author, year } } = audioPlayer;

console.log(`Song: ${songTitle} - Duration: ${anotherSong} - Author: ${author} - Year: ${year}`);

// Array destructuring
const recordOfRagnarokChar: string[] = ['Zeus', 'Thor', 'Adam', 'Qin Shi Huang', 'Nikola Tesla', 'Hades'];

const [god1, god2, , , ,hades] = recordOfRagnarokChar;

// Default value if the element does not exist
const [, , , qinShiHuang = 'Unknown']: string[] = recordOfRagnarokChar

const adam: string = recordOfRagnarokChar[2] ?? 'Unknown';

console.log({god1, god2, hades});
console.log({adam, qinShiHuang});


export {};