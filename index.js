// document.getElementById("count-el").innerText = 78

// Comment Ctrl + k + c

// let count = 0

// myAge = 23

// console.log(myAge)

// /////////////////////////////
// //
// myAge = 22
// humanDogRatio = 7
// myDogsAge = myAge * humanDogRatio

// console.log(myDogsAge)

// let count = 5
// count = count + 8
// console.log(count)

// let bonusPoints = 50

// bonusPoints = bonusPoints + 100
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function increment () {
//     console.log("the button was clicked")
// }

// function countDown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// countDown()
// countDown()

// function myNum () {
//     console.log(42)
// }

// myNum()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLaps () {
//     console.log(lap1 + lap2 + lap3)
// }

// totalLaps()

// let lapCompleted = 0

// function myfuct () {

//     lapCompleted = lapCompleted + 1

// }

// myfuct()
// myfuct()
// myfuct()
// myfuct()
// myfuct()

// console.log(lapCompleted)

// let count = 0

// function increment() {

//     document.getElementById("count-el").innerText = count
//     count = count + 12252045454545250
// }

// increment()

////////////////////////////////////////////////////////

// let countEl = document.getElementById("count-el");

// console.log(countEl);

// let count = 0;

// function increment() {
//   count = count + 1;
//   countEl.innerText = count;
// }

///////////////////////////////////////////////////////
let saveEl = document.getElementById("save-el")

let counter = document.getElementById("count-el");

let count = 0;

function increment() {
  count += 1;
  counter.innerText = count;
}

 
function save() {
  console.log(count);

  let entries =  " - "+ count
  saveEl.innerText += entries 
  counter.innerText = 0
  count = 0


}





