export const CodigoRuim: React.FC = () => {
  const sk = "Clean Code";
  const skL = 5;

  const updSKL = (sk: "Clean Code", lv: number) => console.log(`${sk} foi atualizada para o nível ${sk + lv}`);

  updSKL("Clean Code", 1);

  return (
    <ul>
      <li>
        <strong>Código Ruim</strong>
      </li>
      <li>Os nomes das variáveis e funções são difíceis de pronunciar. {`${sk} - ${skL}`}</li>
    </ul>
  );
};

export const CodigoBom: React.FC = () => {
  const skill = "Clean Code";
  const skillLevel = 5;

  const updateSkillLevel = (skill: "Clean Code", level: number) =>
    console.log(`${skill} foi atualizada para o nível ${skill + level}`);

  updateSkillLevel("Clean Code", 1);

  return (
    <ul>
      <li>
        <strong>Código Bom</strong>
      </li>
      <li>Os nomes sáo fáceis de pronunciar. e fácil de discutir com seus colegas de equipe. {`${skill} - ${skillLevel}`}</li>
    </ul>
  );
};
