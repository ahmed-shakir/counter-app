import React, { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-1 p-0">
                    <span style={{ fontSize: 18, float: "right", minWidth: 47 }} className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col-3">
                    <button
                        className={this.getButtonClasses("increment")}
                        onClick={() => this.props.onIncrement(this.props.data)}>
                        <i className="fas fa-plus-square" aria-hidden="true" />
                    </button>
                    <button
                        className={this.getButtonClasses("decrement")}
                        onClick={() => this.props.onDecrement(this.props.data)}
                        disabled={this.props.data.value === 0}>
                        <i className="fas fa-minus-square" aria-hidden="true" />
                    </button>
                    <button
                        className={this.getButtonClasses("delete")}
                        onClick={() => this.props.onDelete(this.props.data.id)}>
                        <i className="fas fa-trash-alt" aria-hidden="true" />
                    </button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        return "badge m-2 bg-".concat(
            this.props.data.value === 0 ? "warning text-dark" : "primary"
        );
    }

    getButtonClasses(type) {
        return "btn btn-sm m-2 btn-".concat(
            type === "delete" ? "danger" : "secondary"
        );
    }

    formatCount() {
        const { value: count } = this.props.data;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
