import React from "react";
import ReactDOM from "react-dom/client";
import myExportedData from "./myExportedData";
function App() {
  const name = "Bidibidi";
  return (
    <div>
      <h1>Hello react !</h1>
      <p>
        This is first react <code>paragraph for {name}.</code>
      </p>
      <Pizza />
      <FilterExportedData />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinacci" />
      <h2>Pizza Spinacci</h2>
      <p>Tomato, mozarella, bidibidi.....</p>
    </div>
  );
}

function FilterExportedData() {
  let filteredData = myExportedData.find((x) => x.name.includes("Pro"));
  return <div>{JSON.stringify(filteredData, null, 2)}</div>;
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v18
// React.render(<App />, document.getElementById("root"));
