import React from "react";
import { Switch, Route } from "react-router-dom";
import Generator from "./Generator";
import History from "./History";
import Settings from "./Settings";
import Home from "./Home";

class Menu extends React.Component {
  constructor() {
    super();
    this.state={all:[], activeIndex:0}
    this.updateAll=this.updateAll.bind(this);
    this.updateIndex=this.updateIndex.bind(this);
  }

  componentDidMount(){

    fetch(
      `/api/all/${this.state.activeIndex}`
    )
      .then(response => (response.json()))
      .then(data =>this.setState({all:data}))
      .catch(err => console.log(err));
  }

  updateAll(all){
    this.setState(all)
  }

  updateIndex(all,i){
    this.setState({all, activeIndex:i})
  }



  render() {
    return (
      
        <Switch>
          <Route exact path="/" render={() => <Home  /> }/>
        <Route path="/generator" render={() => <Generator all={this.state.all} receiver={this.updateAll} index={this.state.activeIndex} /> } />
        <Route path="/history" render={() => <History all={this.state.all} /> }/>
        <Route path="/settings" render={() => <Settings selectedList={this.state.all} update={this.updateIndex} /> }/>
        </Switch>
      
    );
  }
}

export default Menu;
