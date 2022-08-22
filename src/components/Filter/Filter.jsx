import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find Contacts by Name</label>
      <input type="text" name="filter" onChange={onChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
