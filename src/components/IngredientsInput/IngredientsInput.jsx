

const IngredientsInput = (props) => {
  return (  
    <>
      <input 
        type="text"
        name="ingredients"
        id="ingredients-input"
        value={props.formData.ingredients[props.index] || ''}
        placeholder="Pasta, Sauce, Meatballs"
        onChange={props.handleChange} 
        required
      />
    </>
  )
}

export default IngredientsInput