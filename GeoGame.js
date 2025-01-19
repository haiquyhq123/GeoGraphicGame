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
