// import { Component } from 'react';

import ContactForm from './ContactForm'; ////////
import ContactList from './ContactList';
import Filter from './Filter';

import { connect } from 'react-redux';
import store from '../redux/store';
import * as actions from '../redux/actions';

import styles from './App.module.css';

// const App = ({ items, filter, onAddContact }) => {
const App = () => {
  return (
    <div className={styles.App}>
      <h1>Phonebook</h1>
      <ContactForm
      // onAdd={this.handleAddContact}
      // onCheckUnique={this.handleCheckUnique}
      />
      <h2>Contacts</h2>
      <Filter
      // filter={filter} onChange={this.handleFilterChange}
      />
      <ContactList
      // contacts={visibleContacts}
      // onRemove={this.handleRemoveContact}
      />
    </div>
    // );
    // }
    // }
  );
};

// const mapStateToProps = (state, props) => {
//   return { filter: state.filter };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     // onAddContact:({ name, number })=>dispatch(actions.addContact({ name, number })),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

export default connect()(App);
