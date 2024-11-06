import { useEffect, useState } from "react";

interface ImovelProps {
  title: string;
  price: number;
  location: string;
}

export const Grande: React.FC<{ id: number }> = ({ id }) => {
  const [imovel, setImovel] = useState<ImovelProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImovelDetail = async () => {
      setLoading(true);

      try {
        const response = await fetch(`https://api.example.com/imoveis/${id}`);
        const data = await response.json();
        setImovel(data);
      } catch (error) {
        setError("Erro ao localizar imovel");
      } finally {
        setLoading(false);
      }
    };

    fetchImovelDetail();
  }, [id]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div>
      {imovel?.price && <p>Price: {`${imovel?.price}`}</p>}
      {imovel?.price && <p>Location: {`${imovel?.location}`}</p>}
      {imovel?.price && <p>title: {`${imovel?.title}`}</p>}
    </div>
  );
};

const useImovelDetail = (id: number) => {
  const [imovel, setImovel] = useState<ImovelProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImovelDetail = async () => {
      setLoading(true);

      try {
        const response = await fetch(`https://api.example.com/imoveis/${id}`);
        const data = await response.json();
        setImovel(data);
      } catch (error) {
        setError("Erro ao localizar imovel");
      } finally {
        setLoading(false);
      }
    };

    fetchImovelDetail();
  }, [id]);

  return { imovel, loading, error };
};

export const Pequena: React.FC<{ id: number }> = ({ id }) => {
  const { error, imovel, loading } = useImovelDetail(id);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {imovel?.price && <p>Price: {`${imovel?.price}`}</p>}
      {imovel?.price && <p>Location: {`${imovel?.location}`}</p>}
      {imovel?.price && <p>title: {`${imovel?.title}`}</p>}
    </div>
  );
};
