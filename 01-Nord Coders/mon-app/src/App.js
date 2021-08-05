import React, { useState, useEffect  } from 'react';
import Picture from './components/Picture';

function App(){
    //hook d'état
    const [title, setTitle] = useState('coucou les amis');
    const [show, setShow] = useState(false);

    // Hook d’effet
    useEffect(() => console.log('composant app monté'), []);
    function handleClick() {
        setShow(!show);
    }

    return (
        <div>
            <h1 className="text-4xl text-purple-700 my-5">{ title }</h1>
            <button className="bg-purple-900 text-white rounded py-2 px-3"
                    onClick={ handleClick }>
                click
            </button>

            { show ? <Picture /> : null }
        </div>
    );
}

// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { show: false, title: 'coucou les amis' };
//     }

//     componentDidMount() {
//         //this.setState({title: 'le composant a bien été monté'});
//     }

//     componentDidUpdate() {
//         console.log('composant mis à jour');
//     }
//     render () {
//         return <div>
//             <h1 className="text-4xl text-purple-700 my-5">{ this.state.title }</h1>
//             <button className="bg-purple-900 text-white rounded py-2 px-3"
//                     onClick={() => this.setState( {show: !this.state.show}) }>
//                 click
//             </button>

//             {
//                 this.state.show ?
//                 <Picture />
//                 : null
//             }

//         </div>;
//     }
// }
export default App;