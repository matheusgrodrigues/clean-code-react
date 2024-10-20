// Código Bom
interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}
export const PrimaryButton: React.FC<ButtonProps> = () => <button>Button</button>;

// Código Ruim
interface IButton extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}
export const Button: React.FC<IButton> = () => <button>Button</button>;
