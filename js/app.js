import Request from "./class/Request.js";
import Function from "./class/Function.js"
import Cat from "./class/Cat.js";
import Bird from "./class/Bird.js";

document.addEventListener('DOMContentLoaded', () => {
    
    const randomShib = document.getElementById('randomButton')
    const randomCat = document.getElementById('randomCat')
    const randomBird = document.getElementById('randomBird')
    const image = document.getElementById('imageShib')
    const score = document.getElementById('score')
    const reset = document.getElementById('reset')

    let scoreNbr = 0
    score.innerHTML = scoreNbr

    const request = new Request(image)
    const cat = new Cat(image)
    const bird = new Bird(image)
    const Shibfunction = new Function(scoreNbr, score, request, image)
    const Catfunction = new Function(scoreNbr, score, cat, image)
    const Birdfunction = new Function(scoreNbr, score, bird, image)
    

    randomShib.addEventListener("click", () => {
        Shibfunction.newRequest()
    })

    randomCat.addEventListener("click", () => {
        Catfunction.newRequestCat()
    })

    randomBird.addEventListener("click", () => {
        Birdfunction.newRequestBird()
    })
    reset.addEventListener("click", () => {
        Shibfunction.resetPage()
        Catfunction.resetPage()
        Birdfunction.resetPage()
    })

})




