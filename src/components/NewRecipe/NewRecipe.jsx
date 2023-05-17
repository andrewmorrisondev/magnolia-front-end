// npm modules
import { useState } from "react"

// components
import IngredientsInput from "../IngredientsInput/IngredientsInput"

// css
import styles from './NewRecipe.module.css'

const NewRecipe = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: [],
    directions: '',
  })
  const [ingredients, setIngredients] = useState([])

  const [addedInput, setAddedInput] = useState(['something'])

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

  const handleAddInput = (evt) => {
    evt.preventDefault()
    setAddedInput( [...addedInput, ''])
    setIngredients({...formData.ingredients, [evt.target.name]: evt.target.value})
  }

  return (  
    <main>
      <form onSubmit={handleSubmit} className={styles.newRecipeForm}>
        <label htmlFor="name-input">Name</label>
          <input 
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            placeholder="Mom's Spaghetti"
            onChange={handleChange} 
            required
          />
        <label htmlFor="ingredients-input">Ingredients</label>
          {addedInput.map((elem, index) => (
            <IngredientsInput key={index} formData={formData} handleChange={handleChange} />
          ))}
          {/* <input 
            type="text"
            name="ingredients"
            id="ingredients-input"
            value={formData.ingredients}
            placeholder="Pasta, Sauce, Meatballs"
            onChange={handleChange} 
            required
          /> */}
          <button type="button" onClick={handleAddInput}>Add</button>
        <label htmlFor="directions-input">Directions</label>
          <textarea 
            type="text"
            name="directions"
            id="directions-input"
            value={formData.directions}
            placeholder="Boil water, add pasta, etc."
            onChange={handleChange}
            required
          />
        <button type="submit" onSubmit={handleAddInput}>SUBMIT</button>
      </form>
    </main>
  )
}

export default NewRecipe