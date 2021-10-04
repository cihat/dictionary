# Dictionary

![](https://raw.githubusercontent.com/cihat/dictionary/master/public/dictionary.png)

I tried to make a project that will help you learn English with Vue.js. It gives you to understand the most common 1000 words in English randomly according to the range you entered and with the examples used on Youtube with Youglish API. I hope it will be useful content when studying English, memorizing words.
My purpose of doing this project was when I realized that I had a hard time memorizing English words. I did this project to get a little more familiar with the words. I think hard work can be overcome with simple solutions. My english is not perfect at the moment, but I am working on it. I hope it becomes a little easier for me to learn English with this project. I did this project in English-Turkish. But you can do this project in your native language by forking.
I will share the source code url of the project. You can see how he does it from there. I used two APIs in the project. One of them is OWLBOT DICTIONARY API and the other is Youglish API. These APIs helped me a lot in the project.

## The project is as follows;

There is the most common 1000-word json in English, and the key values in this json correspond to English-Turkish words. In the project, there are two input ranges from 0 to 1000, the user selects the desired value in these ranges and comes across the user randomly in the desired range. It sends the APIs we use with this word, bringing the meaning of the word, an example sentence, the place where it is used in these APIs.

#### [Project URL](https://cihat.github.io/dictionary/)

![dictionary-2](https://user-images.githubusercontent.com/57585087/115006011-0f6af580-9eb1-11eb-85b2-58545cb65e12.gif)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### To-Do

- [ ] Use Vuex
- [ ] Use infinite-scroll
- [x] Responsive(mobil, tablet)
- [x] Update Style
- [x] Styling Update(grid)
- [x] Theme
- [ ] Loading
- [ ] Update Code
- [ ] Update Components
- [ ] (Feature-1 Local Storage)
- [ ] (Feature-2 User Favori Kelime Listesi with Local Storage)
- [ ] (Feature-3 User specific range aralığı)
 
<br/>

## License

MIT License

Copyright (c) 2021 Cihat Salik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
