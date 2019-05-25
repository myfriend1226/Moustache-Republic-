import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import ClothingCard from "./components/ClothingCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cardList: [],
      listItem: {
        id: 0,
        name: "",
        img: "",
        size: "",
        number: 0,
        amount: 0
      }
    };
  }

  stateUpdate = listItem => {
    let {cardList,total}=this.state;
    let add=true;
    
      cardList.forEach((item,index)=>{
        if(listItem.size==item.size){
          item.number++;
          add=false;
        }
      });

      if(add) {
        cardList.push(listItem);
      }
    total++;
    console.log(cardList);
    this.setState({ total,
      cardList
    });
  };

  render() {
    return (
      <div className="App">
        <Header className="App-header" total={this.state.total} listItem={this.state.cardList} />
        <ClothingCard {...this.state} stateUpdate={this.stateUpdate} />
      </div>
    );
  }
}

export default App;
