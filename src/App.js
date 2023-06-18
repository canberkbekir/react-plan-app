import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const apiKEY = `sk-iPXp648edf76ae6d21304`;
var getTrees = async () => {
  var arrayData
  var postUrl = "https://perenual.com/api/species-list?page=1&key=" + apiKEY;
  const data = await fetch(postUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  arrayData = await data.json();
  return arrayData
};


function App() {
  console.log(getTrees())
  const [trees, setTrees] = useState(getTrees());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
