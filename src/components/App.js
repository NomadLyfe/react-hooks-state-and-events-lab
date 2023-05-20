import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLight, setIsLight] = useState(true);
  function handleButtonClick() {
    setIsLight((isLight) => !isLight)
  }
  const appClass = isLight ? "App light" : "App dark"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleButtonClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
