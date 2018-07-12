import React from "react";

class Generator extends React.Component {
  constructor() {
    super();
    this.generatePairs = this.generatePairs.bind(this);
    this.state={pairs:{},generated:false, tempAll:[]};
    this.saveResults=this.saveResults.bind(this)
  }

  generatePairs(event) {
    let shuffle = require("shuffle-array");
    let all = JSON.parse(JSON.stringify(this.props.all));
    shuffle(all);
    
    let pairs = [];

    for(let outer=0;outer<all.length;outer++){

      //// cheack if student already paired ////
      if(pairs.indexOf(all[outer].name)<0){

        let min=999;
        let currentPair;
        for(let choice in all[outer].counters){
          //check if the choice has already paired
          if(pairs.indexOf(choice)<0){


            //find pair with less counters
          if(all[outer].counters[choice] < min){
            currentPair=choice;
            min= all[outer].counters[choice]
            
          }
        }
        }
        
        if(currentPair){


          //update counters
          all[outer].counters[currentPair]++;
          for(let inner=0; inner<all.length;inner++){
            if(all[inner].name === currentPair){
              all[inner].counters[all[outer].name]++
            }
          }
     
        //update pairs array
        pairs.push(all[outer].name)
        pairs.push(currentPair)
        }
        
      }
      

    }
    


///////// create a results object
    let id=1, results={}, counter=1, pair={}, tempStudent="", pairName="";
    pairs.forEach(student=>{

      if(counter==-1){
        pairName=`Pair${id}`;
        id++;
        pair={name1: tempStudent, name2: student};
        results[pairName]=pair;

      }
      else{
        tempStudent=student
      }

      counter=counter*-1;

    })

    
   
    this.setState({pairs:results,generated:true,tempAll:all});

  }

  saveResults(event){
    this.setState({generated:false})
    
    this.props.receiver(this.state.tempAll)

    //// update api
    fetch(`/api/save/${this.props.index}`, {
      method: "post",
      body: JSON.stringify({ arr: this.state.tempAll }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        
      });



          //update history api
          fetch(`/api/saveHistory`, {
            method: "post",
            body: JSON.stringify( this.state.pairs ),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              
            });
  }

  render() {
    return (
      <div className="generator">
        
        <img className="click-here" src="./static/images/blueOne.png" onClick={this.generatePairs} />
        <img className={this.state.generated ? "save-button" : "none"} src="./static/images/greenOne.png" onClick={this.saveResults}  />
        

      <div className="results">
      
      {Object.keys(this.state.pairs).map(key=>{
        return(
          <h2 key={key}> {this.state.pairs[key].name1} & {this.state.pairs[key].name2} </h2>
        )
      })}

      </div>


      </div>

      
    );
  }
}

export default Generator;
