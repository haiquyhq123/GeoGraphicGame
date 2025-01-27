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
let click = false;
let checked = false;
let countChange = 0;
TakeApi("https://restcountries.com/v3.1/all");
let imgArea = document.querySelector(".img-are");
let randomButton = document.querySelector(".random");
let randomValue = document.querySelectorAll(".radio-wrapper");
let answer;
let bypassRandom = false;
let so = 0;
randomButton.addEventListener("click",(event)=>{
    if(so == 0){
        let ranChoice = Math.round(Math.random()*251);
        let country = arrayOfCountry[ranChoice];
        let imgTag = document.querySelector(".img-tag");
        imgTag.setAttribute("src",country.img);
        let ranChoiceCorret = Math.round(Math.random()*3);
        let firstRanChoice = Math.round(Math.random()*250);
        let secondRanChoice = Math.round(Math.random()*250);
        let thirdRanChoice = Math.round(Math.random()*250);
        console.log(ranChoiceCorret);
        answer = ranChoiceCorret;
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
        randomValue.forEach(item => {
            item.classList.remove("true");
            item.classList.remove("false");
            
        });
        click = false;
        checked = false;
        updateArray = false;
        let message = document.querySelector(".CheckMessage");
        message.innerText ="";
    }
    if(bypassRandom == true){
        let ranChoice = Math.round(Math.random()*251);
        let country = arrayOfCountry[ranChoice];
        let imgTag = document.querySelector(".img-tag");
        imgTag.setAttribute("src",country.img);
        let ranChoiceCorret = Math.round(Math.random()*3);
        let firstRanChoice = Math.round(Math.random()*250);
        let secondRanChoice = Math.round(Math.random()*250);
        let thirdRanChoice = Math.round(Math.random()*250);
        console.log(ranChoiceCorret);
        answer = ranChoiceCorret;
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
        randomValue.forEach(item => {
            item.classList.remove("true");
            item.classList.remove("false");
            
        });
        click = false;
        checked = false;
        updateArray = false;
        let message = document.querySelector(".CheckMessage");
        message.innerText ="";
    }
    so++;
    
    bypassRandom = false;
});
let arrayHistoryPlay = [];
let score = 0;
let updateScore = document.querySelector(".update-score");
let value = updateScore.querySelector(".value");
value.innerText = score;
let updateArray = false;
let answerArea = document.querySelector(".check-answer-area");
randomValue.forEach((item, index) => {
    item.firstElementChild.addEventListener("click", (event) => {
        bypassRandom = true;
        console.log(arrayHistoryPlay);
        if(index == answer && click!=true && checked == false){
            item.classList.add("true");
            score++;
            let value = updateScore.querySelector(".value");
            value.innerText = score;
            checked = true;
        }
        else if(click == true && index == answer){
            
            let message = document.querySelector(".CheckMessage");
            console.log(message);
            message.innerText = "You already chose to reveal the answer!";
 
        }
        else{
            item.classList.add("false");
            value.innerText = score;
            checked = true;
            const date = new Date();
            let infoThisTimePlay = {
                thisScore: score,
                thisDate: date
            }
            if(updateArray == false){
                arrayHistoryPlay.push(infoThisTimePlay);
                updateArray = true;
            }
            localStorage.setItem('gameHistory', JSON.stringify(arrayHistoryPlay));
            score = 0;
            let message = document.querySelector(".CheckMessage");
            message.innerText = "Game over! click random button to start over";
    
        }
    });
});

let showResult = document.querySelector(".show-result");
showResult.addEventListener("click",(event)=>{
    let correctOne = document.querySelector(`.radio-wrapper:nth-child(${answer+1})`);
    correctOne.classList.remove("true");
    correctOne.classList.remove("false");
    correctOne.classList.add("true");
    click = true;

})
