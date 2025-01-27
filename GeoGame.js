
let liHidden = document.querySelector(".Game");
let checkAdd = 0;
liHidden.addEventListener("click",(event)=>{
    if(checkAdd ==0){
        // chua hover
        let ulHidden= liHidden.querySelector(".sub-vertical.noDisplay");
        ulHidden.setAttribute("class","sub-vertical");
        checkAdd = 1;
    }
    else{
        let ulHidden= liHidden.querySelector(".sub-vertical");
        ulHidden.classList.add("noDisplay");
        checkAdd = 0;
    }

});

let classGameHistory = document.querySelector(".game-history:nth-child(2)");
console.log(classGameHistory);
let historyArrayInString = localStorage.getItem("gameHistory");
let historyArray = JSON.parse(historyArrayInString);

historyArray.forEach((item,index) => {
    let newP = document.createElement('p');
    let newContent = `you play in ${item.thisDate} with ${item.thisScore} point`;
    newP.innerHTML = newContent;
    classGameHistory.appendChild(newP);
});
let buttonReset = document.querySelector(".res-local");
buttonReset.addEventListener("click",(event)=>{
    localStorage.clear();
    window.location.reload(true);
});