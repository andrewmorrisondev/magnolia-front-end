// npm modules
import { Link } from "react-router-dom"

// css
import styles from './RecipeCard.module.css'

const RecipeCard = ({ recipe }) => {
  return (  
    <Link to={`/recipes/${recipe._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{recipe.name}</h1>
          </span>
        </header>
        <p>Posted by {recipe.creator.name}</p>
      </article>
    </Link>
  )
}

export default RecipeCard;