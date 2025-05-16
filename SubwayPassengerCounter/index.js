let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1;
    countEl.textContent = count;
}
let countStr = 0;
function save(){
    countStr = countStr +  count + " - ";
    saveEl.textContent = countStr;
    countEl.textContent = 0;
    count = 0;
}

console.log("Let's count people on the subway!")