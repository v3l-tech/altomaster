import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import BrazilMapStates from './BrazilMapStates';

interface MapPin {
  x: number;
  y: number;
  label: string;
  type: 'existing' | 'expansion' | 'region';
}

const pins: MapPin[] = [
  { x: 90000, y: 80000, label: 'SORRISO – MT', type: 'existing' }, // roughly center MT
  { x: 98000, y: 128000, label: 'CAMPO GRANDE – MS', type: 'expansion' }, // roughly center MS
  { x: 112000, y: 130000, label: 'TRÊS LAGOAS – MS', type: 'expansion' }, // roughly east MS
];

export default function MapSVG() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative w-full max-w-2xl mx-auto h-[450px] overflow-hidden rounded-xl bg-am-card border border-am-separator/20">
      
      <style>{`
        .brazil-map-container path {
          transition: fill 0.3s ease, stroke 0.3s ease;
        }
        .brazil-map-container #MatoGrosso path {
          fill: #F97316 !important;
          stroke: #FB923C !important;
        }
        .brazil-map-container #MatoGrosso_do_Sul path {
          fill: #4B5563 !important;
          stroke: #6B7280 !important;
        }
        .brazil-map-container #SaoPaulo path {
          fill: #374151 !important;
          stroke: #4B5563 !important;
        }
      `}</style>

      {/* Map Container scaled and translated to zoom in on MT, MS, SP */}
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${isVisible ? 'scale-[1.8] translate-x-[-15%] translate-y-[-10%]' : 'scale-[1.5] translate-x-[-10%] translate-y-0'}`}
      >
        <BrazilMapStates className="absolute inset-0 w-full h-full brazil-map-container opacity-80" />
        
        <svg viewBox="0 0 220000 194010" className="absolute inset-0 w-full h-full z-10" aria-hidden="true">
          {/* Connection lines */}
          <path
            d={`M90000,80000 Q92000,104000 98000,128000`}
            fill="none"
            stroke="#F97316"
            strokeWidth="500"
            strokeDasharray="1500 1500"
            opacity="0.5"
            className={`transition-all duration-1500 ${isVisible ? 'opacity-50' : 'opacity-0'}`}
          />
          <path
            d={`M98000,128000 L112000,130000`}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="500"
            strokeDasharray="1500 1500"
            opacity="0.5"
            className={`transition-all duration-1500 ${isVisible ? 'opacity-50' : 'opacity-0'}`}
          />

          {/* Map pins */}
          {pins.map((pin, index) => (
            <g
              key={pin.label}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${800 + index * 400}ms` }}
            >
              {pin.type === 'expansion' && (
                <>
                  <circle cx={pin.x} cy={pin.y} r="3000" fill="none" stroke="#3B82F6" strokeWidth="500" opacity="0.4">
                    <animate attributeName="r" values="3000;8000;3000" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                </>
              )}

              {/* Pin marker */}
              <g transform={`translate(${pin.x}, ${pin.y - 4000}) scale(300)`}>
                <path
                  d="M0,-10 C5,-10 10,-5 10,0 C10,5 5,10 0,14 C-5,10 -10,5 -10,0 C-10,-5 -5,-10 0,-10 Z"
                  fill={pin.type === 'existing' ? '#F97316' : '#3B82F6'}
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle cx="0" cy="0" r="3" fill="white" />
              </g>

              {/* Label */}
              <rect
                x={pin.x - 20000}
                y={pin.y - 12000}
                width="40000"
                height="6000"
                rx="1500"
                fill="rgba(0,0,0,0.8)"
              />
              <text
                x={pin.x}
                y={pin.y - 7500}
                fill="white"
                fontSize="3500"
                fontWeight="700"
                textAnchor="middle"
                className="pointer-events-none"
                letterSpacing="200"
              >
                {pin.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
