import styles from './stylesContactList.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li className={styles.contactListItem}>
      {name}: {phone}{' '}
      <button onClick={() => onRemove(id)} className={styles.btnDelete}>
        delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  console.log('{ contacts, onRemove }', { contacts, onRemove });

  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} key={contact.id} />
      ))}
    </ul>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
ContactList.propTypes = {
  // contacts: PropTypes.arrayOf().isRequired,
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
