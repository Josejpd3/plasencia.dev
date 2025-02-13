import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="home">
        <Hero />
        <TechStack />
      </main>
    </>
  );
}
