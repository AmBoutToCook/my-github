import React from 'react';

const MenuItem = ({ image, title, description, price }) => (
    <div className="col-md-4">
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="text-primary fw-bold">${price}</p>
            </div>
        </div>
    </div>
);

export default MenuItem;
