const sendButton = document.querySelector("#sendbutton");
const messageInput = document.querySelector('#textbox');
const messageContainer = document.querySelector('.chatbody');

// Initialize socket connection
const socket = io();

// Send message on button click
sendButton.addEventListener("click", () => {
    const text = messageInput.value.trim();
    if (text !== "") {
        // Send to backend with sender's socket ID
        socket.emit("chat", { text, id: socket.id });

        // Clear input immediately after sending
        messageInput.value = "";
    }
});

// Receive and display messages from the server
socket.on("chat", ({ text, id }) => {
    const messageWrapper = document.createElement("div"); // outer container for alignment
    const messageBubble = document.createElement("div"); // actual message bubble
    messageBubble.textContent = text;

    // Bubble styling
    messageBubble.style.cssText = `
        padding: 10px 14px;
        border-radius: 18px;
        max-width: 70%;
        font-size: 15px;
        color: white;
        word-wrap: break-word;
        background-color: ${id === socket.id ? "#3b3b3b" : "#8FBC8B"};
    `;

    // Alignment
    messageWrapper.style.display = "flex";
    messageWrapper.style.justifyContent = id === socket.id ? "flex-end" : "flex-start";
    messageWrapper.style.margin = "4px 0";

    messageWrapper.appendChild(messageBubble);
    messageContainer.appendChild(messageWrapper);
    messageContainer.scrollTop = messageContainer.scrollHeight; // auto-scroll
});

// Send message with Enter key
messageInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") sendButton.click();
});
