const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');
//////////////////////////////////////////////////
function outerPairs ()
{
let all = [
  {name: "ahmed", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:2, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "alex", counters:{ahmed:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:1, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "edem", counters:{alex:1, ahmed:1, ethan:1, hamza:1, harry:1, james:1, jose:1, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "ethan", counters:{alex:1, edem:1, ahmed:1, hamza:1, harry:1, james:1, jose:1, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "hamza", counters:{alex:1, edem:1, ethan:1, ahmed:1, harry:1, james:1, jose:1, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "harry", counters:{alex:1, edem:1, ethan:1, hamza:1, ahmed:1, james:1, jose:1, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "james", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, ahmed:1, jose:1, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "jose", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, ahmed:2, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "julius", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:1, ahmed:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "matt", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:1, julius:1, ahmed:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "mike", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:1, julius:1, matt:1, ahmed:1, ollie:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "ollie", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:1, julius:1, matt:1, mike:1, ahmed:1, phoebe:1, rafal:1, ralph:1, sheila:1}},
  {name: "phoebe", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:1, julius:1, matt:1, mike:1, ollie:1, ahmed:1, rafal:1, ralph:1, sheila:1}},
  {name: "rafal", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:1, julius:1, matt:1, mike:1, ollie:1, phoebe:1, ahmed:1, ralph:1, sheila:1}},
  {name: "ralph", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:1, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ahmed:1, sheila:1}},
  {name: "sheila", counters:{alex:1, edem:1, ethan:1, hamza:1, harry:1, james:1, jose:1, julius:1, matt:1, mike:1, ollie:1, phoebe:1, rafal:1, ralph:1, ahmed:1}}
];

const innerPairs ={
  load(){
    return all;
  },
  save(newArr){
    all=newArr;
    return all;
  }

}
return innerPairs;

}

//////////////////////////////////////////////////

const pairs=outerPairs();

app.get('/api/all', function(req,res){
  res.json(pairs.load());
})

app.post('/api/save', function(req,res){

  res.json(pairs.save(req.body.arr));
})


app.get('*', function(req, res){
  res.render('index');
})

const port = process.env.PORT || 8080;
app.listen( port, function(){
  console.log(`Listening on port number ${port}`);
});