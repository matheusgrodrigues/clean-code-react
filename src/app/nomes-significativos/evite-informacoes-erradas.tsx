interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
}

const ButtonForPressing: React.FC<ButtonProps> = ({ ...props }) => <button {...props}>Pressing</button>;
const ButtonForClick: React.FC<ButtonProps> = ({ ...props }) => <button {...props}>Click</button>;

export const CodigoRuim: React.FC = () => {
  const skillList = ["ReactJS", "NextJS", "TypeScript", "Clean Code", "TDD"];
  console.log(skillList);

  const hp = () => console.log("Pressing");
  const hc = () => console.log("Click");

  return (
    <>
      <ul>
        <li>
          <strong>Código Ruim</strong>
        </li>
        <li>
          Evite nomes parecidos, é difícil perceber a diferença entre {"ButtonForPressing"} e {"ButtonForClick"}.
        </li>
        <li>Não se refira a um grupo de skills como skillList, prefira apenas skills.</li>
        <li>
          Evite abreviações, os nomes {"hp"} e {"hc"} podem ser mal interpretados.
        </li>
      </ul>

      <ButtonForPressing onClick={hp} />
      <ButtonForClick onClick={hc} />
    </>
  );
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => <button {...props}>{children}</button>;

export const CodigoBom: React.FC = () => {
  const skills = ["ReactJS", "NextJS", "TypeScript", "Clean Code", "TDD"];
  console.log(skills);

  const handleClick = () => console.log("Click");

  return (
    <>
      <ul>
        <li>
          <strong>Código Bom</strong>
        </li>
        <li>Nomes das variaveis e funções explicitos e faceis de serem compreendidos, sem abreviação.</li>
      </ul>

      <Button onClick={handleClick} />
    </>
  );
};
