import React from "react";
import './Restaurant.css'

const Restaurant = ({img, name, caption, location, website}) => {
    return (
        <div className="restaurant">
            <img src={img} className="restaurant-image"/>
            <div className="restaurant-info">
                <h5 className="restaurant-title">
                    {name}
                </h5>
                <p className="restaurant-caption">
                    {caption}
                </p>
                <p className="restaurant-location">
                    {location}
                </p>
                <a href={website} target="_blank" rel="noopener noreferrer" className="restaurant-button">Menu</a>
            </div>
        </div>
        )
}

export default Restaurant;