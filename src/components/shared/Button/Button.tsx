interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <button className={`btn ${variant === 'secondary' ? 'btn--secondary' : ''}`} {...props}>
      {children}
    </button>
  );
};
