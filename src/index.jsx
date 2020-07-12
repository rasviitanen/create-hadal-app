import React from "react";
import ReactDOM from "react-dom";

import Counter from './js/components/Counter.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app"));