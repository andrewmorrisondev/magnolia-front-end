// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

const EditRecipe = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateRecipe(formData)
  }

  return (  
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Edit Recipe</h1>
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

export default EditRecipe