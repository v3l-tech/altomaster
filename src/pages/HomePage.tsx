import Hero from '../components/sections/Hero';
import QuemSomos from '../components/sections/QuemSomos';
import NossaHistoria from '../components/sections/NossaHistoria';
import NossosServicos from '../components/sections/NossosServicos';
import EstruturaFrota from '../components/sections/EstruturaFrota';
import SetoresAplicacoes from '../components/sections/SetoresAplicacoes';
import OndeAtuamos from '../components/sections/OndeAtuamos';
import VamosTrabalharJuntos from '../components/sections/VamosTrabalharJuntos';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuemSomos />
      <NossaHistoria />
      <NossosServicos />
      <EstruturaFrota />
      <SetoresAplicacoes />
      <OndeAtuamos />
      <VamosTrabalharJuntos />
    </main>
  );
}
