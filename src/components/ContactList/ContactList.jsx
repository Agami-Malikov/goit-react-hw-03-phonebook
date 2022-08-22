import PropTypes from 'prop-types';
import s from './contactList.module.css'

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      {name}: {number}
      <button className={s.btn} type="button" onClick={() => removeContact(id)}>
        remove
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
