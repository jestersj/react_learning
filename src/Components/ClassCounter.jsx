import React from "react";
class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }
    plus() {
        this.setState({count: this.state.count +2})
    }
    minus() {
        this.setState({count: this.state.count -1})
    }
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.plus}>+2</button>
                <button onClick={this.minus}>-1</button>
            </div>
        )
    }
}
export {ClassCounter}