import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="home">
        <Hero />
      </main>
    </>
  );
}
