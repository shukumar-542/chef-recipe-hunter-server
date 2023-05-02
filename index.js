const express = require('express')

const allChef = require('./data/chefs.json')
const recipes = require('./data/recipe.json')
const app = express()

const cors = require('cors')
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chef',(req,res)=>{
    res.send(allChef)
})



app.get('/recipe/:id',(req,res)=>{
    const id = req.params.id
    const chefRecipe = recipes.filter(recipe =>  recipe.id == id)
    res.send(chefRecipe);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})