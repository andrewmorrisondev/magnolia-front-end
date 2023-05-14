// npm modules
import { Link } from "react-router-dom"

const RecipeCard = ({ recipe }) => {
  return (  
    <Link to={`/recipes/${recipe._id}`}>
      <article>
        <header>
          <span>
            <h1>{recipe.name}</h1>
          </span>
        </header>
        {recipe.creator.name}
      </article>
    </Link>
  )
}

export default RecipeCard;