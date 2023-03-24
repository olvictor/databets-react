import React, { useState } from "react";
import OptionsBasquete from "../options/optionsBasquete";
import OptionsFutebol from "../options/optionsFutebol";
import "./form.css";

const Form = ({ getBets, bets }) => {
  const [valor, setValor] = useState("");
  const [odd, setOdd] = useState("");
  const [date, setDate] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [options, setOptions] = useState("");
  const [id, setId] = useState(0);
  const [valid, setValid] = useState(false);

  const formSubmit = () => {
    const betObj = {
      id,
      valor,
      odd,
      retorno: valor * odd,
      lucro: valor * odd - valor,
      modalidade,
      options,
      status: undefined,
      date,
    };

    setId(id + 1);
    getBets(betObj);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="single-input">
        <input
          required
          type="number"
          id="valor"
          onChange={(e) => setValor(e.target.value)}
        ></input>
        <label htmlFor="valor">Valor da Aposta</label>
      </div>
      <div className="single-input">
        <input
          type="number"
          id="ODD"
          onChange={(e) => setOdd(e.target.value)}
        ></input>
        <label htmlFor="ODD">Valor da ODD </label>
      </div>
      <label htmlFor="modalidade">Escolha a modalidade: </label>

      <select
        htmlFor="modalidade"
        id="modalidade"
        onChange={(e) => setModalidade(e.target.value)}
      >
        <option value="-1">Modalidade</option>
        <option value="Futebol">Futebol</option>
        <option value="Basquete">Basquete</option>
        <option value="Tênis">Tênis</option>
        <option value="Formula1">Formula 1</option>
        <option value="Valorant">Valorant</option>
        <option value="LoL">League of Legends</option>
      </select>

      <h3 className="tittleModalidade">
        {modalidade !== "-1" ? modalidade : ""}
      </h3>

      <div
        className={
          modalidade === "Basquete" ? "basqueteOptions" : "basqueteOptions hide"
        }
      >
        <OptionsBasquete setOptions={setOptions} />
      </div>

      <div
        className={
          modalidade === "Futebol" ? "futebolOptions" : "futebolOptions hide"
        }
      >
        <OptionsFutebol setOptions={setOptions} />
      </div>

      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input
        type="submit"
        value="Adicionar aposta"
        onClick={() => formSubmit()}
      />
    </form>
  );
};

export default Form;
