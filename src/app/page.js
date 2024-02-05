import AboutMe from "./components/AboutMe";
import Habilities from "./components/Habilities/Habilities";
import Header from "./components/Header";
import HomePage from "./components/Home";
import Proyects from "./components/Proyects/Proyects";

export default function Home() {
  return (
    <main className="relative flex min-h-screen min-w-full flex-col bg-fondo font-ChakraPetch">
      <Header className="fixed" />
      <section className="snap-start ">
        <HomePage />
      </section>
      <section className="snap-center ">
        <AboutMe />
      </section>
      <section className=" snap-center">
        <Proyects />
      </section>
      <section className="snap-start">
        <Habilities />
      </section>
    </main>
  );
}
