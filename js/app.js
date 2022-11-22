import Request from "./class/Request.js";

const random = document.getElementById('randomButton')
const score = document.getElementById('score')
const reset = document.getElementById('reset')
let scoreNbr = 1
score.innerHTML = scoreNbr
random.addEventListener("click", newRequest)
reset.addEventListener("click", resetPage)

function newRequest(){
    scoreNbr = scoreNbr + 1
    score.innerHTML = scoreNbr
    const request = new Request
    request.ajax()
}

function resetPage(){
    location.reload()
}


