const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const {knex} = require('./db/knex')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/descriptions', (req, res) => {
  knex.raw(`SELECT * FROM descriptions`).then((descriptions) => {
    let data = descriptions.rows
    res.status(200).send(data)
  })
})

app.get('/descriptions-simple', (req, res) => {
  knex.select().from('descriptions')
  .then( (descriptions) => {
    res.status(200).send(descriptions);
  })
})

app.post('/descriptions', (req, res) => {
  console.log(`The requested description to post is -->`, req.body)
  knex('descriptions').insert({
    product_id: req.body.product_id,
    product_name: req.body.product_name,
    features: req.body.features,
    tech_specs: req.body.tech_specs,
  })
  .then( () => {
    knex.select().from('descriptions').where('product_id', req.body.product_id)
    .then((result) => {res.send(result)})
  })
})

app.delete('/descriptions/:productId', (req, res) => {
  knex('descriptions').where('product_id', req.params.productId)
  .del()
  .then((affectedRows) => {
    console.log()
    return res.status(200).send(`The number of affectedRows --> ${affectedRows}`)
  })
})



app.listen(port, () => { console.log(`Server is listening on port ${port}`)});
