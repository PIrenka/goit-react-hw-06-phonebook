import styles from './stylesContactList.module.css';

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
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
