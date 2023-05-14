const RecipesList = (props) => {
  return (
    <main>
      {props.recipes.map(recipe => (
        <p key={recipe._id}>
          {recipe.name}
        </p>
      ))}
    </main>
  )
}

export default RecipesList