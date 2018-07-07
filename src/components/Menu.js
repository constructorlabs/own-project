import React from "react";
import { Switch, Route } from "react-router-dom";
import Generator from "./Generator";
import History from "./History";
import Settings from "./Settings";
import Home from "./Home";

class Menu extends React.Component {
  constructor() {
    super();
    this.state={all:[]}
    this.updateAll=this.updateAll.bind(this);
  }

  componentDidMount(){

    fetch(
      `/api/all`
    )
      .then(response => (response.json()))
      .then(data =>this.setState({all:data}))
      .catch(err => console.log(err));
  }

  updateAll(all){
    this.setState(all)
  }



  render() {
    return (
      
        <Switch>
          <Route exact path="/" render={() => <Home  /> }/>
        <Route path="/generator" render={() => <Generator all={this.state.all} receiver={this.updateAll} /> } />
        <Route path="/history" render={() => <History all={this.state.all} /> }/>
        <Route path="/sample" render={() => <Settings  /> }/>
        </Switch>
      
    );
  }
}

export default Menu;
