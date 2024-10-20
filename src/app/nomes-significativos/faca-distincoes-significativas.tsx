export const CodigoRuim: React.FC = () => {
  const classVariable = "danger";

  const a1 = 10;
  const a2 = 20;

  return (
    <ul>
      <li className={classVariable}>
        <strong>Código Ruim</strong>
      </li>
      <li>
        Os nomes {"a1"} e {"a2"} não ofereçem informação alguma sobre a intenção {`${a1} - ${a2}`}.
      </li>
      <li>O nome da variável jamais de conter a palavra {"variável"}</li>
    </ul>
  );
};

export const CodigoBom: React.FC = () => {
  const className = "danger";

  const quantity = 10;
  const total = 20;

  return (
    <ul>
      <li className={className}>
        <strong>Código Bom</strong>
      </li>
      <li>Os nomes possuem distinção de forma que o leitor pode facilmente compreender a intenção. {`${quantity} - ${total}`}</li>
    </ul>
  );
};
