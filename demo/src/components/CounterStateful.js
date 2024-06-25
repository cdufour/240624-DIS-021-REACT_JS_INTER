import React from 'react';

class CounterStateful extends React.Component {

    //state = { count: 0 }

    constructor({initialValue}) {
        super() // à utiliser systématiquement dès que state est utiliser dans le composant
        console.log('*** constructor time ***')
        //this.setState({ count: initialValue })
        this.state = { count: initialValue }
    }

    onClick() {
        if (this.state.count >= 20) {
            this.setState({ count: 0});
        } else {
            this.setState({ count: this.state.count + 1});
        }
    }
    
    render() {
        console.log('*** render time ***')
        return (
            <div>
                <button onClick={ () => this.onClick() }>Increment</button>
                <span>{this.state.count}</span>
            </div>
        )
    }
}

export default CounterStateful;