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
            console.log("image json: ", json);

            document.getElementById("DisplayResults").innerHTML = "";

            var output = "<a href='" +json.hits[0].pageURL+ "'>" + '<img src="' +json.hits[0].largeImageURL+ '" alt="' + json.hits[0].tags + '" width:"100%"></a>';
            var results = "";
            for(let i=1; i < json.hits.length; i++)
            {
                results += "<div class='image'><a href='" +json.hits[i].pageURL+ "'>" +'<img src="' +json.hits[i].webformatURL+ '" alt="' + json.hits[i].tags + '"></a></div>';
            }
            document.getElementById("DisplayResults").innerHTML += output;
            document.getElementById("results").innerHTML = results;
        }
        catch(err){
            console.log(err);
        }

    });
  

}

//https://api.giphy.com/v1/gifs/search?api_key=VoGBCrpbqliEIBAHyzVJrffFcFv1fXGG&q=VALUEHERE&limit=10&offset=0&rating=PG-13&lang=en

  // document.getElementById("gifSubmit").addEventListener("click", async function(event) {
    //     event.preventDefault();

    //     const value = document.getElementById("searchGifs").value;
    //     if (value === "")
    //     {
    //         return;
    //     }

    //     console.log(value);
    //     var encodedGifURL = encodeURI(value);
    //     console.log(encodedGifURL);
    //     var GIPHY_API_KEY = "VoGBCrpbqliEIBAHyzVJrffFcFv1fXGG";

    //     var URL = "https://api.giphy.com/v1/gifs/search?api_key="+GIPHY_API_KEY+"&q="+"cats"+"&lmiit=20&rating=PG-13&lang=en";
    //     console.log(URL);
    //     try {
    //         response = await fetch(URL);
    //         gifjson = await response.json();
    //         console.log("gif json: " + gifjson)
    //     }
    //     catch(err){
    //         console.log(err);
    //     }

    // });