import styles from './stylesContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

// const ContactListItem = ({ id, name, phone, onRemove }) => {
const ContactListItem = ({ id, name, phone, onDeleteContact }) => {
  return (
    <li className={styles.contactListItem}>
      {name}: {phone}
      <button onClick={() => onDeleteContact(id)} className={styles.btnDelete}>
        delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          {...contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

// export default ContactList;

const getFilter = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilter(items, filter),
});
const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(actions.deleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
