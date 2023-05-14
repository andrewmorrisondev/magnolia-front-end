// npm modules
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as recipeService from '../../services/recipeService'

const RecipeDetails = (props) => {
const { recipeId } = useParams()
const [recipe, setRecipe] = useState(null)

useEffect(() => {
  const fetchRecipe = async () => {
    const data = await recipeService.show(recipeId)
    setRecipe(data)
  }
  fetchRecipe()
}, [recipeId])

if (!recipe) return <h1>Loading... </h1>

  return (  
    <main>
      <h1>{recipe.name}</h1>
      <h3>By {recipe.creator.name}</h3>
      <h2>{recipe.ingredients}</h2>
      <h3>{recipe.directions}</h3>
    </main>
  )
}

export default RecipeDetails