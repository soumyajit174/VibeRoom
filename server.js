const express = require("express");
const path = require("path");
const http = require("http");
const { customAlphabet } = require("nanoid");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 8000;

// setting ejs
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// generating room ID
const generateRoomId = () => {
    const alphabet = customAlphabet('abcdefghijklmnpqrstuvwxyz', 2);
    const digits = customAlphabet('123456789', 2);
    return alphabet() + digits();
};


//routing
app.get("/", function(req, res) {
    res.render("index");
});

app.post("/chat", (req, res) => {
    const { username, roomID } = req.body;
    let roomIDCreated;
    if(!roomID || roomID.trim() === ""){
         roomIDCreated = generateRoomId();
    }else{
        roomIDCreated = roomID;
    }
    // Send the room ID back so the frontend 
    res.json({roomID: roomIDCreated });
});


app.get("/chat/:roomID",(req,res)=>{
    res.render("chat");
})

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Listen for chat messages from clients
    socket.on("chat", (data) => {
        // Add sender's socket ID to data
        data.id = socket.id;

        // Broadcast message to all clients (including sender)
        io.emit("chat", data);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
