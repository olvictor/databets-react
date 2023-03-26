import { useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import Header from "./components/header/header";
import Painel from "./components/painel/painel";
import Table from "./components/table/table";

function App() {
  const [bets, setBets] = useState([]);
  const getBets = (betObj) => {
    setBets([...bets, betObj]);
  };

  const betDelete = (id) => {
    const removeBet = bets.filter((bet) => bet.id !== id);
    setBets(removeBet);
  };

  const betSetGreen = (bet) => {
    bet.status = "green";
    setBets([...bets]);
  };

  const betSetRed = (bet) => {
    bet.status = "red";
    setBets([...bets]);
  };

  return (
    <div className="container">
      <Header />
      <Form getBets={getBets} bets={bets} />
      <Table
        bets={bets}
        betDelete={betDelete}
        betSetGreen={betSetGreen}
        betSetRed={betSetRed}
      />
      {bets.length > 0 && <Painel bets={bets} />}
    </div>
  );
}

export default App;
