const { MongoClient, ServerApiVersion } = require('mongodb');//to call installation
const express = require("express");
const bodyParser = require("body-parser");

const User = require("./models/user");//object creation


const uri =
  "mongodb+srv://needraf:Heloo123@cluster0.d7lzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";//api url mongo 
const cors = require("cors");//package 

const app = express();//calling express with app
app.use(express.static("public"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

const client = new MongoClient(uri, {//connection mongo db
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

app.get("/api/data", (req, res) => {

     async function findDocuments() {
        try {

            await client.connect();
            const database = client.db('share_prompt');
            const collection = database.collection('users'); 
            let documents = await collection.find({}).toArray();
            console.log(documents);
            res.json(documents);

        } catch (error) {
            console.error('Error occurred:', error);
            return []; 
        } finally {
            await client.close();
        }
    }
    findDocuments();
    const data = {message: "This is some data from the server!",};
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
