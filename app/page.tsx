import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Projects from "@/components/Project";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white max-h-screen">
      <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          Hi, I'm <span className="text-purple-600">Srushti</span>
        </h1>
        <p className="mt-6 text-xl text-slate-400 max-w-3xl">
          Building scalable web applications and innovative solutions. Passionate about creating seamless user experiences and robust backend systems.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#projects" className="px-8 py-3 bg-purple-700 rounded-full font-bold">View Projects</a>
          <a href="#about" className="px-8 py-3 border border-slate-700 rounded-full font-medium">About Me</a>
        </div>
      </section>

      <About />
      <Projects />
      <Achievements/>
      <Footer/>
    </main>
  );
}