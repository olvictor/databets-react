import React, { useEffect, useState } from "react";

const OptionsBasquete = ({ setOptions, setConfronto }) => {
  const [timeMandante, setTimeMandante] = useState("");
  const [timeVisitante, setTimeVisitante] = useState("");
  const [Opt1, setOpt1] = useState("");
  const [Opt2, setOpt2] = useState("");
  const [Opt3, setOpt3] = useState("");
  const [Opt4, setOpt4] = useState("");

  useEffect(() => {
    const timesConfronto = {
      timeMandante,
      timeVisitante,
    };

    setOptions([Opt1, Opt2, Opt3, Opt4]);
    setConfronto(timesConfronto);
  }, [
    timeMandante,
    timeVisitante,
    Opt1,
    Opt2,
    Opt3,
    Opt4,
    setOptions,
    setConfronto,
  ]);

  return (
    <fieldset>
      <label htmlFor="timeMandante">Time Mandante</label>
      <input
        type="text"
        name="timeMandantebsqt"
        value={timeMandante}
        onChange={(e) => setTimeMandante(e.target.value)}
      />
      <label htmlFor="timeVisitante">Time Visitante</label>
      <input
        type="text"
        name="timeVisitantebsqt"
        onChange={(e) => setTimeVisitante(e.target.value)}
      />
      <label htmlFor="basqueteOption1">Jogador - Pontos</label>
      <input
        type="text"
        name="option1bsqt"
        onChange={(e) => setOpt1(e.target.value)}
      />

      <label htmlFor="basqueteOption2">Jogador - Assistencias</label>
      <input
        type="text"
        name="option2bsqt"
        onChange={(e) => setOpt2(e.target.value)}
      />

      <label htmlFor="basqueteOption3">Jogador - Rebotes</label>
      <input
        type="text"
        name="option3bsqt"
        onChange={(e) => setOpt3(e.target.value)}
      />

      <label htmlFor="basqueteOption4">Jogador - Triplos Conseguidos</label>
      <input
        type="text"
        name="option4bsqt"
        onChange={(e) => setOpt4(e.target.value)}
      />
    </fieldset>
  );
};

export default OptionsBasquete;
