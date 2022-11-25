class Bird {
    
    constructor(img){
        this.img = img
    }

    BirdRequest(){
        const img = this.img
        const fetchBird = async() => {
            const response = await fetch('https://shibe.online/api/birds')
            if(response.ok){
                return await response.json()
            }
        }

        fetchBird()
        .then(function(d){
            img.style.backgroundImage = `url("${d}")`;
        } )
        .catch(err => console.error(err))
        
    }


}

export default Bird