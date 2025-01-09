import { useState } from "react";
import TabelaImc from "./components/TabelaImc";

const ImcCalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [calculated, setCalculated] = useState(false);
  const [imcResult, setImcResult] = useState(null);

  const handleClick = () => {
    if (height > 0 && weight > 0) {
      const imc = (weight / (height * height)).toFixed(2).replace(".", ",");
      setImcResult(imc);
      setCalculated(true);
    }
  };

  return (
    <>
      <main className="dFlex justifyContentCenter alignItemsCenter">
        <div className="container">
          <h1 className="mB2">Calculadora de IMC</h1>

          <input
            className="mB1"
            type="text"
            placeholder="Altura (cm)"
            onChange={({ target }) => setHeight(parseFloat(target.value) / 100)}
            maxLength={3}
          />

          <input
            className="mB1"
            type="text"
            placeholder="Peso"
            onChange={({ target }) => setWeight(parseInt(target.value))}
          />

          <button onClick={handleClick}>Calcular</button>

          {calculated && <p className="mY5">Seu IMC é: {imcResult}</p>}
          {calculated && <TabelaImc />}
        </div>
      </main>
    </>
  );
};

export default ImcCalculator;
