console.log("connected");

async function getapi() {
    
    var response = await fetch('https://api.lyrics.ovh/v1/' + document.getElementById("artist").value +"/" + document.getElementById("title").value);
    
    var data = await response.json();
    console.log(data);
    if (response) {
        document.getElementById("results").innerHTML = data.lyrics;
    }
}