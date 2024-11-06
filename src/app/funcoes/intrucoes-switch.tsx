import { useCallback } from "react";

type Role = "corretor autonomo" | "corretor especialista";

interface InstrucoesSwitchProps {
  role: Role;
}

export const InstrucoesSwitchRuim: React.FC<InstrucoesSwitchProps> = ({ role }) => {
  const calcularComissaoAutonomo = useCallback(
    () => console.log("Retorna o valor calculado da comissão do corretor autonomo"),
    []
  );

  const calcularComissaoEspecialista = useCallback(
    () => console.log("Retorna o valor calculado da comissão do corretor especialista"),
    []
  );

  const totalComissao = (role: Role) => {
    switch (role) {
      case "corretor autonomo":
        return calcularComissaoAutonomo();
        break;
      case "corretor especialista":
        return calcularComissaoEspecialista();
        break;
      default:
        return "";
    }
  };

  return <>Total: {totalComissao(role)}</>;
};

const corretorAutonomo = {
  calcularComissao: () => console.log("Retorna o valor calculado da comissão do corretor autonomo"),
};

const corretorEspecialista = {
  calcularComissao: () => console.log("Retorna o valor calculado da comissão do corretor especialista"),
};

export const InstrucoesSwitchBom: React.FC<InstrucoesSwitchProps> = ({ role }) => {
  const totalComissao = useCallback((role: Role) => {
    switch (role) {
      case "corretor autonomo":
        return corretorAutonomo.calcularComissao();
        break;
      case "corretor especialista":
        return corretorEspecialista.calcularComissao();
        break;
      default:
        return "";
    }
  }, []);

  return <>Total: {totalComissao(role)}</>;
};
