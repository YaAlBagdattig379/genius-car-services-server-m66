const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

// username : user03
// password : jN2BVxlRnkDE6YaJ
// middleware 
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xw2abv6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('success')
  // perform actions on the collection object
  client.close();
});


app.get('/',(req,res)=>{
    res.send('running genius server side');
})
app.listen(port,()=>{
    console.log('listening to  porting currently')
})