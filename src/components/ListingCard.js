import React, { useState } from "react";

function ListingCard({ description, location, image, onDelete, id }) {
  const [fav, setFav] = useState(false)


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={() => setFav(!fav)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFav(!fav)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
