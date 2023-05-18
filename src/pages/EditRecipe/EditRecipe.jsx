// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

// components
import IngredientsInput from "../../components/IngredientsInput/IngredientsInput"

// css
import styles from './EditRecipe.module.css'

const EditRecipe = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const [addedInput, setAddedInput] = useState([...formData.ingredients])
  const [ingredients, setIngredients] = useState([])

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...formData.ingredients]
    updatedIngredients[index] = value
    setFormData({ ...formData, ingredients: updatedIngredients })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateRecipe(formData)
  }

  const handleAddInput = (evt) => {
    evt.preventDefault()
    setAddedInput( [...addedInput, ''])
    setIngredients({...formData.ingredients, [evt.target.name]: evt.target.value})
  }

  const handleDeleteInput = (index) => {
    setAddedInput(addedInput.filter((elem, idx) => {
      return index !== idx
    }))
    const filteredIngredients = formData.ingredients.filter((elem, idx) => {
      return index !== idx
    })
    setIngredients(filteredIngredients)
    setFormData({ ...formData, ingredients: filteredIngredients })
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
        {addedInput.map((elem, index) => (
            <div key={index}>
            <IngredientsInput 
              key={index} 
              index={index} 
              formData={formData}
              handleChange={(evt) => handleIngredientChange(index, evt.target.value)}
            />
              <button type="button" onClick={() => handleDeleteInput(index)}>X</button>
            </div>
          ))}
          <button type="button" onClick={handleAddInput}>Add</button>
        <label htmlFor="directions-input">Directions</label>
        <textarea 
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