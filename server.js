const express = require("express");
const path = require("path");
const { customAlphabet } = require("nanoid"); 
const app = express();
const port = 8000;


//setting ejs
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');


// Body parsers (for form and JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




//creating roomID
   const generateRoomId = ()=>{
            const alphabet = customAlphabet('abcdefghijklmnpqrstuvwxyz', 2);
            const digits = customAlphabet('123456789',2);

            const roomIdAlphabet= alphabet();
            const roomIdDigits = digits();
            const AlphanumericID = roomIdAlphabet+roomIdDigits;
            return AlphanumericID;
   }




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


//listining
app.listen(port,()=>{
     console.log(`Server started at http://localhost:${port}`);
})