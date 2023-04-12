import {Component} from "react";
import './App.css';
import ParentComp from "./ParentComp/Parent";


class App extends Component{
  render(){
      return (
        <div className="App">
          <ParentComp />
        </div>
      );
  }
}                                                                                                                                                                               
export default App;
