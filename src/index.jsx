import React from "react";
import ReactDOM from "react-dom";

import MdDocument from './js/components/MdDocument.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MdDocument></MdDocument>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app"));