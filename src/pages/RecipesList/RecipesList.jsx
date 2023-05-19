// npm modules
import { useEffect, useState } from "react"

// components
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import NewRecipe from "../../components/NewRecipe/NewRecipe"
import SearchForm from "../../components/SearchForm/SearchForm"

// services
import { index } from '../../services/recipeService'

// css
import styles from './RecipesList.module.css'

const RecipesList = (props) => {
  const [allRecipes, setAllRecipes] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchAllRecipes = async () => {
      const recipeData = await index()
      setAllRecipes(recipeData)
      setSearchResults(recipeData)
    }
    fetchAllRecipes()
  }, [])

  const handleRecipeSearch = formData => {
    const filteredRecipeResults = allRecipes.filter(recipe => (
      recipe.name.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filteredRecipeResults)
  }

  return (
    <>
      <div className={styles.sideBar}>
        <div className={styles.formContainer}>
          <h1>Add a New Recipe</h1>
          <NewRecipe handleAddRecipe={props.handleAddRecipe} />
        </div>
      </div>
      <div className={styles.search}>
        <SearchForm handleRecipeSearch={handleRecipeSearch} />
        {
          searchResults.length === props.recipes.length
          ?
          <h2>All Results</h2>
          :
            searchResults.length === 1
            ?
            <h2>1 result found</h2>
            :
            <h2>{searchResults.length} results found</h2>
        }
        <div className={styles.recipeCardContainer}>
          {searchResults.map(recipe => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  )
}

export default RecipesList