import React from "react";
import ReactDOM from "react-dom/client";
import myExportedData from "./myExportedData";
import "./index.css";
function App() {
  const name = "Bidibidi";
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      {/* <FilterExportedData /> */}
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinacci" />
      <h3>Pizza Spinacci</h3>
      <p>Tomato, mozarella, bidibidi.....</p>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast react pizza co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu's</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  //   return React.createElement("footer", null, "We're currently online.");
  const date = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  const openedHour = 12;
  const closedHour = 22;
  const isOpened = hour >= openedHour && hour <= closedHour;
  console.log(
    isOpened ? "We're currently opened" : "We're currently closed. Sorry!!"
  );
  return <footer className="footer">We're currently online. {date}</footer>;
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
