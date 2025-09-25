const express = require("express");
require("./connection")
const cors = require("cors");
var BlogModel=require("./model")

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here

//Write your POST API here
app.post("/add", async (req, res) => {
  try {
    await BlogModel(req.body).save();
    res.send({message:"data added"});
  } catch (error) {
    console.log(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/delete/:id",async(req,res)=>{
try {
    await BlogModel.findByIdAndDelete(req.params.id)
    res.send({message:"data deleted"})
} catch (error) {
    console.log(error)
}
})

app.put("/update/:id",async(req,res)=>{
try {
    await BlogModel.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"data updated"})
} catch (error) {
    console.log(error)
}
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});