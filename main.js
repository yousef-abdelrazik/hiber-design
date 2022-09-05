// START CHANGE BACKGROUND
let landingH1 = document.querySelector(".contain-page h1");
let landingp = document.querySelector(".contain-page p");
let landingh2 = document.querySelector(".contain-page h2");
let mainBg = document.querySelector(".main-image-landing");
let arrImages = ["bg-image-5.jpg", "pexels-mali-maeder-65174.jpg", "pexels-ray-piedra-1565982.jpg"];
let i = 0;
 function slideshow() {
    mainBg.setAttribute("src", arrImages[i]);


    if (i == arrImages.length - 1) {
        i = 0;
    } else {
        i++;
    }

    setTimeout(function() {
       slideshow();
    }, 3000)


    if (mainBg.getAttribute("src") === arrImages[1]) {
        landingH1.style.color = "#fff";
        landingp.style.color = "#fff";
        landingh2.style.color = "#fff";
        this.style.height = "98vh"
    } else if (mainBg.getAttribute("src") === arrImages[2]) {
        landingH1.style.color = "#fff";
        landingp.style.color = "#fff";
        landingh2.style.color = "#fff";
        this.style.height = "98vh"
    } else {
        landingH1.style.color = "#000";
        landingp.style.color = "#000";
        landingh2.style.color = "rgba(0, 0, 0, 0.705)";
    }

 } 
 slideshow();


// END CHANGE BACKGROUND




// START ADD PRODUCT
let inputserchpro = document.querySelector("#inpsearch");
let btnAdd = document.querySelector("#btnsearch");
let ul = document.querySelector(".items");
let warring = document.querySelector(".warring");
console.log(inputserchpro, btnAdd, ul)

btnAdd.onclick = function() {
    if (inputserchpro.value != "") {
        let li = document.createElement("li")
        li.setAttribute("class", "item");
        ul.appendChild(li);
    
       let divContainValue = document.createElement("div");
       divContainValue.setAttribute("class", "contain-value");
       li.appendChild(divContainValue);
       divContainValue.innerHTML = inputserchpro.value;
       inputserchpro.value = "";
       warring.innerHTML = "";
       


       let btnDelate = document.createElement("a");
       btnDelate.classList.add("btndelate");
       li.appendChild(btnDelate);
       btnDelate.innerHTML = "delate";
   
       btnDelate.addEventListener("click", function() {
          li.style.display = "none";
       })
    } else {
        warring.innerHTML = "please enter your product"
    }

}
// END ADD PRODUCT





// header style position fixed

let header = document.querySelector("header");
console.log(header)
window.onscroll = function() {
    let valueSCR = scrollY;
    console.log(valueSCR)
    if (valueSCR > 700) {
        header.style.position = "fixed";
        header.style.zIndex = "99999999";
        header.style.transition = "0.5s all ease-in-out";


    } else {
        header.style.position = "relative";
    }
    
}

// START NAVBAR MOBILE
let navbarul = document.querySelector(".ulnavphone");
let fabarsIcon = document.querySelector(".fa-bars-staggered");
let containIconHeader = document.querySelector(".contain-icon-header");
let xMark = document.querySelector(".fa-xmark");


fabarsIcon.onclick = function() {
    navbarul.style.height = "370px"
    containIconHeader.style.zIndex = "999";
    containIconHeader.style.overflow = "hidden";
}
xMark.addEventListener("click", function() {
    navbarul.style.height = "0";
    containIconHeader.style.zIndex = "-1";
})
// END NAVBAR NOBILE

