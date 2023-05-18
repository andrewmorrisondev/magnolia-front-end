const IngredientsInput = (props) => {
  const ingredientsPlaceholders = ['Flour', 'Egg', 'Tomatoes', 
                                  'Tomato Paste', 'Meatballs', 
                                  'Onions', 'Garlic', 'Salt', 
                                  'Pepper', 'Oregano', 'do u rly need more?', 'fine...'
                                ]
  return (  
    <>
      <input 
        type="text"
        name="ingredients"
        id="ingredients-input"
        value={props.formData.ingredients[props.index]}
        placeholder={ingredientsPlaceholders[props.index % ingredientsPlaceholders.length]}
        onChange={props.handleIngredientChange} 
      />
    </>
  )
}

export default IngredientsInput