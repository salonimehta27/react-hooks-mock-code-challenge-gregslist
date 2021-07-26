import { useState } from "react"


function Form({ onAddNewItem }) {
    const [formData, setFormData] = useState({
        description: "",
        location: "",
        image: ""
    })

    function handleAddNewListing(e) {
        e.preventDefault();
        fetch(`http://localhost:6001/listings`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                description: formData.description,
                image: formData.image,
                location: formData.location

            })
        }).then(resp => resp.json)
            .then(data => onAddNewItem(data))
    }

    function setChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (

        <div>
            <form onSubmit={handleAddNewListing}>
                <input type="text" value={formData.description} name="description" onChange={setChange} placeholder="describe the product"></input>
                <input type="text" value={formData.location} name="location" onChange={setChange} placeholder="enter the location"></input>
                <input type="url" value={formData.image} name="image" onChange={setChange} placeholder="enter the image url"></input>
                <button>submit new listing</button>
            </form>
        </div>
    )
}

export default Form
