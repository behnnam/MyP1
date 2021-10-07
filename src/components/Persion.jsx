import React from "react";
import  './Persion.css'

class Persion extends React.Component {
    state = {
        persions: [
            { name: "behnam", age: 25 },
            { name: "behnam", age: 25 },
            { name: "behnam", age: 25 }

        ],
        showPersion:false
    };
    FnShowPersion =() => {
this.setState({showPersion :!this.setState.showPersion})
    };
    render() {
        const { persions } = this.state;
        const styles = {
            textAlign: "centeer"
        };
        return (<div style={styles}>
            <h1 className="bg">my text text{persions.length}</h1>
            <button persions>change show</button>
        </div>)
    }
}
export default Persion;