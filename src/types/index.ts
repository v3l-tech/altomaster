export interface NavLink {
  label: string;
  anchor: string;
}

export interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SectorCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type ToastType = 'success' | 'error';

export interface ToastState {
  visible: boolean;
  type: ToastType;
  message: string;
}

export type FormFieldState = 'idle' | 'focused' | 'error' | 'success';
