import React from 'react';
// function App({title}){
//     return <h1 className="text-center text-blue-500 text-4xl">{title}</h1>;
// }

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    render () {
        return <div>
            <button className="bg-purple-900 text-white rounded py-2 px-3"
                    onClick={() => this.setState( {show: !this.state.show}) }>
                click
            </button>

            {
                this.state.show ?
                <img className="w-40 mx-auto" src="avatar.png" alt="" />
                : null
            }

        </div>;
    }
}
export default App;