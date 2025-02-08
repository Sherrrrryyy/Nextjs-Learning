import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";


export default function Home() {
  return (

    <div className="flex flex-col items-center min-h-screen p-8 pb-20">
     <Hero />
    </div>


  );
}
