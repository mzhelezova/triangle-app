import React from 'react';

import './App.css';
import Input from '../Input/Input';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Message from '../Message/Message';
import { checkFigureType } from '../Input/InputChecker';

const numberOfSides = 3;

class App extends React.Component {
  constructor(props) {
    super(props);

    const sides = new Array(numberOfSides);
    sides.fill('');

    this.state = {
      sides: sides,
      error: '',
      result: ''
    };

    this.onCheckClick = this.onCheckClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onCheckClick() {

    try {
      const result = checkFigureType(this.state.sides);

      this.setState({
        error: '',
        result: result.triangleType
      })
    } catch(err) {
      this.setState({
        error: err.message,
        result: ''
      })
    }
  }

  onInputChange() {
    const inputs = [...document.querySelectorAll('.side')];
    const sides = inputs.map(input => parseFloat(input.value));

    this.setState({
      sides: sides
    });
  }

  render () {
    const showMessage = this.state.error || this.state.result || false;
    return (
      <div>
        <div className="container">
          <Header />
          <section className="input">
            <Input sides={this.state.sides} onButtonClick={this.onCheckClick} onInputChange={this.onInputChange}/>
          </section>
          {
            showMessage ?
            <section render="" className="output">
              <Message result={this.state.result} error={this.state.error} />
            </section> : ''
          }

          <div className="push" />
        </div>
        <Footer />
      </div>
    );
  };
}

export default App;
