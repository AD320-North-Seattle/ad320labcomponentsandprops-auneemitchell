import "./App.css";
import { recipes } from "./data/data.js";
import RecipeContainer from "./components/RecipeContainer.jsx";

function App() {
  return (
    <>
      <h1>Recipes</h1>
      <div className="App">
        <RecipeContainer recipes={recipes} />
      </div>
    </>
  );
}

export default App;
