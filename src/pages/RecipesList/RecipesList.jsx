// components
import RecipeCard from "../../components/RecipeCard/RecipeCard"

const RecipesList = (props) => {
  return (
    <main>
      {props.recipes.map(recipe => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </main>
  )
}

export default RecipesList