import { Component } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import styles from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
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

  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={styles.App}>
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUnique}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        />
      </div>
    );
  }
}
