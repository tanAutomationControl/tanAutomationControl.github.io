
const popupScreen = document.querySelector(".popup-screen");
const popupScreen1 = document.querySelector(".popup-screen.pp1");
const popupScreen2 = document.querySelector(".popup-screen.pp2");
const popupScreen3 = document.querySelector(".popup-screen.pp3");
const popupScreen4 = document.querySelector(".popup-screen.pp4");
const popupScreen5 = document.querySelector(".popup-screen.pp5");
const popupbox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btnpopup");
const closeBtn1 = document.querySelector(".close-btnpopup1");
const closeBtn2 = document.querySelector(".close-btnpopup2");
const closeBtn3 = document.querySelector(".close-btnpopup3");
const closeBtn4 = document.querySelector(".close-btnpopup4");
const closeBtn5 = document.querySelector(".close-btnpopup5");

function btnclick() {
   popupScreen.classList.add("active");
    
}
function btnclick1() {
    popupScreen1.classList.add("active");
}
function btnclick2() {
    popupScreen2.classList.add("active");
}
function btnclick3() {
    popupScreen3.classList.add("active");
}
function btnclick4() {
    popupScreen4.classList.add("active");
}
function btnclick5() {
    popupScreen5.classList.add("active");
}

closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active");
});
closeBtn1.addEventListener("click", () => {
    popupScreen1.classList.remove("active");
});
closeBtn2.addEventListener("click", () => {
    popupScreen2.classList.remove("active");
});
closeBtn3.addEventListener("click", () => {
    popupScreen3.classList.remove("active");
});
closeBtn4.addEventListener("click", () => {
    popupScreen4.classList.remove("active");
});  
closeBtn5.addEventListener("click", () => {
    popupScreen5.classList.remove("active");
});   

