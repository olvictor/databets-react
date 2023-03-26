import React from "react";
import "./table.css";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BiCheckCircle } from "react-icons/bi";

export default function Table({ bets, betDelete, betSetGreen, betSetRed }) {
  return (
    <>
      {bets.length < 1 && <h2> Não existem apostas registradas </h2>}
      <table className={bets.length < 1 ? "hide" : ""}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>ODD</th>
            <th>Retorno</th>
            <th>Lucro</th>
            <th>Modalidade</th>
            <th>Tipo de Aposta</th>
            <th>Confronto</th>
            <th>Ações</th>
            <th>Editar/Remover</th>
          </tr>
        </thead>
        <tbody>
          {bets.map((bet) => (
            <tr
              key={bet.id}
              style={{
                backgroundColor: bet.status,
                opacity: "1",
              }}
            >
              <td>{bet.date}</td>
              <td>{bet.valor + " R$"}</td>
              <td>{bet.odd}</td>
              <td>{bet.retorno + " R$"}</td>
              <td>{bet.lucro + " R$"}</td>
              <td>{bet.modalidade}</td>
              <td className="options">
                {bet.options.map((option) => (
                  <span>{option}</span>
                ))}
              </td>
              <td>
                {bet.confronto.timeMandante} X {bet.confronto.timeVisitante}
              </td>
              <td className="actions">
                <BiCheckCircle onClick={() => betSetGreen(bet)} />
                <BiCheckCircle onClick={() => betSetRed(bet)} />
              </td>
              <td>
                <FiEdit /> <BsTrash onClick={() => betDelete(bet.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
