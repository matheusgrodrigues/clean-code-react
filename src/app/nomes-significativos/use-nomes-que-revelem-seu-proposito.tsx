export const CodigoRuim: React.FC = () => {
   // Skills
   const s = ["TypeScript", "ReactJS", "NextJS", "Clean Code", "TDD"];

   // getSkill
   const gs = (n: string) => s.filter((s) => n === s);

   console.log(gs("Clean Code"));

   return (
      <ul>
         <li>
            <strong>Còdigo Ruim</strong>
         </li>
         <li>Se um nome precisa de um comentário, então ele não mostra o proposito.</li>
         <li>Que tipo de coisa está armazenada na variável {"s"} ?</li>
         <li>O nome {"s"} não significa nada.</li>
      </ul>
   );
};

export const CodigoBom: React.FC = () => {
   const skills: string[] = ["TypeScript", "ReactJS", "NextJS", "Clean Code", "TDD"];
   const getSkill = (name: string) => skills.filter((skill) => name === skill);
   console.log(getSkill("Clean Code"));

   return (
      <ul>
         <li>
            <strong>Código Bom</strong>
         </li>
         <li>Nomes claros mostrando o propósito e facilitando o entendimento.</li>
      </ul>
   );
};
