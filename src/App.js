import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonStyle: 'onMouseOut',
      clicked: 0
    }
  }
  render() {
    return (
      <div>
        <button className={this.state.buttonStyle}
          onClick={ () => {this.setState( this.state.clicked === 0 ?
              { buttonStyle: 'onClick', clicked: 1 }
              :
              { buttonStyle: 'onMouseOut', clicked: 0 }
              )}
          }
        >
          Button
        </button>
      </div>
    );
  };
}

export default App;