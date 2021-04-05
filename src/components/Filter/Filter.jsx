import styles from './stylesFilter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for search"
    />
  );
};

export default Filter;
