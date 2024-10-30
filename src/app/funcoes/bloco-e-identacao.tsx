interface User {
  role: "admin" | "premium";
  age: number;
}

interface BlocoIdentacaoProps {
  user: User;
}

export const Ruim: React.FC<BlocoIdentacaoProps> = ({ user }) => {
  if (user.role === "admin" || (user.role === "premium" && user.age > 18)) {
    console.log("Acesso permitido.");
  } else {
    console.log("Acesso negado.");
  }

  return <></>;
};

const checkPermission = (user: User) => user.role === "admin" || (user.role === "premium" && user.age > 18);

export const Bom: React.FC<BlocoIdentacaoProps> = ({ user }) => {
  if (checkPermission(user)) {
    console.log("Acesso permitido.");
  } else {
    console.log("Acesso negado.");
  }

  return <></>;
};
