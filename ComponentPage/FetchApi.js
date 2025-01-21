let arrayOfCountry = [];
async function TakeApi(url) {
    try{
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        let convertjson = await response.json();
        convertjson.map((item)=>{
            let newObject ={
                name: item.name.common,
                img: item.flags.png,
                capital: item.capital,
            }
            arrayOfCountry.push(newObject);  
        })
    }
    catch(er){
        console.error(er);
    }
}
let countChange = 0;
TakeApi("https://restcountries.com/v3.1/all");
let imgArea = document.querySelector(".img-are");
let randomButton = document.querySelector(".random");
let randomValue = document.querySelectorAll(".radio-wrapper");
randomButton.addEventListener("click",(event)=>{
    let ranChoice = Math.round(Math.random()*251);
    let country = arrayOfCountry[ranChoice];
    let imgTag = document.querySelector(".img-tag");
    imgTag.setAttribute("src",country.img);
    let ranChoiceCorret = Math.round(Math.random()*3);
    let firstRanChoice = Math.round(Math.random()*250);
    let secondRanChoice = Math.round(Math.random()*250);
    let thirdRanChoice = Math.round(Math.random()*250);
    console.log(ranChoiceCorret);
    if(ranChoiceCorret == 0){
        // 1,2,3
        randomValue[ranChoiceCorret].lastElementChild.innerText = country.name;
        randomValue[1].lastElementChild.innerText = arrayOfCountry[firstRanChoice].name;
        randomValue[2].lastElementChild.innerText = arrayOfCountry[secondRanChoice].name;
        randomValue[3].lastElementChild.innerText = arrayOfCountry[thirdRanChoice].name;
    }
    else if(ranChoiceCorret == 1){
        // 0,2,3
        randomValue[ranChoiceCorret].lastElementChild.innerText = country.name;
        randomValue[0].lastElementChild.innerText = arrayOfCountry[firstRanChoice].name;
        randomValue[2].lastElementChild.innerText = arrayOfCountry[secondRanChoice].name;
        randomValue[3].lastElementChild.innerText = arrayOfCountry[thirdRanChoice].name;
    }
    else if(ranChoiceCorret == 2){
        //0,1,3
        randomValue[ranChoiceCorret].lastElementChild.innerText = country.name;
        randomValue[0].lastElementChild.innerText = arrayOfCountry[firstRanChoice].name;
        randomValue[1].lastElementChild.innerText = arrayOfCountry[secondRanChoice].name;
        randomValue[3].lastElementChild.innerText = arrayOfCountry[thirdRanChoice].name;
    }
    else if(ranChoiceCorret == 3){
        // 0, 1, 2
        randomValue[ranChoiceCorret].lastElementChild.innerText = country.name;
        randomValue[0].lastElementChild.innerText = arrayOfCountry[firstRanChoice].name;
        randomValue[1].lastElementChild.innerText = arrayOfCountry[secondRanChoice].name;
        randomValue[2].lastElementChild.innerText = arrayOfCountry[thirdRanChoice].name;
    }
    console.log(country.name);
    console.log(randomValue[ranChoiceCorret].lastElementChild.innerText);

});
