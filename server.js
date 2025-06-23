const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
//setting ejs
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

//routing
app.get("/", function(req, res) {
    res.render("index");
});

app.get("/chat",function(req,res){
    res.render("chat")
})
//listining
app.listen(port,()=>{
     console.log(`Server started at http://localhost:${port}`);
})