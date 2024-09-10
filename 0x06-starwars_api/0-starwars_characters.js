#!/usr/bin/node
const util = require('util');
const request = util.promisify(require('request'));
const filmdId = process.argv[2];

async function characters (filmdId) {
  const url = 'https://swapi-api.hbtn.io/api/films/' + filmdId;
  let response = await (await request(url)).body;
  response = JSON.parse(response);
  const chars = response.chars;

  for (let i = 0; i < chars.length; i++) {
    const singChar = chars[i];
    let character = await (await request(singChar)).body;

    character = JSON.parse(character);
    console.log(character.name);
  }
}

characters(filmdId);
