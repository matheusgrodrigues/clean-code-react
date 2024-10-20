export const Correto: React.FC = () => {
  const skills = ["ReactJS", "TypeScript", "Clean Code"];

  const getSkill = (position: number) => skills[position];
  console.log(getSkill(0));

  return <>Código Bom</>;
};
