import { Artist } from "../types";

// Import generated images
import musicianImg from "../assets/generated/musician.png";

export const artists: Artist[] = [
  {
    id: 1,
    name: "Baul Shah Abdul",
    instrument: "Ektara",
    genre: "Baul Sangeet",
    location: "Birbhum",
    image: musicianImg,
  },
  {
    id: 2,
    name: "Rina Das",
    instrument: "Dotara",
    genre: "Bhatiali",
    location: "Sundarbans",
    image: musicianImg,
  },
  {
    id: 3,
    name: "Kartik Mondal",
    instrument: "Flute",
    genre: "Folk",
    location: "Bankura",
    image: musicianImg,
  },
  {
    id: 4,
    name: "Saraswati Devi",
    instrument: "Harmonium",
    genre: "Kirtan",
    location: "Nadia",
    image: musicianImg,
  },
  {
    id: 5,
    name: "Gour Khyapa",
    instrument: "Khamak",
    genre: "Baul",
    location: "Murshidabad",
    image: musicianImg,
  },
];
