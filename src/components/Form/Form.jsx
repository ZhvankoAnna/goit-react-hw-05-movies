import useForm from 'shared/hooks/useForm';
import {PropTypes} from 'prop-types'
import { ImSearch } from 'react-icons/im';
import styles from './form.module.scss';

const Form = ({ onSubmit }) => {
  const { state, handleInput, handleSubmit } = useForm(
    { search: '' },
    onSubmit
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.field}
        onChange={handleInput}
        type="text"
        value={state.search}
        id="search"
        required
      />
      <button className={styles.btn} type="submit">
        <ImSearch />
      </button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}