import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="home">
        <Hero />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
