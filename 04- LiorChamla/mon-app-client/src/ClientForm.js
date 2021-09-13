import React, {Component} from "react";

class ClientForm extends Component {
    state = {
        nouveauClient: ''
      };

    handleChange = (event) => {
        this.setState({ nouveauClient: event.currentTarget.value})
    }

    handleSubmit = (event) => {
      event.preventDefault();
  
      const id = new Date().getTime();
      const nom = this.state.nouveauClient;

      this.props.onClientAdd({id, nom});
      this.setState({nouveauClient: ''});
    }

    render() {        
        return <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Ajouter un client" value={this.state.nouveauClient} onChange={this.handleChange}/>
        <button>Confirmer</button>
      </form>
    }
}

export default ClientForm;