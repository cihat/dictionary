const axios = require("axios").default;
require("dotenv").config();

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
      // console.log(res.data);
      word = res.data.word;
      definitions = res.data.definitions;
      console.log(res.status);
      if (res.status != 200) {
        definitions = ["hatalı", "hatalı"];
        console.log("buradaaaaa");
        // res.redirect("/");
        // definitions = ["it is not a word"];
        // return [word, "Not Found"];
      }
      console.log("ok");
    })
    .catch((error) => {
      console.log("error");
      definitions = ["There is no such word."];
      console.log("buradaaaaa");
      // res.redirect("/");
      return [word, "Incorrect Word"];
      // return [word, "Not Found"];
    });
  // console.log([word, ...definitions]);
  console.log([word, ...definitions]);
  return [word, ...definitions];
};

exports.indexController = async (req, res, next) => {
  let wordData = [],
    inputWord = "There is no such word.";
  inputWord = req.query.inputWord;

  [...wordData] = await getWord(inputWord);
  inputValue = wordData.shift();
  console.log(wordData);
  res.render("index", {
    title: "Dictionary",
    inputValue: inputValue,
    wordData: wordData || "Boyle bir şey yok",
  });
};

// ! curl --header "Authorization: Token a6ac9e149d04e37fc221c6689739cdd29901aa4e" https://owlbot.info/api/v4/dictionary/book -s | json_pp
//*  curl --header "Authorization: Token a6ac9e149d04e37fc221c6689739cdd29901aa4e" https://owlbot.info/api/v4/dictionary/book -s | json_pp
