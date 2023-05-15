// components
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import NewRecipe from "../../components/NewRecipe/NewRecipe"

// css
import styles from './RecipesList.module.css'

const RecipesList = (props) => {
  return (
    <main className={styles.container}>
      <NewRecipe handleAddRecipe={props.handleAddRecipe} />
      {props.recipes.map(recipe => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </main>
  )
}

export default RecipesList