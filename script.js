



// let x=text.replaceAll(/[\[\]']+/g, '');
// console.log(x);



 
// const buttonElem = document.querySelector("#wrapper button")
// const inputElem = document.querySelector("#wrapper input")

// buttonElem.addEventListener('click', () => {
//   const oldText = inputElem.value;
//     return inputElem.value = oldText === "ON" ? "OFF" : "ON";
// });

// const element = document.querySelector('#element');

// const toggleColor = (isEntering) => {
//   element.style.background = isEntering ? 'orange' : 'black';
// };

// // type in your code here
// element.addEventListener("mouseenter",()=>{
//       toggleColor(true)
// })
// element.addEventListener("mouseleave",()=>{
//         toggleColor(false)      
// })


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// function ucFirst(arjuk) {
//   if (!arjuk) return arjuk;
//   console.dir('arjuk: ', arjuk)

//   return arjuk[0].toUpperCase() + arjuk.slice(1);
// }

// alert( ucFirst("вася,вася  ") );


let my_string = "Дообрый деень всем, ктоо пришел сегодня";

function remove(letters) {
  let result = [];
  let len = letters.length - 1
  for (let i = 0; i < len; i++) {
    if (letters[i] !== letters[i + 1]) {
      result.push(letters[i]);
    }
  }
  result.push(letters[len])
  return result;
}

// To check the remove function, you can call it with an array of letters.
let testLetters = ["ы", "о", "о", "б", "р", "ы"];
console.log(remove(testLetters));

function wordsUpper(my_string) {
  let words = my_string.split(' ');
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split('');
    letters = remove(letters);
    if (letters.length > 0) {
      letters[0] = letters[0].toUpperCase();
    }
    let word = letters.join('');
    words[i] = word;
  }
  return words.join(' ');
}

let newstring = wordsUpper(my_string);
console.log(newstring);