import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  text: string;
  className?: string;
  state?: 'default' | 'active' | 'disabled';
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  type = 'primary',
  text,
  className = '',
  state = 'default',
  children,
  onClick
}: ButtonProps) => {
  const baseStyle =
    'min-w-[227px] w-full rounded-lg py-[11px] px-[27px] flex items-center justify-center font-semibold';

  const typeStyles = {
    primary: {
      default: 'bg-purple text-white',
      active: 'bg-purpleHover text-white',
      disabled: 'bg-lightPurple text-white'
    },
    secondary: {
      default: 'bg-white border border-purple text-purple',
      active: 'bg-lightPurple border border-purple text-purple',
      disabled: 'bg-lightPurple/30 border border-purple text-purple'
    }
  };

  const typeStyle = typeStyles[type][state] || typeStyles.primary[state];
  const finalClassName = `${baseStyle} ${typeStyle} ${className}`;

  return (
    <button
      className={finalClassName}
      onClick={state === 'disabled' ? undefined : onClick}
      disabled={state === 'disabled'}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
