const axios = require('axios');

async function getMeanings(word) {
  try {
    const dictionary = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    //console.log(dictionary.data[0].meanings);

    return dictionary.data[0].meanings;
  } catch (e) {
    console.log(e);
  }
}

async function getFirstDefinition(word) {
  try {
    const dictionary = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    //console.log(dictionary.data[0].meanings[0].definitions[0].definition);

    return dictionary.data[0].meanings[0].definitions[0].definition;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { getMeanings, getFirstDefinition };
