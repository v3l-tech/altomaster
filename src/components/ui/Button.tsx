import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  variant = 'primary',
  fullWidth = false,
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-bold text-[13px] uppercase tracking-wide px-6 py-3 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-am-orange focus:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-am-orange text-white hover:bg-am-orange-dark hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-am-orange/20',
    secondary:
      'border-2 border-am-orange text-am-orange bg-transparent hover:bg-am-orange hover:text-white active:scale-[0.98]',
    ghost:
      'text-am-muted hover:text-white bg-transparent',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${
        disabled || loading ? 'opacity-60 cursor-not-allowed' : ''
      } ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Enviando...
        </>
      ) : (
        children
      )}
    </button>
  );
}
