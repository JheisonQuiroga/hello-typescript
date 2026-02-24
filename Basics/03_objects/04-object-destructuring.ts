import { profileEnd } from "node:console";

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

// ============================================
// 3. Object Destructuring in functions
// ============================================

interface User {
  name: string;
  lastName: string;
  age: number;
  isActive: boolean;
  proffesion?: string;
}

const useContext = ({ name, lastName, age, isActive, proffesion = "Sin profesión" }: User) => {
  return {
    isActive: isActive,
    userInfo: {
      name,
      lastName,
      age,
    },
    proffesion: proffesion,
  }
}

const user: User = {
  name: "Duban",
  lastName: "Quiroga",
  age: 0,
  isActive: true
}


const {userInfo: {name, lastName}, isActive, proffesion} = useContext(user);
console.log({name, lastName, isActive, proffesion});

export {};