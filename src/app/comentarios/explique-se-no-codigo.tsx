export const ExpliqueNoCodigoRuim: React.FC = () => {
  const fake_user = { role: "admin", permissions: ["view"] };

  // Verifica se o usuário pode visualizar
  if (fake_user.role === "admin" && fake_user.permissions.includes("view")) {
    return <>View Page</>;
  }

  return <></>;
};

interface User {
  role: "admin";
  permissions: string[];
}

const user = {
  isElegibleForView: (fake_user: User) => fake_user.role === "admin" && fake_user.permissions.includes("view"),
};

export const ExpliqueNoCodigoBom: React.FC = () => {
  const fake_user: User = { role: "admin", permissions: ["view"] };

  if (user.isElegibleForView(fake_user)) return <>View Page</>;

  return <></>;
};
