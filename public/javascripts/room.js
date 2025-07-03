const createBtnLink = document.querySelector("#create-button");
const nameInputCreate = document.querySelector("#createName");
const joinBtnLink = document.querySelector("#join-button");
const roomInput = document.querySelector("#roomNumber");
const nameInputJoin = document.querySelector("#joinName");

// CREATE ROOM
createBtnLink.addEventListener("click", function () {
    const nameValue = nameInputCreate.value.trim();
     //  Get value at the time of click

    fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: nameValue,roomID:"" })
    })
    .then(res => res.json())
    .then(data => {
        // Optionally pass username in the URL too
        window.location.href = `/chat/${data.roomID}`;
    });
});


//JOIN ROOM
joinBtnLink.addEventListener("click", function () {
    const nameValue = nameInputJoin.value.trim();
    const roomValue = roomInput.value.trim(); 
     //  Get value at the time of click

    fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: nameValue,roomID:roomValue })
    })
    .then(res => res.json())
    .then(data => {
        // Optionally pass username in the URL too
        window.location.href = `/chat/${data.roomID}`;
    });
});



