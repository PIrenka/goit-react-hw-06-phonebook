import styles from './stylesFilter.module.css';

import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      // onChange={({ target }) => onChange(target.value)}
      onChange={onChange}
      placeholder="Enter name for search"
    />
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
  // value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContacts(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default Filter;
