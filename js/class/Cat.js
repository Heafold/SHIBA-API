class Cat {
    
    constructor(img){
        this.img = img
    }

    CatRequest(){
        const img = this.img
        const fetchCat = async() => {
            const response = await fetch('https://shibe.online/api/cats')
            if(response.ok){
                return await response.json()
            }
        }

        fetchCat()
        .then(function(d){
            img.style.backgroundImage = `url("${d}")`;
        } )
        .catch(err => console.error(err))
        
    }


}

export default Cat