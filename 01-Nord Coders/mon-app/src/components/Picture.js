import React, { Component } from 'react'

export default class Picture extends Component {

    constructor(props) {
        super(props);
        this.state = {timer: null};
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                console.log('timer appelé');
            }, 1000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
        console.log('picture détruite');
    }

    render() {
        return (
            <img className="w-40 mx-auto" src="avatar.png" alt="" />
        )
    }
}
