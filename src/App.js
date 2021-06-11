import React, { Component } from 'react';
import Feadback from './Components/feadback';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  };


  render() {

    return (
      <section>
        <Feadback />
      </section>
    )
  };
};

export default App;
