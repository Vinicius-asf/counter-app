// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDelete = (counterId) => {
        // console.log(counterId)
        let counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleAdd = () => {
        let counters = this.state.counters.slice();
        const lastID = this.getCounterId();
        counters.push({
            id: lastID + 1,
            value: 0,
        });
        this.setState({ counters });
    };

    getCounterId = () => {
        let counterId = this.state.counters.length;
        if (counterId > 0) {
            counterId = this.state.counters.reduce(
                (max, c) => (c.id > max ? c.id : max),
                this.state.counters[0].id
            );
        }
        return counterId;
    };

    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onAdd={this.handleAdd}
                        counters={this.state.counters}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
