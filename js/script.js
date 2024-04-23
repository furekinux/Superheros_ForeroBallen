function fetchSuperHero(){
    let xhr = new XMLHttpRequest();
    let heroID = document.getElementById("heroId").value;
    console.log(heroID)
    let apiKey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url = `https://www.superheroapi.com/api.php/${apiKey}/${heroID}`;
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayHero(response);
        } else if(this.readyState == 4){
            console.log("Error:",this.statusText);
        }
    };
    
    xhr.send();
}
function displayHero(data){
    let heroInfo = document.getElementById("superHeroInfo");
    if (data.response === "error"){
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        heroInfo.innerHTML = `
        <p>Name: ${data.name}</p>
        `
    }
}