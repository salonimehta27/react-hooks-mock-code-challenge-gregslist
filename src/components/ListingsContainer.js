import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ list, setList, onSearch }) {
  const [locationSort, setLocationSort] = useState(false)

  function handleDeleteFunction(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
    setList(() => list.filter(i => i.id !== id))
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(resp => resp.json())
      .then(data => setList(data))
  }, [setList])

  return (
    <main>
      <button onClick={() => setLocationSort(!locationSort)}>Sort Location alphabetically</button>
      <ul className="cards">
        {list.filter(newList => newList.description.toLowerCase().includes(onSearch.toLowerCase()))
          .sort((a, b) => locationSort ? (a.location.toUpperCase() > b.location.toUpperCase()) ? 1 : ((b.location.toUpperCase() > a.location.toUpperCase()) ? -1 : 0) : null)
          .map(elem => <ListingCard key={elem.id}
            description={elem.description}
            image={elem.image}
            location={elem.location}
            onDelete={handleDeleteFunction}
            id={elem.id}></ListingCard>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
