import PropTypes from 'prop-types';

function ToDoItem({ todoDate, todoName }) {

    return (
        <div className="container ">
            <div className="row kg-row">
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}

                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-button ">Delete</button>
                </div>
            </div>
        </div>
    );
}

ToDoItem.propTypes = {
    todoDate: PropTypes.string.isRequired,
    todoName: PropTypes.string.isRequired,
};

export default ToDoItem;