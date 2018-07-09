const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');
//////////////////////////////////////////////////

let dates={
  0:"9/7/2018 at: 0:21:58"
}


function outerIds(){
  let counter=2;
  let ids={
    0:"Cohort-2"
  }

  const innerIds= {

  
    getCounter(){
      return counter;
    },

    getIds(){
      
      return ids;
    },

    saveIds(name){
      
      ids[counter]=name;
      counter++;
      return ids;
    }
  }
  return innerIds;
}

function outerPairs ()
{
let all = [
  [
  {name: "Ahmed", counters:{Alex:1, Edem:2, Ethan:2, Hamzah:3, Harry:2, James:1, Jose:3, Julius:3, Matt:1, mike:1, Ollie:2, Phoebe:1, Rafal:3, Ralph:1, Sheila:2}},

  {name: "Alex", counters:{Ahmed:1, Edem:2, Ethan:1, Hamzah:1, Harry:1, James:2, Jose:3, Julius:1, Matt:0, mike:1, Ollie:2, Phoebe:1, Rafal:3, Ralph:1, Sheila:1}},
  
  {name: "Edem", counters:{Alex:2, Ahmed:2, Ethan:2, Hamzah:1, Harry:0, James:2, Jose:1, Julius:2, Matt:0, mike:1, Ollie:2, Phoebe:1, Rafal:3, Ralph:1, Sheila:1}},
  
  {name: "Ethan", counters:{Alex:1, Edem:2, Ahmed:2, Hamzah:0, Harry:1, James:2, Jose:2, Julius:2, Matt:1, mike:1, Ollie:1, Phoebe:1, Rafal:1, Ralph:2, Sheila:1}},
  
  {name: "Hamzah", counters:{Alex:1, Edem:1, Ethan:0, Ahmed:3, Harry:1, James:2, Jose:1, Julius:1, Matt:2, mike:1, Ollie:1, Phoebe:4, Rafal:1, Ralph:1, Sheila:1}},
  
  {name: "Harry", counters:{Alex:1, Edem:0, Ethan:1, Hamzah:1, Ahmed:2, James:2, Jose:2, Julius:0, Matt:2, mike:1, Ollie:2, Phoebe:3, Rafal:1, Ralph:2, Sheila:0}},
  
  {name: "James", counters:{Alex:2, Edem:2, Ethan:2, Hamzah:2, Harry:2, Ahmed:1, Jose:2, Julius:2, Matt:1, mike:1, Ollie:1, Phoebe:2, Rafal:1, Ralph:2, Sheila:1}},
  
  {name: "Jose", counters:{Alex:3, Edem:1, Ethan:2, Hamzah:1, Harry:2, James:2, Ahmed:3, Julius:2, Matt:1, mike:1, Ollie:1, Phoebe:2, Rafal:1, Ralph:2, Sheila:1}},
  
  {name: "Julius", counters:{Alex:1, Edem:2, Ethan:2, Hamzah:1, Harry:0, James:2, Jose:2, Ahmed:3, Matt:2, mike:1, Ollie:2, Phoebe:2, Rafal:1, Ralph:1, Sheila:2}},
  
  {name: "Matt", counters:{Alex:0, Edem:0, Ethan:1, Hamzah:2, Harry:2, James:1, Jose:1, Julius:2, Ahmed:1, mike:2, Ollie:1, Phoebe:3, Rafal:1, Ralph:1, Sheila:2}},
  
  {name: "Michael", counters:{Alex:1, Edem:1, Ethan:1, Hamzah:1, Harry:1, James:1, Jose:1, Julius:1, Matt:2, Ahmed:1, Ollie:1, Phoebe:2, Rafal:1, Ralph:1, Sheila:2}},
  
  {name: "Ollie", counters:{Alex:2, Edem:2, Ethan:1, Hamzah:1, Harry:2, James:1, Jose:1, Julius:2, Matt:1, mike:1, Ahmed:2, Phoebe:2, Rafal:2, Ralph:1, Sheila:1}},
  
  {name: "Phoebe", counters:{Alex:1, Edem:1, Ethan:1, Hamzah:4, Harry:2, James:2, Jose:2, Julius:2, Matt:3, mike:2, Ollie:2, Ahmed:1, Rafal:1, Ralph:2, Sheila:3}},
  
  {name: "Rafal", counters:{Alex:3, Edem:3, Ethan:1, Hamzah:1, Harry:1, James:1, Jose:1, Julius:1, Matt:1, mike:1, Ollie:2, Phoebe:1, Ahmed:3, Ralph:0, Sheila:1}},
  
  {name: "Ralph", counters:{Alex:1, Edem:2, Ethan:1, Hamzah:1, Harry:2, James:2, Jose:2, Julius:1, Matt:1, mike:1, Ollie:1, Phoebe:2, Rafal:0, Ahmed:1, Sheila:2}},
  
  {name: "Sheila", counters:{Alex:1, Edem:1, Ethan:1, Hamzah:1, Harry:1, James:1, Jose:1, Julius:2, Matt:2, mike:2, Ollie:1, Phoebe:3, Rafal:1, Ralph:2, Ahmed:2}}
  ]
  
  
];

const innerPairs ={

  all(){
    return all;
  },

  load(i){
    return all[i];
  },
  save(newArr,id){
    let date = new Date();
let fullDate=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    dates[id]=fullDate;

    all[id]=newArr;
    return all[id];
  },
  add(newArr){
    all.push(newArr);
    return newArr;
  }

}
return innerPairs;

}

//////////////////////////////////////////////////

const pairs=outerPairs();
const ids=outerIds();

app.get('/api/allLists', function(req,res){
  res.json(pairs.all());
})

app.get('/api/all/:id', function(req,res){
  res.json(pairs.load(req.params.id));
})

app.post('/api/save/:id', function(req,res){

  res.json(pairs.save(req.body.arr, req.params.id));
})

app.post('/api/newList', function(req,res){

  res.json(pairs.add(req.body.arr));
})

app.get('/api/loadIds', function(req,res){
  res.json(ids.getIds());
})

app.post('/api/newId', function(req,res){
  res.json(ids.saveIds(req.body.name));
})

app.get('/api/getDates', function(req,res){
  res.json(dates);
})

app.get('/api/getDate/:id', function(req,res){
  res.json(dates[req.params.id]);
})



app.get('*', function(req, res){
  res.render('index');
})

const port = process.env.PORT || 8080;
app.listen( port, function(){
  console.log(`Listening on port number ${port}`);
});