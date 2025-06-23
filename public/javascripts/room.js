const createBtnLink = document.querySelector("#create-button");
const name = document.querySelector("#createName");
const userName = name.value.trim();

//CREATE ROOM
createBtnLink.addEventListener("click",function(){
    window.location.href = "/chat";
})