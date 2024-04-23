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
        stats = data.powerstats
        img_url = data.image
        work = data.work
        connections = data.connections
        affiliation = connections["group-affiliation"]
        appearance = data.appearance
        eye_color = appearance["eye-color"]
        hair_color = appearance["hair-color"]
        

        heroInfo.innerHTML = `

        <h3>General Info</h3>
        <p>Name: ${data.name}</p>
        <br><img src="${img_url.url}"</br>

        <h3>Powerstats</h3>
        <p>Combat: ${stats.combat}</p>
        <p>Durability: ${stats.durability}</p>
        <p>Intelligence: ${stats.intelligence}</p>
        <p>Power: ${stats.power}</p>
        <p>Speed: ${stats.speed}</p>
        <p>Strength: ${stats.strength}</p>

        <h3>Work</h3>
        <p>Occupation: ${work.occupation}</p>
        <p>Base: ${work.base}</p>

        <h3>Connections</h3>
        <p>Group/Affiliation: ${affiliation}</p>
        <p>Relatives: ${connections.relatives}</p>

        <h3>Appareance</h3>
        <p>Eye color: ${eye_color}</p>
        <p>Gender: ${appearance.gender}</p>
        <p>Hair color: ${hair_color}</p>
        <p>Race: ${appearance.race}</p>
        <p>Height: ${appearance.height[0]} or ${appearance.height[1]}</p>
        <p>Weight: ${appearance.weight[0]} or ${appearance.weight[1]}</p>


        `
    }
}