import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        const { onReset, counters, onDelete, onIncrement, onAdd } = this.props;
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                <button className="btn btn-success btn-sm m-2" onClick={onAdd}>
                    Add
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
