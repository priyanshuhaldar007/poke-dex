import PropTypes from 'prop-types'; // Import PropTypes

export const Card = ({ name, url }) => {
    return (
        <div href="" className="card">
            <a href={url}>
                <div className="card-details">
                    <img
                        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
                        alt=""
                    />
                </div>
                <button className="card-button">{name}</button>
            </a>
        </div>
    );
};

// Add prop validation
Card.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
