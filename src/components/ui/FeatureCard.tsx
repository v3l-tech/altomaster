interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  variant?: 'dark' | 'light' | 'orange';
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'dark',
  className = '',
}: FeatureCardProps) {
  const variantClasses = {
    dark: 'bg-am-card border border-am-separator text-white',
    light: 'bg-white border border-gray-200 text-gray-900 shadow-sm',
    orange: 'bg-am-orange text-white',
  };

  return (
    <div
      className={`rounded-lg p-5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg ${variantClasses[variant]} ${className}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            variant === 'orange' ? 'bg-white/20' : 'bg-am-orange/10'
          }`}
        >
          <span className={`${variant === 'orange' ? 'text-white' : 'text-am-orange'}`}>{icon}</span>
        </div>
        <div>
          <h4
            className={`font-bold text-sm uppercase tracking-wide ${
              variant === 'dark' ? 'text-am-orange' : ''
            }`}
          >
            {title}
          </h4>
          {description && (
            <p
              className={`mt-1 text-sm leading-relaxed ${
                variant === 'dark' ? 'text-am-muted' : variant === 'orange' ? 'text-white/80' : 'text-gray-600'
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
