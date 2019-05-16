window.onload = function(){
    document.getElementById("submit").addEventListener("click", async function(event) {
        event.preventDefault();
        const value = document.getElementById("search").value;
        if (value === "") {
            return;
        } 
        
        console.log(value);
        var encodedURL = encodeURI(value);
        console.log(encodedURL);
        var APIKEY = "12489156-30f292eea4c5d98ce3b896e33";
        //const URL = "https://pixabay.com/api/?key="+APIKEY+"&q="+value+"&safesearch=true";
        var URL = "https://pixabay.com/api/?key="+APIKEY+"&q="+encodedURL+"&safesearch=true";
        try {
            response = await fetch(URL);
            json = await response.json();
            console.log("json: ", json);
        }
        catch(err){
            console.log(err);
        }


    });
}


let giphySearch = "";
var GIPHY_API_KEY = "VoGBCrpbqliEIBAHyzVJrffFcFv1fXGG";
var GIPHY_URL = "https://api.giphy.com/v1/gifs/search?api_key="+GIPHY_API_KEY+"&q="+giphySearch+"&limit=25&offset=0&rating=PG-13&lang=en";