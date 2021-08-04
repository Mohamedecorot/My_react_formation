import React from 'react';
// function App({title}){
//     return <h1 className="text-center text-blue-500 text-4xl">{title}</h1>;
// }

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: 'coucou les amis!' };
    }
    render () {
        return <h1 className="text-center text-blue-500 text-4xl">{this.state.title}</h1>;
    }
}
export default App;