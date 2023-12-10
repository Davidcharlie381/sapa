import Link from "next/link";
import tukay from "@/public/tukay.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="max-w-[94%] mx-auto pt-3 md:pt-5">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={tukay} alt="Tukay logo" height={90} width={120} />
        </Link>
        <ul className="hidden md:flex gap-8 text-lg text-[#001B1F]">
          <Link
            href="#"
            className="hover:font-semibold hover:-rotate-12 duration-300"
          >
            Home
          </Link>
          <Link
            href="#service"
            className="hover:font-semibold hover:rotate-12 duration-300"
          >
            Service
          </Link>
          <Link
            href="#features"
            className="hover:font-semibold hover:-rotate-12 duration-300"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="hover:font-semibold hover:rotate-12 duration-300"
          >
            Contact
          </Link>
        </ul>
        <div className="hidden md:block mr-[1%] space-x-4">
          <button className="h-12 rounded-[15px] w-[120px] bg-[#00545F] text-white duration-300 hover:opacity-90">
            Login
          </button>
          <button className="h-12  hover:bg-[#00545F] hover:text-white rounded-[15px] w-[120px] border-[#00545F] border bg-transparent text-[#00545F] duration-300">
            Sign up
          </button>
        </div>
        <div className="md:hidden bg-green-900 h-5 w-5 mr-[2%]"></div>
      </nav>
      <section className=" flex flex-col md:flex-row mt-14">
        <div className="">
          <h1 className="text-4xl md:max-w-none md:text-6xl text-[#] text-center md:text-left font-bold">
            Get your urgent 2k
          </h1>
          <p className="text-center md:text-left text-lg max-w-[75%] mt-5 mx-auto md:mx-0 md:max-w-[90%]">
            No cash? No wahala. Get our application and deal with sapa.
          </p>
          <div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold tracking-wider">20K+</span>
              <small className="text-sm font-sans font-normal">Active users</small>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-light text-[##474747] tracking-wider">30M+</span>
              <small className="text-sm font-sans font-light text-[##474747]">Downloads</small>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </header>
  );
}
