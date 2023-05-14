// components
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import NewRecipe from "../../components/NewRecipe/NewRecipe"

const RecipesList = (props) => {
  return (
    <main>
      <NewRecipe handleAddRecipe={props.handleAddRecipe} />
      {props.recipes.map(recipe => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </main>
  )
}

export default RecipesList