import React from "react";
import ReactDOM from "react-dom/client";
import myExportedData from "./myExportedData";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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

function Header() {
  return (
    <header className="header">
      <h1>Fast react pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzaArray = pizzaData;
  // const pizzaArray = [];
  const pizzaLength = pizzaArray.length;
  return (
    <main className="menu">
      <h2>Our menu's</h2>
      {pizzaLength > 0 ? (
        <React.Fragment key="root" className="root">
          <p>Deneme test bir iki üç dört beş.</p>
          <ul className="pizzas">
            {pizzaArray.map((pizza, index) => {
              return <Pizza pizzaObj={pizza} key={index} />;
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still out of support. Please come back later.</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, bidibidi....."
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mushrooms, azıcıkta sevgi....."
        photoName="pizzas/funghi.jpg"
        price={20}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </li>
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

  if (!isOpened) {
    <footer className="footer">
      <p>We're currently closed. Can you come in {openedHour}:00:00.</p>;
    </footer>;
  }

  return (
    <footer className="footer">
      {isOpened && <Order closedHour={closedHour} date={date} />}
    </footer>
  );
}

function FilterExportedData() {
  let filteredData = myExportedData.find((x) => x.name.includes("Pro"));
  return <div>{JSON.stringify(filteredData, null, 2)}</div>;
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're currently online until {props.closedHour}:00:00. Now time is{" "}
        {props.date}.
      </p>
      <button className="btn">Order</button>
    </div>
  );
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
