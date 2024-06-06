const express = require('express')
const mongoose = require('mongoose');
const port = 5001
const InventorySheet = require('./schema')

const app = express()

//This connection string can also be pasted into MongoCompass
mongoose.connect("mongodb+srv://Cat:Meow@cluster0.9pkmaso.mongodb.net/Cat_Couture")

app.get('/', async (req, res) => {
    const exampleData = await InventorySheet.find({});
    console.log(exampleData);
    res.status(200).send(exampleData)
  })

  app.get('/1', async (req, res) => {
    const exampleData = await InventorySheet.find({id:1});
    console.log(exampleData);
    res.status(200).send(exampleData)
  })

  const productBody = {
    "id": 11,
    "name": "Cat Fancy Hat",
    "description": "Extravagant hat for fashion-forward cats, making a statement wherever they go",
    "price": 30,
    "category": "Accessories",
    "image": {
      "name": "Cat Fancy Hat",
      "description": "Cat wearing a fancy hat",
      "img": "cat_fancyhat.jpg"
    },
    "discount": {
      "discount_type": "Percent",
      "value": 10
    }
  }

  app.post(
    "/post",
    async (req, res, next) => {
        const product = new InventorySheet(productBody);
        await product.save();
        return res.status(201).send(product);
    }
  );


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })