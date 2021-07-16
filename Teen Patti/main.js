const images = document.querySelectorAll(".img");
const refresh = document.getElementById("refresh");

refresh.addEventListener("click", () => {
  location.reload();
  // return false;
});

let suits = ["heart", "club", "spade", "diamond"];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let cards = [];
nums.forEach((num) => {
  suits.forEach((suit) => {
    cards.push(`${String(num)} ${suit}`);
  });
});

// console.log(cards);

let finalCards = [];
let cloneCards = [...cards];
let numCards = 52;
for (let i = 0; i < 3; i++) {
  let randNum = Math.floor(Math.random() * numCards);
  finalCards.push(cloneCards[randNum]);
  cloneCards.splice(randNum, 1);
  numCards--;
}

// let remainingCards = cards.filter((card) => !player1Cards.includes(card));

// let player2Cards = [];
for (let i = 0; i < 3; i++) {
  let randNum = Math.floor(Math.random() * numCards);
  // player2Cards.push(remainingCards[randNum]);
  finalCards.push(cloneCards[randNum]);
  cloneCards.splice(randNum, 1);
  numCards--;
}

// let finalCards = player1Cards.concat(player2Cards);
// console.log(finalCards);images/1 diamond.png
images.forEach((image, index) => {
  image.setAttribute("src", `images/${finalCards[index]}.png`);
});

// console.log(player1Cards);
// console.log(player2Cards);

// Random Selection of suits
// where fsnum1,fsnum2,... are strings containing the suits
// var suit_num1 = Math.floor(Math.random()*4);
// var fsnum1 = suits[suit_num1];

// var suit_num2 = Math.floor(Math.random()*4);
// var fsnum2 = suits[suit_num2];

// var suit_num3 = Math.floor(Math.random()*4);
// var fsnum3 = suits[suit_num3];

// var suit_num4 = Math.floor(Math.random()*4);
// var fsnum4 = suits[suit_num4];

// var suit_num5 = Math.floor(Math.random()*4);
// var fsnum5 = suits[suit_num5];

// var suit_num6 = Math.floor(Math.random()*4);
// var fsnum6 = suits[suit_num6];
// // /--------------------------------

// // Random selection of numbers
// var num1 = Math.floor(Math.random()*13)+1;
// var num2 = Math.floor(Math.random()*13)+1;
// var num3 = Math.floor(Math.random()*13)+1;
// var num4 = Math.floor(Math.random()*13)+1;
// var num5 = Math.floor(Math.random()*13)+1;
// var num6 = Math.floor(Math.random()*13)+1;

// // Generating Random image Source
// var imgsource = ["images/"+num1+" "+fsnum1+".png",
//                  "images/"+num2+" "+fsnum2+".png",
//                  "images/"+num3+" "+fsnum3+".png",
//                  "images/"+num4+" "+fsnum4+".png",
//                  "images/"+num5+" "+fsnum5+".png",
//                  "images/"+num6+" "+fsnum6+".png"]

// for(var i=0;i<=5;i++){
//   document.querySelectorAll("img")[i].setAttribute("src",imgsource[i]);
// }
