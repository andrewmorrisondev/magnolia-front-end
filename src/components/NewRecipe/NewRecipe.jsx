// npm modules
import { useState } from "react"

const NewRecipe = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    directions: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		props.handleAddRecipe(formData)
  }

  return (  
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input 
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange} 
        />
        <label htmlFor="ingredients-input">Ingredients</label>
        <input 
          type="text"
          name="ingredients"
          id="ingredients-input"
          value={formData.ingredients}
          placeholder="Ingredients"
          onChange={handleChange} 
        />
        <label htmlFor="directions-input">Directions</label>
        <input 
          type="text"
          name="directions"
          id="directions-input"
          value={formData.directions}
          placeholder="Directions"
          onChange={handleChange} 
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewRecipe