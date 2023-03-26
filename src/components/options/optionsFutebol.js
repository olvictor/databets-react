import React, { useEffect, useState } from "react";

const OptionsFutebol = ({ setOptions, setConfronto }) => {
  const [timeMandante, setTimeMandante] = useState("");
  const [timeVisitante, setTimeVisitante] = useState("");
  const [Opt1, setOpt1] = useState("");
  const [Opt2, setOpt2] = useState("");
  const [Opt3, setOpt3] = useState("");
  const [Opt4, setOpt4] = useState("");
  const [Opt5, setOpt5] = useState("");

  useEffect(() => {
    const timesConfronto = {
      timeMandante,
      timeVisitante,
    };

    setConfronto(timesConfronto);

    setOptions([Opt1, Opt2, Opt3, Opt4, Opt5]);
  }, [
    timeMandante,
    timeVisitante,
    Opt1,
    Opt2,
    Opt3,
    Opt4,
    Opt5,
    setOptions,
    setConfronto,
  ]);
  return (
    <fieldset>
      <label>Time Mandante</label>
      <input type="text" onChange={(e) => setTimeMandante(e.target.value)} />

      <label>Time Visitante</label>
      <input type="text" onChange={(e) => setTimeVisitante(e.target.value)} />

      <label htmlFor="futebolOption1">Jogador - Finalizações</label>
      <input
        type="text"
        id="futebolOption1"
        onChange={(e) => setOpt1(e.target.value)}
      />

      <label htmlFor="futebolOption2">Jogador - Finalizações ao Gol</label>
      <input
        type="text"
        id="futebolOption2"
        onChange={(e) => setOpt2(e.target.value)}
      />

      <label htmlFor="futebolOption3">Gols</label>
      <input
        type="text"
        id="futebolOption3"
        onChange={(e) => setOpt3(e.target.value)}
      />

      <label htmlFor="futebolOption4">Escanteio</label>
      <input
        type="text"
        id="futebolOption4"
        onChange={(e) => setOpt4(e.target.value)}
      />

      <label htmlFor="futebolOption5">Cartões</label>
      <input
        type="text"
        id="futebolOption5"
        onChange={(e) => setOpt5(e.target.value)}
      />
    </fieldset>
  );
};

export default OptionsFutebol;
