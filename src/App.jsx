import React, { Component } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import { getData, storeData, deleteData } from "./services/localStorageService"

class App extends Component {
    static LOCAL_STORAGE_KEY = "counters";
    state = {
        counters: []
    };

    componentDidMount() {
        const counters = this.loadData();
        this.setState({ counters });
    }

    getDefaultCounters() {
        return [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 1 },
            { id: 4, value: 6 },
            { id: 5, value: 0 },
        ];
    }

    loadData() {
        if (!getData(App.LOCAL_STORAGE_KEY)) {
            this.saveData(this.getDefaultCounters());
        }
        return getData(App.LOCAL_STORAGE_KEY);
    }

    saveData(data) {
        storeData(App.LOCAL_STORAGE_KEY, data);
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.saveData(counters);
        this.setState({ counters });
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.saveData(counters);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        });
        this.saveData(counters);
        this.setState({ counters });
    };

    handleDataReset = () => {
        deleteData(App.LOCAL_STORAGE_KEY);
        window.location.reload();
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((counter) => counter.id !== counterId);
        this.saveData(counters);
        this.setState({ counters });
    };

    render() {
        return (
            <>
                <Navbar totalCounters={this.state.counters.filter(counter => counter.value > 0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onReset={this.handleReset}
                        onDataReset={this.handleDataReset}
                        onDelete={this.handleDelete} />
                </main>
            </>
        );
    }
}

export default App;
