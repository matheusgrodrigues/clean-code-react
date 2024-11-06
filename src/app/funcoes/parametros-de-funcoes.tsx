interface Imovel {
  name: string;
  address: string;
  price: number;
}

interface ImovelProps extends Imovel {
  name: string;
  address: string;
  price: number;
  similar: Imovel[];
}

const formatAddress = (address: string) => console.log(`Endereço formatado: ${address}`);

export const Monade: React.FC<Imovel> = ({ address }) => <>{formatAddress(address)}</>;

const comparePropertyPrice = (property1: Imovel, property2: Imovel) =>
  property1.price > property2.price ? console.log(`${property1.name} é mais caro do que o ${property2.name}`) : "";

export const Diade: React.FC<ImovelProps> = (props) => <>{comparePropertyPrice(props, props.similar[0])}</>;

const calculateMonthlyRent = (price: number, contractDuration: number, discount: number): number => {
  const discountAmount = (price * discount) / 100;
  const totalPrice = price - discountAmount;
  return totalPrice / contractDuration;
};

export const Triade: React.FC = () => <>{calculateMonthlyRent(10000, 5, 50)}</>;

const listPropertyStatus = (propertyId: number, isForSale: boolean): void => {
  if (isForSale) {
    console.log(`Property ${propertyId} listed for sale.`);
  } else {
    console.log(`Property ${propertyId} listed for rent.`);
  }
};

const listPropertyForSale = (propertyId: number): void => {
  console.log(`Property ${propertyId} listed for sale.`);
};

const listPropertyForRent = (propertyId: number): void => {
  console.log(`Property ${propertyId} listed for rent.`);
};

export const Logicos: React.FC = () => (
  <>
    {listPropertyForSale(1)}
    {listPropertyForRent(1)}
  </>
);
