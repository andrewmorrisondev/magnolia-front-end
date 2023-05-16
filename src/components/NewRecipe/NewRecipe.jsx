// npm modules
import { useState } from "react"

// css
import styles from './NewRecipe.module.css'

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
    setFormData({
      name: '',
      ingredients: '',
      directions: '',
    })
  }

  return (  
    <main>
      <form onSubmit={handleSubmit} className={styles.newRecipeForm}>
        <label htmlFor="name-input">Name
          <input 
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            placeholder="Mom's Spaghetti"
            onChange={handleChange} 
            required
          />
        </label>
        <label htmlFor="ingredients-input">Ingredients
          <input 
            type="text"
            name="ingredients"
            id="ingredients-input"
            value={formData.ingredients}
            placeholder="Pasta, Sauce, Meatballs"
            onChange={handleChange} 
            required
          />
        </label>
        <label htmlFor="directions-input">Directions
          <input 
            type="text"
            name="directions"
            id="directions-input"
            value={formData.directions}
            placeholder="Boil water, add pasta, etc."
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewRecipe