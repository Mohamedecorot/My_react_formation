import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Compenent {
  state = {
    client: [
      {id: 1, nom: "Mohamed"},
      {id: 2, nom: "Maman"},
      {id: 3, nom: "Lior"},
    ]
  };

  render() {
  const title = "Liste des clients";

  return (
    <div className="App">
      <h1>{title}</h1>
      <ul>
        {this.state.clients.map(client => (<li>{client.nom} <button>X</button></li>))}
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
