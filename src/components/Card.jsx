import React from "react";

export const Card = ({ name, url }) => {
    return (
        <div href="" className="card">
        <a href={url}>
            <div className="card-details">
                <img src={url} alt="" />
            </div>
            <button className="card-button">{name}</button>
            </a>
        </div>
    );
};
