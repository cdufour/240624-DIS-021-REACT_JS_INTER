import React from 'react';

// nombre de couleurs max en RVB
const MAXCOLORS = 16777215;

class Rainbow extends React.Component {

    //defaultColor = 'red';
    intervalId = null;

    constructor({defaultColor, speed}) {
        super();
        //this.defaultColor = defaultColor;
        this.state = { backgroundColor: defaultColor, width: 100, height: 100 };
        this.intervalId = setInterval(() => { this.change() }, speed);
    }

    componentDidMount() {
        console.log('lifecycle method => componentDidMount');
    }

    componentWillUnmount() {
        console.log('lifecycle method => componentWillUnmount');

        // suppression de l'intervalle
        clearInterval(this.intervalId);
    }

    change() {
        const backgroundColor = '#' + Math.floor(Math.random() * MAXCOLORS).toString(16);
        this.setState({backgroundColor, width: this.state.width + 10});
        console.log('interval executed...');
    }

    render() {
        console.log('lifecycle method => render');
        return (
            <div style={
                { 
                    backgroundColor: this.state.backgroundColor, 
                    width: this.state.width,
                    height: this.state.height
                }
            }></div>
        )
    }
}

export default Rainbow;