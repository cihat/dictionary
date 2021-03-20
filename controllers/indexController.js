const axios = require("axios").default;
require("dotenv").config();

const getWord = async (inputWord) => {
  let word = "book",
    definitions;
  const options = {
    url: `https://owlbot.info/api/v4/dictionary/${inputWord}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${process.env.OWLBOT_DICTIONARY_API_KEY}`,
    },
  };

  await axios
    .request(options)
    .then((res) => {
      // console.log(res.data);
      word = res.data.word;
      definitions = res.data.definitions;
    })
    .catch((error) => {
      console.log(error);
    });
  // console.log([word, ...definitions]);
  return [word, ...definitions];
};

exports.indexController = async (req, res, next) => {
  let word,
    definitions,
    type,
    definition,
    example,
    image_url,
    wordData = [];
  let inputWord;
  inputWord = req.query.inputWord || "book";

  [...wordData] = await getWord(inputWord);
  // console.log(wordData);
  inputValue = wordData.shift();
  console.log(wordData);

  res.render("index", {
    title: "Word",
    inputValue: inputValue,
    wordData: wordData,
  });
};

// ! curl --header "Authorization: Token a6ac9e149d04e37fc221c6689739cdd29901aa4e" https://owlbot.info/api/v4/dictionary/book -s | json_pp
//*  curl --header "Authorization: Token a6ac9e149d04e37fc221c6689739cdd29901aa4e" https://owlbot.info/api/v4/dictionary/book -s | json_pp
