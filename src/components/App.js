import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  

  return (
    <React.Fragment>

    <Header />

      <ShoppingList items={itemData} />
      </React.Fragment>
  );
}

export default App;
