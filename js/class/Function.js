class Function{
    
    constructor(scoreNbr, score, request, img){
        this.scoreNbr = scoreNbr
        this.score = score
        this.request = request
        this.img = img
    }
    
    newRequest() {
        this.scoreNbr = this.scoreNbr + 1
        this.score.innerHTML = this.scoreNbr
        this.request.ShibaRequest()
    }
    
    resetPage() {
        this.scoreNbr = 0
        this.score.innerHTML = this.scoreNbr
        this.img.style.backgroundImage = "url('https://s.yimg.com/ny/api/res/1.2/kwUySU9SFW2HWD8YOnO1lQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1Mg--/https://media.zenfs.com/en/investorplace_417/6547c6454ca0f10863600fc11f05832d')"
    }
}

export default Function