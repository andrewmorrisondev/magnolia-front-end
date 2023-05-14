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

  return (  
    <main>
      Details
    </main>
  )
}

export default RecipeDetails