import Image from "next/image";
import Link from "next/link";





export default function Home() {
  return (

    <div className="flex flex-col items-center min-h-screen p-8 pb-20">
      <h1 className="text-5xl font-bold">
        Hello World
      </h1>
      <Link href={"/dashboard"}>
        <button className="bg-purple-300 p-2 m-2 px-4 rounded text-white text-center">
          Dashboard
        </button>
      </Link>

      <Link href={"/about"}>
        <button className="bg-purple-300 p-2 m-2 px-4 rounded text-white text-center">
          About
        </button>
      </Link>


      <Link href={"/blogs"}>
        <button className="bg-purple-300 p-2 m-2 px-4 rounded text-white text-center">
          Blogs
        </button>
      </Link>


      <Link href={"/contact"}>
        <button className="bg-purple-300 p-2 m-2 px-4 rounded text-white text-center">
          Contact
        </button>
      </Link>
    </div>


  );
}
