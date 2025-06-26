const sendButton = document.querySelector("#sendbutton");
const messageInput = document.querySelector('#textbox');
const messageContainer = document.querySelector('.chatbody');

// adding message at body
sendButton.addEventListener("click", () => {
    const text = messageInput.value.trim(); 
    if (text != "") {
        const newMessage = document.createElement("div");
        newMessage.innerHTML = `<p>${text}</p>`; 
        newMessage.style.padding = "10px 14px";
        newMessage.style.margin = "4px 0";
        newMessage.style.borderRadius = "18px";
        newMessage.style.maxWidth = "70%";
        newMessage.style.fontSize = "15px";
        newMessage.style.backgroundColor = "#3b3b3b"; // ✅ visible on dark background
        newMessage.style.color = "white";      
        
        messageContainer.appendChild(newMessage);
        messageInput.value = "";

    }
});
