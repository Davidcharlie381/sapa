// import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Greet from "./components/Greet";
import Notes from "./components/Notes";

export default function Home() {
  return (
    <main className="bg-[#EBFFB7]">
        
        <Hero />
        <Features />
        <Greet />
        <Notes />
    </main>
  );
}
