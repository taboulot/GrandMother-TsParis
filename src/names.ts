const names = [
  "Marek",
  "Xavier",
  "Arthur",
  "Eloïse",
  "Guillaume",
  "Marine",
  "Baptiste",
  "Benoit",
  "Amaury",
  "Sammy",
  "Caroline"
];

const getName = () => names[Math.floor(Math.random() * names.length)];

export default getName;
