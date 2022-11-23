import Request from "./class/Request.js";
import Function from "./class/Function.js"

document.addEventListener('DOMContentLoaded', () => {
    
    const random = document.getElementById('randomButton')
    const image = document.getElementById('imageShib')
    const score = document.getElementById('score')
    const reset = document.getElementById('reset')

    let scoreNbr = 0
    score.innerHTML = scoreNbr

    const request = new Request(image)
    const funcction = new Function(scoreNbr, score, request, image)

    random.addEventListener("click", () => {
        funcction.newRequest()
    })
    reset.addEventListener("click", () => {
        funcction.resetPage()
    })

})




