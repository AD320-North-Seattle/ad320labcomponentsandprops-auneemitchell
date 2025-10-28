import Recipe from "./Recipe.jsx";

function RecipeContainer(props) {
  return (
    <div className="recipeContainer">
      {props.recipes.map((recipe) => (
        <Recipe key={recipe.name} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeContainer;
