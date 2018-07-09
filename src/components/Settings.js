import React from "react";
import cx from 'classnames';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = { value: "", name:"", ids:{}, selectedId:0, selectedList:[], exists:false, added:false, listInfo:"",date:"" };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler=this.submitHandler.bind(this);
    this.previewHandler=this.previewHandler.bind(this);
    this.selectHandler=this.selectHandler.bind(this);
    this.nameHandler=this.nameHandler.bind(this);
  }

  componentDidMount(){
    let str="this list contains these students: ";
        this.props.selectedList.map(student=>str+=`${student.name}, `);

        
        fetch(
          `/api/getDate/0`
        )
          .then(response => (response.json()))
          .then(data =>this.setState({date:data})   )
          .catch(err => console.log(err));



        

    this.setState({exists:false, added:false,listInfo:str})
    fetch(
      `/api/loadIds`
    )
      .then(response => (response.json()))
      .then(data =>this.setState({ids:data}))
      .catch(err => console.log(err));


      this.setState({selectedList:this.props.selectedList})
  }

  changeHandler(event) {
    this.setState({ value: event.target.value });
  }

  nameHandler(event){
    this.setState({exists:false, added:false})
    this.setState({ name: event.target.value });
  }

  submitHandler(event) {
    this.setState({exists:false, added:false})
    event.preventDefault();

    for (let key in this.state.ids){
      if(this.state.name ==this.state.ids[key]){
        this.setState({exists:true});
        return;
      }
    }
    

    let arr = this.state.value.split(",");

    let list = [];

    for (let i = 0; i < arr.length; i++) {
      let tempObj = { name: arr[i], counters: {} };

      for (let i2 = 0; i2 < arr.length; i2++) {
        if(arr[i]!=arr[i2])
        tempObj.counters[arr[i2]] = 0;
      }

      list.push(tempObj);
    }

    const self=this;

    fetch(`/api/newList`, {
      method: "post",
      body: JSON.stringify({ arr: list }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        
      });


      fetch(`/api/newId`, {
        method: "post",
        body: JSON.stringify({ name: this.state.name }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          self.setState({ids:data})
        });

        this.setState({added:true});

  }

  previewHandler(event){
    const self=this;
    let id=0;
    for (let key in this.state.ids){
      if(this.state.ids[key] == event.target.value)
        id=key;
    }
    this.setState({selectedId:id});
    fetch(
      `/api/all/${id}`
    )
      .then(response => (response.json()))
      .then(data =>{
        self.setState({selectedList:data})
        let str="this list contains these students: ";
        data.map(student=>str+=`${student.name}, `);
        self.setState({listInfo:str});
      })
      .catch(err => console.log(err));


      fetch(
        `/api/getDate/0`
      )
        .then(response => (response.json()))
        .then(data =>this.setState({date:data})   )
        .catch(err => console.log(err));

  }

  selectHandler(event){
    this.props.update( this.state.selectedList,this.state.selectedId)
    
  }


  

  render() {
    return (
      <div>
        <div className="select-profile">
          <h2>
            <u> Select a Profile</u>
          </h2>
          <select onChange={this.previewHandler} >
            {Object.keys(this.state.ids).map(key=>{
              return(
                <option key={key} id={key} key={key}>{this.state.ids[key]}</option>
              )
            })}


            </select>
            
            <button onClick={this.selectHandler}> select </button>
            <p> {this.state.listInfo} </p>
            <p> Date of last usage: {this.state.date} </p>
          

        </div>
        <div className="add-profile">
          <h2>
            
            <u> Add a Profile</u>
          </h2>
          <form>
            <p>enter the list name with no spaces (has to be unique) </p>
            <input value={this.state.name} onChange={this.nameHandler} />
            <p> enter the students names separated by a comma. No need for spaces. ex: Sonic,Link,Peach,Tifa </p>
            <input value={this.state.value} onChange={this.changeHandler} />
            <br/>
            <button onClick={this.submitHandler}> create a list of students </button>
            <p className={this.state.exists ? "red" : "none"}> list Name already exists </p>
            <p className={this.state.added ? "green" : "none"} > list added! </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
