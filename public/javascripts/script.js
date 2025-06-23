//selecting queries
const createBtn = document.querySelector("#createTab");
const joinBtn = document.querySelector("#joinTab");
const createRoom = document.querySelector("#createRoomForm");
const createJoin = document.querySelector("#joinRoomForm");

//appear joinRoom and diappering create room
joinBtn.addEventListener("click",function(){
    createJoin.style.display = "flex";
    createRoom.style.display= "none";
    createBtn.style.borderBottom = "none";
    joinBtn.style.borderBottom = "3px solid  #5bbbff";
    joinBtn.style.color=" #5bbbff";
    createBtn.style.color=" #5b74a9";
})
createBtn.addEventListener("click",function(){
    createJoin.style.display = "none";
    createRoom.style.display= "flex";
    createBtn.style.borderBottom = "3px solid  #5bbbff";
    joinBtn.style.borderBottom = "none";
    createBtn.style.color=" #5bbbff";
    joinBtn.style.color=" #5b74a9";
})



