const path = require("path");
// import { join } from "path";
const element_ul = document.querySelector(".words_ul");
const reminder_button = document.querySelector(".reminder_button");
const translate_word = document.querySelector(".translate_word");

const processLineByLine = () => {
  fetch(path.join(__dirname, "../", "data", "words.txt"))
    .then((response) => response.text())
    .then((data) => {
      createLi(data);
    });
};

const createLi = (words) => {
  randomWord(words);
  let all_words = words.split("\n");
  for (let i = 0; i < all_words.length; i++) {
    let new_li = document.createElement("li");
    new_li.innerHTML = all_words[i];
    element_ul.appendChild(new_li);
  }
};

processLineByLine();

const randomWord = (words) => {
  let randomNumber;
  let array = words.split("\n");
  // console.log(array);
  let newArr = array.filter((word) => word.split(" = ").length === 2);
  let border = newArr.length;

  reminder_button.addEventListener("click", (e) => {
    randomNumber = Math.floor(Math.random() * border + 1);
    // console.log(randomNumber);
    translate_word.textContent = array[randomNumber];
    // translate_word.classList.add(".hide_translate_word");
  });
};
