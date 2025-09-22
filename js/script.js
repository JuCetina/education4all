const menuButton = document.querySelector(".menu_mov-button");
const menuContainer = document.querySelector(".menu_mov-container");

const mobileResolution = window.matchMedia("screen and (max-width: 849px)");

function showHide(){
    if(menuContainer.classList.contains("is-active")){
        menuContainer.classList.remove("is-active");
    }
    else{
        menuContainer.classList.add("is-active");
    }
}

function resolutionValidation(resolution){
    if(resolution.matches){
        menuButton.addEventListener("click", showHide);
    }
    else{
        menuButton.removeEventListener("click", showHide);
    }
}


resolutionValidation(mobileResolution);

