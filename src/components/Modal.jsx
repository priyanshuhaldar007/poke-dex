import PropTypes from "prop-types"; // Import PropTypes

export const Modal = ({ id }) => {
    return (
        <div className="absolute top-0 left-0 h-full w-full bg-indigo-500 z-20 flex justify-center items-center">
            <p>Modal {id}</p>
        </div>
    );
};

// Add prop validation
Modal.propTypes = {
    id: PropTypes.number.isRequired,
};
