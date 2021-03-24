const axios = require("axios").default;
require("dotenv").config();

exports.indexController = async (req, res, next) => {
  let wordData = [],
    inputWord;
  inputWord = req.query.inputWord;

  [inputValue, ...wordData] = await getWord(inputWord);
  res.render("index", {
    title: "Dictionary",
    inputValue: inputValue,
    wordData: wordData || "Not found",
  });
};

const getWord = async (inputWord) => {
  let word = "Incorrect Word",
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
      word = res.data.word;
      definitions = res.data.definitions;
      if (res.status != 200) {
        definitions = ["", ""];
      }
    })
    .catch((error) => {
      console.log(error);
      definitions = ["There is no such word."];
      return [word, "Incorrect Word"];
    });
  // console.log([word, ...definitions]);
  return [word, ...definitions];
};

// ! curl --header "Authorization: Token " https://owlbot.info/api/v4/dictionary/book -s | json_pp
