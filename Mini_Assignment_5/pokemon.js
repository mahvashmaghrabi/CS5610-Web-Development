const { req, res } = require("express");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// replace this string with your full name
const name = "Mahvash Maghrabi";

console.log(`My name is ${name}`);

// use this list as your temporary database!
// note that it will reset every time you restart your server
const myPokemon = [
  {
    id: "fc10b559-872c-43cd-bad2-f02e2e0a2d58",
    name: "Pikachu",
    health: 10,
    level: 1,
  },
];

// return all pokemon
router.get("/", function (req, res) {
  res.send(myPokemon);
});

// if the pokemon name already exists in the list, return an error
// randomly generate an id using UUID ["uuid()"]
// randomly generate a level between 1 and 10, inclusive, if none is given
// randomly generate a health between 10 and 100, inclusive, if none is given
// insert your pokemon into the myPokemon list
// return a 200
const userId = uuidv4();
router.post("/", function (req, res) {
  if (myPokemon.find((p) => p.name === req.body.name)) {
    return res.status(404).send("Name already exists");
  } else {
    myPokemon.push({
      id: req.body.id || userId,
      name: req.body.name,
      level: req.body.level || Math.floor(Math.random() * 10) + 1,
      health: req.body.health || Math.floor(Math.random() * 80) + 50,
    });
    return res.send(myPokemon);
  }
});
// return pokemon if one is found matching the pokemonId
// return a 404 if no pokemon matches that pokemonId
router.get("/:pokemonId", function (req, res) {
  const pokemonId = Number(req.params.pokemonId);

  for (let i = 0; i < myPokemon.length; i++) {
    const pokemon = myPokemon[i];
    if (pokemon.id === pokemonId) {
      return res.send(pokemon);
    }
  }

  res.send("Could not find pokemond with id " + pokemonId);
});

// update the pokemon matching the pokemonId
// based on the req body
// return a 404 if no pokemon matches that pokemonId
router.put("/:pokemonId", function (req, res) {
  const pokemonIdStr = Number(req.params.pokemonId);

  for (let i = 0; i < myPokemon.length; i++) {
    const pokemon = myPokemon[i];
    if (pokemon.id === pokemonIdStr) {
      myPokemon[i] = req.body;
      return res.send(myPokemon);
    }
  }
  res.status(404).send("No pokemon matches that pokemonId");
});

//   // delete pokemon if pokemonId matches the id of one
//   // return 200 even if no pokemon matches that Id

router.delete("/:pokemonId", function (req, res) {
  //   const pokemonIdStr = Number(req.params.pokemonId);
  const pokemonIdStr = null;
  for (let i = 0; i < myPokemon.length; i++) {
    const pokemon = myPokemon[i];
    if (pokemon.id === pokemonIdStr) {
      myPokemon.splice(i, 1);
    }
    res.status(200).send("No pokemon matches that pokemonId");
  }
});

module.exports = router;
