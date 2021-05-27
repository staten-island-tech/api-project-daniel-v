console.log("connected");

async function getapi() {

    if(document.getElementById("artist").value != "" && document.getElementById("title").value != "")
    {
        document.getElementById("results").innerHTML = "Loading...";
    }

    console.log("Fetching lyrics from Artist " + document.getElementById("artist").value + " and song title " + document.getElementById("title").value);
    var response = await fetch('https://api.lyrics.ovh/v1/' + document.getElementById("artist").value +"/" + document.getElementById("title").value);
    console.log("done");
    
    var data = await response.json();
    console.log(data);
    if (data.lyrics != "") {
        document.getElementById("results").innerHTML = data.lyrics;
    }
    else
    {
        document.getElementById("results").innerHTML = "ERROR: Lyrics not found";
    }
}