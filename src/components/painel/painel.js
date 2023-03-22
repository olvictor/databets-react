import React from "react";
import "./painel.css";

export default function Painel({ bets }) {
  const totalGreen = bets.filter((bet) => bet.status === "green");
  const totalRed = bets.filter((bet) => bet.status === "red");
  const jaGanhou = totalGreen
    .map((bet) => bet.lucro)
    .reduce((a, b) => a + b, 0);
  const jaPerdeu = totalRed
    .map((bet) => Number(bet.valor))
    .reduce((a, b) => a + b, 0);
  const lucro = jaGanhou - jaPerdeu;

  return (
    <div className="painel-escatisticas">
      <h2>Painel de Estatisticas</h2>
      <div className="painel-info">
        <h3>Total BETS: {bets.length}</h3>
        <hr />
        <h3>Total Green: {totalGreen.length}</h3>
        <hr />
        <h3>Total Red: {totalRed.length}</h3>
        <hr />
        <h3>
          Já Ganhou: <span style={{ color: "green" }}> + {jaGanhou}</span>
        </h3>
        <hr />
        <h3>
          Já Perdeu:<span style={{ color: "red" }}> - {jaPerdeu}</span>
        </h3>
        <hr />
        <h3>
          Lucro:
          <span style={lucro > 0 ? { color: "green" } : { color: "red" }}>
            {" "}
            {lucro} R$
          </span>{" "}
        </h3>
      </div>
    </div>
  );
}
