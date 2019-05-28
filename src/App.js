import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import ClothingCard from "./components/ClothingCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cardList: []
    };
  }

  handleAddItem = listItem => {
    let { cardList, total } = this.state;
    let add = true;
     //Check Item existed in the card list 
    cardList.forEach((item, index) => {
      if (listItem.size === item.size) {
        item.number++;
        add = false;
      }
    });
    //Add item in the card list
    if (add) {
      cardList.push(listItem);
    }
    // increase number of item
    total++;

    this.setState({ total, cardList });
  };

  render() {
    return (
      <div className="App">
        <Header
          className="App-header"
          total={this.state.total}
          listItem={this.state.cardList}
        />
        <ClothingCard {...this.state} stateUpdate={this.handleAddItem} />
      </div>
    );
  }
}

export default App;
