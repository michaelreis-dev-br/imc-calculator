import styles from "./tabelaImc.module.css";

const TabelaImc = () => {
  return (
    <>
      <h2 className="mB2">Classificação do IMC</h2>
      <table>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo de 18,5</td>
            <td className={styles.yellowGreen}>Baixo peso</td>
          </tr>
          <tr>
            <td>Entre 18,6 e 24,9</td>
            <td className={styles.green}>Peso normal</td>
          </tr>
          <tr>
            <td>Entre 25 e 29,9</td>
            <td className={styles.yellowGreen}>Sobrepeso</td>
          </tr>
          <tr>
            <td>Entre 30 e 34,9</td>
            <td className={styles.yellow}>Obesidade grau I</td>
          </tr>
          <tr>
            <td>Entre 35 e 39,9</td>
            <td className={styles.orange}>Obesidade grau II</td>
          </tr>
          <tr>
            <td>Acima de 40</td>
            <td className={styles.red}>Obesidade grau III</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TabelaImc;
