import React, { Component } from 'react';

import Section from './Section';
import Label from './Label';

import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // contacts: [],
    name: '',
    number: '',
  };

  /*
   * Отвечает за обновление состояния
   */
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  /*
   * Вызывается при отправке формы
   */
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit(this.state.name);
  };

  render() {
    const { name } = this.state;
    const { number } = this.state;
    const { contacts } = this.state;
    // console.log({ contacts });

    return (
      <div className="App">
        <Section title="Phonebook">
          <form className="Form" onSubmit={this.handleSubmit}>
            <Label title="Name">
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={name}
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
              />
            </Label>
            <Label title="Number">
              <input
                type="tel"
                name="number"
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                value={number}
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
              />
            </Label>
            <button type="submit">Add contact {name}</button>
          </form>
        </Section>
        <Section title="Contacts">
          <ul>
            <li>first contact</li>
            <li>second contact</li>
            <li>third contact</li>
            {/* <li>{contacts}</li> */}
          </ul>
        </Section>
      </div>
      //================================================
      //================================================
      //             <div>
      //   <h1>Phonebook</h1>
      //   <ContactForm ... />

      //   <h2>Contacts</h2>
      //   <Filter ... />
      //   <ContactList ... />
      // </div>
    );
  }
}

export default App;
