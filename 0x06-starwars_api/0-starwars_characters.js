#!/usr/bin/node

const request = require('request');
const num = process.argv[2];
// console.log(`Num: ${num}`)
const url = `https://swapi-api.alx-tools.com/api/films/${num}/`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  }

  const data = JSON.parse(body);
  const characters = data.characters;

  for (const i in characters) {
    const url = characters[i];
    request(url, (error, response, body) => {
      if (error) {
        console.log(error);
      }

      const dataOne = JSON.parse(body);

      console.log(dataOne.name);
    });
  }
});
