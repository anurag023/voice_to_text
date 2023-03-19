const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const bodyparser=require("body-parser");
const port = 8000;

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'html') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


app.get(`/`,  (req,res)=>{ 
    const params= { }
     res.status(200).render(`index.html`, params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});