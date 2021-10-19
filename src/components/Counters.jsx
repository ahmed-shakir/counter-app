import React from "react";
import Counter from "./Counter";

function Counters({ counters, onIncrement, onDecrement, onReset, onDataReset, onDelete }) {
    return (
        <>
            <div className="row">
                <div className="col-1 p-0">
                    <button
                        style={{ float: "right" }}
                        className="btn btn-success m-2"
                        onClick={onReset}
                        disabled={counters.length === 0}>
                        <i className="fas fa-sync-alt" aria-hidden="true" />
                    </button>
                </div>
                <div className="col-2 p-0">
                    <button
                        className="btn btn-outline-success m-2"
                        onClick={onDataReset}
                        hidden={counters.length > 0}>
                        <i className="fas fa-recycle me-1" aria-hidden="true" /> 
                        Reset data
                    </button>
                </div>
            </div>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    data={counter}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete} />
            ))}
        </>
    );
}

export default Counters;
