import React, { useEffect, useState } from "react";

const OptionsBasquete = ({ setOptions }) => {
  const [timeMandante, setTimeMandante] = useState("");
  const [timeVisitante, setTimeVisitante] = useState("");
  const [basqueteOpt1, setBasqueteOpt1] = useState("");
  const [basqueteOpt2, setBasqueteOpt2] = useState("");
  const [basqueteOpt3, setBasqueteOpt3] = useState("");
  const [basqueteOpt4, setBasqueteOpt4] = useState("");

  useEffect(() => {
    const bqtOptions = {
      timeMandante,
      timeVisitante,
      basqueteOpt1,
      basqueteOpt2,
      basqueteOpt3,
      basqueteOpt4,
    };
    setOptions(bqtOptions);
  }, [
    timeMandante,
    timeVisitante,
    basqueteOpt1,
    basqueteOpt2,
    basqueteOpt3,
    basqueteOpt4,
    setOptions,
  ]);

  return (
    <fieldset>
      <input
        type="text"
        name="timeMandantebsqt"
        value={timeMandante}
        onChange={(e) => setTimeMandante(e.target.value)}
      />
      <label htmlFor="timeMandante">Time Mandante</label>
      <input
        type="text"
        name="timeVisitantebsqt"
        onChange={(e) => setTimeVisitante(e.target.value)}
      />
      <label htmlFor="timeVisitante">Time Visitante</label>
      <label htmlFor="basqueteOption1">Jogador - Pontos</label>
      <input
        type="text"
        name="option1bsqt"
        onChange={(e) => setBasqueteOpt1(e.target.value)}
      />

      <label htmlFor="basqueteOption2">Jogador - Assistencias</label>
      <input
        type="text"
        name="option2bsqt"
        onChange={(e) => setBasqueteOpt2(e.target.value)}
      />

      <label htmlFor="basqueteOption3">Jogador - Rebotes</label>
      <input
        type="text"
        name="option3bsqt"
        onChange={(e) => setBasqueteOpt3(e.target.value)}
      />

      <label htmlFor="basqueteOption4">Jogador - Triplos Conseguidos</label>
      <input
        type="text"
        name="option4bsqt"
        onChange={(e) => setBasqueteOpt4(e.target.value)}
      />
    </fieldset>
  );
};

export default OptionsBasquete;
