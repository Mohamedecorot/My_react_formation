import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  state = {
    clients: [
      {id: 1, nom: "Mohamed"},
      {id: 2, nom: "Maman"},
      {id: 3, nom: "Lior"},
    ]
  };

  // handleClick = () => {
  //   const clients = this.state.clients.slice();
  //   clients.push({id: 4, nom: "Papa"});

  //   this.setState({clients: clients});
  // }

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => client.id === id);

    clients.splice(index, 1);
    this.setState({clients: clients});
  }
  render() {
  const title = "Liste des clients";

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {this.state.clients.map(client => (<li key={client.id}>{client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button></li>))}
      </ul>
      <form>
        <input type="text" placeholder="Ajouter un client"/>
        <button>Confirmer</button>
      </form>
    </div>
  );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
