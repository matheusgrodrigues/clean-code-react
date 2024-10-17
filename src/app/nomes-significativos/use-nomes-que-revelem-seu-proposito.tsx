/*
 * Atenção!
 *
 * Os comentários deste arquivo são para fins de aprendizagem,
 * Sempre evite comentários no código! - Escolha bons nomes que revelem seu proposito.
 *
 */

// ==================================================================================================

/*
 * # Nome Ruim
 *
 * O nome 's' não significa nada.
 * Se um nome precisa de um comentário, então ele não mostra o proposito.
 * Que tipo de coisa está armazenada na variável 's' ?
 *
 */

// Skills
const s = ["TypeScript", "ReactJS", "NextJS", "Clean Code", "TDD"];

// getSkill
const gs = (n: string) => s.filter((s) => n === s);
console.log(gs("Clean Code"));

// ==================================================================================================

/*
 * # Bom nome
 *
 * Nomes claros mostrando o propósito e facilitando o entendimento.
 *
 */
const skills = ["TypeScript", "ReactJS", "NextJS", "Clean Code", "TDD"];
const getSkill = (name: string) => skills.filter((skill) => name === skill);
console.log(getSkill("Clean Code"));
