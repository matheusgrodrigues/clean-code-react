import { useCallback, useMemo } from "react";

interface ImovelSchema {
  id: number;
  name: string;
}

interface FacaApenasUmaCoisaProps {
  imovel: ImovelSchema;
}

export const FacaApenasUmaCoisa: React.FC<FacaApenasUmaCoisaProps> = ({ imovel }) => {
  const fake_user = { id: Number, email: "matheusgomes1203@hotmaail.com" };

  const gerenciarPropriedade = () => {
    console.log(`Adicionar imovel ${imovel.id} no banco de dados.`);
    console.log(`Enviando notificação ao usuário ${fake_user.email} sobre o imóvel ${imovel.id}.`);
    console.log(`Atualizando registro do ${fake_user.id} com o novo imóvel.`);
  };

  return <button onClick={gerenciarPropriedade}>Gerenciar Imovel</button>;
};

interface User {
  id: number;
  email: string;
}

export const FacaApenasUmaCoisaBom: React.FC<FacaApenasUmaCoisaProps> = ({ imovel }) => {
  const fake_user: User = useMemo(() => ({ id: 1, email: "matheusgomes1203@hotmaail.com" }), []);

  const adicionarPropriedade = useCallback(() => console.log(`Adicionar imovel ${imovel.id} no banco de dados.`), [imovel]);

  const enviarNotificacao = useCallback(
    () => console.log(`Enviando notificação ao usuário ${fake_user.email} sobre o imóvel ${imovel.id}.`),
    [fake_user, imovel]
  );

  const atualizarRegistro = useCallback(
    () => console.log(`Atualizando registro do ${fake_user.id} com o novo imóvel.`),
    [fake_user]
  );

  const gerenciarPropriedade = useCallback(() => {
    {
      adicionarPropriedade();
      enviarNotificacao();
      atualizarRegistro();
    }
  }, [adicionarPropriedade, enviarNotificacao, atualizarRegistro]);

  return <button onClick={gerenciarPropriedade}>Gerenciar Imovel</button>;
};
