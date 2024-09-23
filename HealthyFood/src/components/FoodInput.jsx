import styles from './FoodInput.module.css';
import PropTypes from 'prop-types';

export default function FoodInput({ handleOnChange }) {



    return (
        <input type="text" placeholder="Enter Food Item Here" className={styles.foodInput}
            onChange={handleOnChange}></input>
    )
}



FoodInput.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
};