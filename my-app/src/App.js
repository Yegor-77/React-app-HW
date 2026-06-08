import React from "react";
import "./App.css";

function App() {
  // 1
  const myName = "Yrhor";

  // 2
  const welcomeText = "Ласкаво просимо до нашого сайту!";

  // 4
  const favSite = {
    name: "Google",
    url: "https://www.google.com/",
  };

  // 5, 6
  const num1 = 7;
  const num2 = 5;

  // 7, 8
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div>
      {/* 1 */}
      <h1>{myName}</h1>

      {/* 2 */}
      <p>{welcomeText}</p>

      {/* 4 */}
      <p>
        <a href={favSite.url} target="_blank" rel="noreferrer">
          {favSite.name}
        </a>
      </p>

      {/* 6 */}
      <p>
        {num1} + {num2} = {num1 + num2}
      </p>

      {/* 8 */}
      <ul>
        {colors.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
