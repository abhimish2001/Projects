import PropTypes from 'prop-types';
import Item from "./Item";

function FoodItems({ items }) {



    return (
        <ul className="list-group">
            {items.map((item) => (
                <Item key={item} foodItem={item} handleBuyButton={() => console.log(`${item} being bought`)} />
            ))}
        </ul>
    );
}

FoodItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FoodItems;
