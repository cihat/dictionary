// const element_ul = document.querySelector(".words_ul");

// const words = [];

// fetch("../data/words.txt")
//   .then((res) => res.text())
//   .then((text) => {
//     // console.log(text);
//     words.push(text.split("\n"));
//   });

// // console.log(words);

// for (let i = 0; i < words.length; i++) {
//   let new_li = document.createElement("li");
//   node.innerHTML = words[i];
//   // console.log(node);
//   element_ul.appendChild(new_li);
// }

const element_ul = document.querySelector(".words_ul");

let words = "";

fetch("../data/words.txt")
  .then((res) => res.text())
  .then((text) => {
    // console.log(text);
    // words.push(text.split("\n"));
    // console.log(text);
    words = text.split("\n");
    console.log(words);
  });
for (let i = 0; i < words.length; i++) {
  let new_li = document.createElement("li");
  console.log(words[i]);
  new_li.innerHTML = words[i];
  console.log(words[i]);
  element_ul.appendChild(new_li);
}

console.log(typeof words);

let arr = [];

words.split("\n").forEach((word) => {
  arr.push(word);
});
console.log(arr);

arr.forEach((word) => {
  console.log(word);
});
