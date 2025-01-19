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
TakeApi("https://restcountries.com/v3.1/all");
let imgArea = document.querySelector(".img-are");
let randomButton = document.querySelector(".random");
randomButton.addEventListener("click",(event)=>{
    let ranChoice = Math.round(Math.random()*251);
    let country = arrayOfCountry[ranChoice];
    let imgTag = document.querySelector(".img-tag");
    imgTag.setAttribute("src",country.img);
    
})