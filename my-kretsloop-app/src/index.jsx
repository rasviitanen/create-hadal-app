import React from "react";
import ReactDOM from "react-dom";

import Counter from './js/components/Counter.jsx'
import { TodoTracker } from './js/components/TodoTracker.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoTracker></TodoTracker>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app"));