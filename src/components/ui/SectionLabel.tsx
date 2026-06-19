interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <div>
      <span className={`section-label ${light ? 'text-am-orange' : ''}`}>{text}</span>
      <div className="section-divider" />
    </div>
  );
}
