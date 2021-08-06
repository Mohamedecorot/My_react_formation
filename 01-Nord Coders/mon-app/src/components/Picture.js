import React, { Component, useState, useEffect } from 'react'

export default function Picture() {

    // const [myTimer, setMyTimer] = useState(null);

    const images = [
        'avatar.png',
        'avatar2.png',
        'avatar3.png',
        'avatar4.png'
    ];

    function ImagesComponent() {
        return images.map((name) => {
            return (
                <img className="w-40 mx-auto" src={name} alt="" />
            )
        })
    }

    useEffect(() => {
        const myTimer = setInterval(() => {
            console.log('timer appelé');
        }, 1000);
        return () => clearInterval(myTimer);
    }, []);
    return (
        <div className="flex items-center justify-between">
            <ImagesComponent />
        </div>
    )
}

// export default class Picture extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {timer: null};
//     }

//     componentDidMount() {
//         this.setState({
//             timer: setInterval(() => {
//                 console.log('timer appelé');
//             }, 1000)});
//     }

//     componentWillUnmount() {
//         clearInterval(this.state.timer);
//         console.log('picture détruite');
//     }

//     render() {
//         return (
//             <img className="w-40 mx-auto" src="avatar.png" alt="" />
//         )
//     }
//}
