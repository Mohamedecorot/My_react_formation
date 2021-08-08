import React, { Component, useState, useEffect, useRef } from 'react'
import Picture from './Picture';
// import Picture from '/Picture'

export default function Pictures() {

    // const [myTimer, setMyTimer] = useState(null);

    const [images, setImages] = useState([
        'avatar.png',
        'avatar2.png',
        'avatar3.png',
        'avatar4.png'
    ]);

    const [image, setImage] = useState(null);

    function ImagesComponent() {
        return images.map((name, index) => <Picture
        imageName = {name}
        index = {index}
        key = {index}
        handleRemove = {handleRemoveImage}
        />)
    }

    function handleRemoveImage(index) {
        setImages(images.filter((image, i) => i !== index));
    }

    function handleImageName(event) {
        setImage(event.target.value);
    }

    function addImageName() {
        let newImages = [image, ...images];
        setImages(newImages);
    }

    // useEffect(() => {
    //     const myTimer = setInterval(() => {
    //         console.log('timer appelé');
    //     }, 1000);
    //     return () => clearInterval(myTimer);
    // }, []);

    // const inputToFocus = useRef(null);

    // useEffect(() => {
    //     inputToFocus.current.focus();
    // });

    const fruitRef = useRef(null);
    const [fruitState, setFruitState] = useState(null);

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <ImagesComponent />
            </div>
            <div className="mt-5">
                <input type="text" className="border border-gray-600 shadow rounded p-3 mr-2 outline-none" onChange={handleImageName}/>
                <button type="submit" className="bg-purple-400 text-white rounded p-3" onClick={addImageName}>Inscrire le nom d'une image</button>
            </div>
            <button onClick={() => {
                setFruitState('orange');
                fruitRef.current = 'pomme';
            }}>Cliquez ici pour générer un fruit</button>
            <div>{fruitState}</div>
            <div>{fruitRef.current}</div>
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
