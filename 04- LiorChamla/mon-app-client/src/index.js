import React from 'react';
import ReactDOM from 'react-dom';
import Client from './Client';
import ClientForm from './ClientForm';

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
    const clients = [...this.state.clients];
    const index = clients.findIndex(client => client.id === id);

    clients.splice(index, 1);
    this.setState({clients});
  }

  handleAdd = client => {
    const clients = [...this.state.clients];
    // const clients = this.state.clients.slice();

    clients.push(client);
    this.setState({clients});
  }

  render() {
  const title = "Liste des clients";

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {this.state.clients.map(client => (
          <Client details={client} onDelete={this.handleDelete}/>
        ))}
      </ul>
      <ClientForm onClientAdd={this.handleAdd}/>
    </div>
  );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
