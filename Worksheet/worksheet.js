const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

///MAP

const names = characters.map((character) => character.name);
console.log(names);

const heights = characters.map((character) => character.height);
console.log(heights);

const mass = characters.map((character) => character.mass);
console.log(mass);

//filter

const malecharacters = characters.filter(
  (character) => character.gender === "male"
);
console.log(malecharacters.map((character) => character.name));

const tallerthan180 = characters.filter((character) => character.height > 180);
console.log(tallerthan180.map((character) => character.name));

//sort

const sortbyheight = characters.sort((a, b) => a.height - b.height);
console.log(sortbyheight);

const sortbyweight = characters.sort((a, b) => a.mass - b.mass);
console.log(sortbyweight);
