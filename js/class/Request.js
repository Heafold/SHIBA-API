class Request {
    
    constructor(img){
        this.img = img
    }

    ShibaRequest(){
        const img = this.img
        const fetchShiba = async() => {
            const response = await fetch('https://shibe.online/api/shibes')
            if(response.ok){
                return await response.json()
            }
        }

        fetchShiba()
        .then(function(d){
            img.style.backgroundImage = `url("${d}")`;
        } )
        .catch(err => console.error(err))
        
    }


}

export default Request