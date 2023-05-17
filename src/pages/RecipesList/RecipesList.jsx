// components
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import NewRecipe from "../../components/NewRecipe/NewRecipe"

// css
import styles from './RecipesList.module.css'

const RecipesList = (props) => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.formContainer}>
          <h1>Add a New Recipe</h1>
          <NewRecipe handleAddRecipe={props.handleAddRecipe} />
        </div>
        <div className={styles.recipeCardContainer}>
          {props.recipes.map(recipe => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </main>
    </>
  )
}

export default RecipesList