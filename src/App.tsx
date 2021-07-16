import React, { useState } from "react";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import DisplayNames from "./components/DisplayNames";

import "./App.css";

function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <Favourites />
      <hr/>
      <DisplayNames search={search} />
    </div>
  );
}

export default App;
