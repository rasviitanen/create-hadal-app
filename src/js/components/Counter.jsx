import React from "react";
import { Hadal } from "hadal";

let counter = (name) => Hadal.Crate({
    route: 'counters/' + name,

    data: {
        count: 0,
    },
})

class Counter extends React.Component {
    constructor(props) {
        super(props);

        // Define a counter component that will listen
        // for changes on the route `counters/my-counter`
        this.counter = counter('my-counter');
        // Create a listerner that changes the state
        // of the react-component if the Hadal crate is modified.
        this.counter.onChange = function(oldData, newData) {
            this.setState({ ...this.state, count: newData.count });
        }.bind(this)

        this.state = {
            count: this.counter.data.count
        };

        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.counter.data.count += 1;
    };

    render() {
      return (
        <div>
            <strong>Count is: { this.state.count }</strong>
            <button onClick={ this.incrementCounter }>Inrement</button>
        </div>
      );
    }
};

export default Counter;