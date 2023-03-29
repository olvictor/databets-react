import React, { useState } from "react";
import OptionsBasquete from "../options/optionsBasquete";
import OptionsFutebol from "../options/optionsFutebol";
import "./form.css";
import { BiFootball } from "react-icons/bi";

const Form = ({ getBets, bets }) => {
  const [valor, setValor] = useState("");
  const [odd, setOdd] = useState("");
  const [date, setDate] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [options, setOptions] = useState([]);
  const [id, setId] = useState(0);
  const [msg, setMsg] = useState("");
  const [confronto, setConfronto] = useState("");
  const validForm = () => {
    if (valor === "") {
      alert("Digite o valor da Aposta");
      return false;
    }
    if (odd === "") {
      alert("Preencha a odd");
      return false;
    }
    formSubmit();
  };
  const formSubmit = () => {
    const betObj = {
      id,
      valor,
      odd,
      retorno: valor * odd,
      lucro: valor * odd - valor,
      modalidade,
      confronto,
      options,
      status: undefined,
      date,
    };

    setId(id + 1);
    getBets(betObj);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="valor">Valor da Aposta </label>
      <input
        type="number"
        id="valor"
        value={valor || ""}
        required
        onChange={(e) => setValor(e.target.value)}
      ></input>

      <label htmlFor="ODD">Valor da ODD </label>
      <input
        type="number"
        value={odd || ""}
        id="odd"
        onChange={(e) => setOdd(e.target.value)}
        required
      ></input>
      <label htmlFor="modalidade">Escolha a modalidade: </label>

      <select
        htmlFor="modalidade"
        id="modalidade"
        onChange={(e) => setModalidade(e.target.value)}
        defaultValue="-1"
      >
        <option disabled value="-1">
          Selecione a Modalidade
        </option>
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
        <OptionsBasquete setOptions={setOptions} setConfronto={setConfronto} />
      </div>

      <div
        className={
          modalidade === "Futebol" ? "futebolOptions" : "futebolOptions hide"
        }
      >
        <OptionsFutebol setOptions={setOptions} setConfronto={setConfronto} />
      </div>

      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input
        type="submit"
        value="Registrar aposta"
        onClick={() => validForm()}
      />
    </form>
  );
};

export default Form;
