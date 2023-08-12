let count1El = document.getElementById("count1-el")
let count2El = document.getElementById("count2-el")

let count = 0
let count2 = 0
function incrementOne(){
  count += 1
  count1El.textContent = count
}
function incrementTwo(){
  count += 2
  count1El.textContent = count
}
function incrementThree(){
  count += 3
  count1El.textContent = count
}
function incrementGone(){
  count2 += 1
  count2El.textContent = count2
}
function incrementGtwo(){
  count2 += 2
  count2El.textContent = count2
}
function incrementGthree(){
  count2 += 3
  count2El.textContent = count2
}
function newgame(){
  count1El.textContent = 0
  count2El.textContent = 0
  count = 0 
  count2 = 0
}