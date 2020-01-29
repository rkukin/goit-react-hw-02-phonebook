import React, {Component} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { uuid } from 'uuidv4';

export default class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, contacts } = this.state;

    if (name === "" || number === "") {
      alert("Please fill all fields!")
    }
    else if (contacts.find(element =>(element.name.toLowerCase() === name.toLowerCase()))) {
      alert("This contact already added!")
    }
    else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, {id: uuid(), name: name, number: number}]
      }));
      this.setState({name: "", number: ""});
    }
  };

  handleDelete = ( contactId) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== contactId);

    this.setState({contacts: newContacts});
  };

  renderItems = (contacts) => {
    return contacts.map(contact => (
        <li key={contact.id}><p>{contact.name}: {contact.number}</p> <button onClick={() => this.handleDelete(contact.id)}>Delete</button></li>
    ));
  };

  renderContactsList (){
    const { contacts, filter } = this.state;
    const filteredResults = contacts.filter(contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 );


    if (filter === "") {
      return this.renderItems(contacts);
    }

    if (filteredResults.length) {
      return this.renderItems(filteredResults);
    }

    return null;
  }


  render(){
    const { name, number, filter} = this.state;

    return (
      <>
      <h2>PhoneBook</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Name</h3>
            <input type="text" value={name} onChange={this.handleChange} name="name" autoComplete='off'/>

          <h3>Number</h3>
            <input type="tel" value={number} onChange={this.handleChange} name="number" autoComplete='off'/>

          <div>
            <button type="submit">Add contact</button>
          </div>
        </form>
          <h3>Contacts</h3>
          <input type="text" value={filter} onChange={this.handleChange} name="filter" autoComplete='off'/>
          <ul>

            {this.renderContactsList()}

          </ul>

      </>
    )
  }


}

App.propTypes = {

};