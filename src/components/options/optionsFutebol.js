import React, { useState } from "react";

const OptionsFutebol = ({ setOptions }) => {
  const [timeMandanteFut, setTimeMandanteFut] = useState("");
  const [timeVisitanteFut, setTimeVisitanteFut] = useState("");
  const [FutebolOpt1, setFutebolOpt1] = useState("");
  const [FutebolOpt2, setFutebolOpt2] = useState("");
  const [FutebolOpt3, setFutebolOpt3] = useState("");
  const [FutebolOpt4, setFutebolOpt4] = useState("");
  const [FutebolOpt5, setFutebolOpt5] = useState("");
  return (
    <fieldset>
      <label>Time Mandante</label>
      <input type="text" onChange={(e) => setTimeMandanteFut(e.target.value)} />

      <label>Time Visitante</label>
      <input
        type="text"
        onChange={(e) => setTimeVisitanteFut(e.target.value)}
      />

      <label htmlFor="futebolOption1">Jogador - Finalizações</label>
      <input
        type="text"
        id="futebolOption1"
        onChange={(e) => setFutebolOpt1(e.target.value)}
      />

      <label htmlFor="futebolOption2">Jogador - Finalizações ao Gol</label>
      <input
        type="text"
        id="futebolOption2"
        onChange={(e) => setFutebolOpt2(e.target.value)}
      />

      <label htmlFor="futebolOption3">Gols</label>
      <input
        type="text"
        id="futebolOption3"
        onChange={(e) => setFutebolOpt3(e.target.value)}
      />

      <label htmlFor="futebolOption4">Escateio</label>
      <input
        type="text"
        id="futebolOption4"
        onChange={(e) => setFutebolOpt4(e.target.value)}
      />

      <label htmlFor="futebolOption5">Cartões</label>
      <input
        type="text"
        id="futebolOption5"
        onChange={(e) => setFutebolOpt5(e.target.value)}
      />
    </fieldset>
  );
};

OptionsFutebol.propTypes = {};

export default OptionsFutebol;
