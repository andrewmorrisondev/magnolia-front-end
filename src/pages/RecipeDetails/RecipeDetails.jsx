// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// services
import * as recipeService from '../../services/recipeService'

import styles from './RecipeDetails.module.css'

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
    <main className={styles.container}>
      <article>
        <header>
          <h1>{recipe.name}</h1>
          <h3>By {recipe.creator.name}</h3>
          <span>
            {recipe.creator._id === props.user.profile &&
              <>
                <Link to={`/recipes/${recipeId}/edit`} state={recipe}>
                  <button>
                    Edit
                  </button>
                </Link>
                <button onClick={() => props.handleDeleteRecipe(recipeId)}>
                  Delete
                </button>
              </>
            }
          </span>
        </header>
        <h2>Ingredients</h2>
        {recipe.ingredients.map((ingredient, index) => {
          return(
            <div key={index}>
              <p> <input key={index} type="checkbox"></input> {ingredient}</p>
            </div>
          )
        })}
        <h2>Directions</h2>
        <p>{recipe.directions}</p>
      </article>
    </main>
  )
}

export default RecipeDetails