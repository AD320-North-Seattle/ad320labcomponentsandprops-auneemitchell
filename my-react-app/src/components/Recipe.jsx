function Recipe(props) {
  return (
    <div>
      <h2>{props.recipe.name}</h2>
      <h3>Ingredients</h3>
      <ul>
        {/* Display the list of ingredients */}
        {props.recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ul>
        {/* Display the list of instructions */}
        {props.recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
      {/* Display optional glaze data if it exists */}
      {props.recipe.optionalGlaze && (
        <>
          <h3>{props.recipe.optionalGlaze.name}</h3>
          <h4>Ingredients</h4>
          <ul>
            {props.recipe.optionalGlaze.ingredients.map(
              (glazeIngredient, index) => (
                <li key={index}>{glazeIngredient}</li>
              )
            )}
          </ul>
          <h4>Instructions</h4>
          <ul>
            {props.recipe.optionalGlaze.instructions.map(
              (glazeInstruction, index) => (
                <li key={index}>{glazeInstruction}</li>
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default Recipe;
