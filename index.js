
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





