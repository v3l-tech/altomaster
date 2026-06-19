import { useEffect, useState } from 'react';
import type { ToastType } from '../../types';

interface ToastProps {
  visible: boolean;
  type: ToastType;
  message: string;
  onClose: () => void;
}

export default function Toast({ visible, type, message, onClose }: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsExiting(false);
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onClose, 300);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible && !isExiting) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`fixed top-24 right-6 z-[60] flex items-center gap-3 px-5 py-4 rounded-lg shadow-2xl max-w-sm
        ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}
        ${isExiting ? 'animate-toast-out' : 'animate-toast-in'}
        text-white font-medium text-sm`}
    >
      {type === 'success' ? (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      <span>{message}</span>
      <button
        onClick={() => {
          setIsExiting(true);
          setTimeout(onClose, 300);
        }}
        className="ml-2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Fechar notificação"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
