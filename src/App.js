import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Output from './Output.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    };
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <input
            onChange={(e) => {

              console.log('you are typing a thing');
              console.log(e.target.value);

              this.setState({
                inputText: e.target.value
              });

            }}
          />



          <Output
            text={this.state.inputText}
          />
        </header>
      </div>
    );
  }
}


export default App;
