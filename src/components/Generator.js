import React from "react";

class Generator extends React.Component {
  constructor() {
    super();
    this.generatePairs = this.generatePairs.bind(this);
    this.state={pairs:{},generated:false};
    this.saveResults=this.saveResults.bind(this)
  }

  generatePairs(event) {
    let shuffle = require("shuffle-array");
    let all = [...this.props.all];
    shuffle(all);

    let pairs = [];

    ///// loop through the students /////
    all.forEach(student => {
      //// cheack if student already paired ////
      let search = pairs.find(item => student.name == item);

      if (search == student.name) {
      } else {
        let min = 999;
        let currentPair = "";

        /////// find the pair with least counter //////
        // to add: search for already existing student in pairs
        for (let pair in student.counters) {
          let newPair = pairs.find(student => student == pair);
          if (pair == newPair) {
          } else {
            if (min > student.counters[pair]) {
              min = student.counters[pair];
              currentPair = pair;
            }
          }
        }

        ///// increment counter for current student. ///
        if (currentPair != "") {
          student.counters[currentPair]++;
        } else {
        }

        //// chosen students to Pairs array ////
        pairs.push(student.name);
        pairs.push(currentPair);

        /// increament counter for the chosen pair ////
        all.forEach(paired => {
          if (paired.name == currentPair) {
            paired.counters[student.name]++;
          }
        });
      }
    });

    this.props.receiver(all);


///////// create a results object
    let id=1, results={}, counter=1, pair={}, tempStudent="", pairName="";
    all.forEach(student=>{

      if(counter==-1){
        pairName=`Pair${id}`;
        id++;
        pair={name1: tempStudent, name2: student.name};
        results[pairName]=pair;

      }
      else{
        tempStudent=student.name
      }

      counter=counter*-1;

    })
   
    this.setState({pairs:results});

    console.log("index",this.props.index )


    //// update api
    fetch(`/api/save/${this.props.index}`, {
      method: "post",
      body: JSON.stringify({ arr: all }),
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


        this.setState({generated:true})

  }

  saveResults(event){
    this.setState({generated:false})
  }

  render() {
    return (
      <div>
        
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
