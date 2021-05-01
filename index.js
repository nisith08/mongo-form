const express = require("express");

const password = "EMo8ofQ67cA294qX";

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nisith123:EMo8ofQ67cA294qX@cluster0.adflp.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname +'/index.html');
})


client.connect(err => {
    const collection = client.db("organicdb").collection("products");
    app.post("/addProduct", (req, res) => {

        collection.insertOne(product)
        .then(result => {
           console.log("one Product added");
        }) 
    })
    
    

    
    console.log("database connected");
    
});


app.listen(3000);