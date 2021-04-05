import { Component } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

export default class App extends Component {
  state = {
    contacts: [],
  };
  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));

  handleCheckUnique = name => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exists');
    return !isExistContact;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUnique}
        />
        <ContactList contacts={contacts} onRemove={this.handleRemoveContact} />
      </>
    );
  }
}
