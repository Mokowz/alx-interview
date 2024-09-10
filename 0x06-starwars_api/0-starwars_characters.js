#!/usr/bin/node
const request = require('request');
const id = process.argv[2];

request('https://swapi-api.hbtn.io/api/films/' + id, function (err, res, body) {
  if (err) throw err;
  const actors = JSON.parse(body).characters;
  starCharacters(actors, 0);
});
const starCharacters = (actors, i) => {
  if (i === actors.length) return;
  request(actors[i], function (err, res, body) {
    if (err) throw err;

    console.log(JSON.parse(body).name);
    starCharacters(actors, i + 1);
  });
};
