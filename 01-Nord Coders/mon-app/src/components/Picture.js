import React, { Component, useState, useEffect } from 'react'

export default function Picture() {

    // const [myTimer, setMyTimer] = useState(null);

    const [images, setImages] = useState([
        'avatar.png',
        'avatar2.png',
        'avatar3.png',
        'avatar4.png'
    ]);

    const [image, setImage] = useState(null);

    function ImagesComponent() {
        return images.map((name) => {
            return (
                <img className="w-40 mx-auto" src={name} alt="" />
            )
        })
    }

    function handleImageName(event) {
        setImage(event.target.value);
    }

    function addImageName() {
        console.log('coucou')
        let newImages = [image, ...images];
        setImages(newImages);
    }

    // function addImageName() {
    //     let newImages = [... images. image];
    //     setImage(newImages);
    // }

    useEffect(() => {
        const myTimer = setInterval(() => {
            console.log('timer appelé');
        }, 1000);
        return () => clearInterval(myTimer);
    }, []);
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <ImagesComponent />
            </div>
            <div className="mt-5">
                <input type="text" className="border border-gray-600 shadow rounded p-3 mr-2 outline-none" onChange={handleImageName}/>
                <button type="submit" className="bg-purple-400 text-white rounded p-3" onClick={addImageName}>Inscrire le nom d'une image</button>
            </div>
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
