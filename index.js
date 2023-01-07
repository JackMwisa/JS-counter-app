

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





