class Request {
    
    ajax(){
        const image = document.getElementById('imageShib')
        const fetchShiba = async() => {
            const response = await fetch('https://shibe.online/api/shibes')
            if(response.ok){
                return await response.json()
            }
        }

        fetchShiba()
        .then(function(d){
            image.style.backgroundImage = `url("${d}")`;
        } )
        .catch(err => console.error(err))
        
    }

}

export default Request