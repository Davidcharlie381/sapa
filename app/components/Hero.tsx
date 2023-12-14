import Link from "next/link";
import tukay from "@/public/tukay.svg";
import Image from "next/image";
import couple from "@/public/couple.png"

export default function Hero() {
  return (
    <header className="max-w-[94%] mx-auto pt-3 md:pt-5">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={tukay} alt="Tukay logo" height={90} width={120} />
        </Link>
        <ul className="hidden md:flex gap-8 text-lg text-[#001B1F] mx-auto">
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
      <section className=" flex flex-col md:flex-row mt-14 md:mt-6 justify-between items-center">
        <div className="">
          <h1 className="text-4xl md:max-w-none md:text-6xl text-[#] text-center md:text-left font-bold">
            Get your urgent 2k
          </h1>
          <p className="text-center md:text-left text-lg max-w-[75%] mt-5 mx-auto md:mx-0 md:max-w-[90%]">
            No cash? No wahala. Get our application and deal with sapa.
          </p>
          {/* <div className="flex md:block"> */}
            <div className="flex justify-center md:justify-start gap-12 mt-5 md:mt-8 mb-6">
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl text-[#001B1F] font-bold tracking-wider">
                20K+
              </span>
              <small className="text-sm font-sans font-light text-[#474747]">
                Active users
              </small>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl text-[#001B1F] font-bold tracking-wider">
                30M+
              </span>
              <small className="text-sm font-sans font-light text-[#474747]">
                Downloads
              </small>
            </div>
          </div>
          <div className="flex gap-5 justify-center md:justify-start items-center">
            <button className="h-12 rounded-[15px] px-5 bg-[#00545F] text-white duration-300 hover:opacity-90">
              Get Started
            </button>
            <span className="text-[#00545F] flex gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9994 6.00003C8.68567 6.00003 5.99938 8.68632 5.99938 12C5.99938 15.3137 8.68567 18 11.9994 18C15.3131 18 17.9994 15.3137 17.9994 12C17.9994 8.68632 15.3131 6.00003 11.9994 6.00003ZM7.99938 12C7.99938 9.79089 9.79024 8.00003 11.9994 8.00003C14.2085 8.00003 15.9994 9.79089 15.9994 12C15.9994 14.2092 14.2085 16 11.9994 16C9.79024 16 7.99938 14.2092 7.99938 12Z"
                  fill="#00545F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5012 2.02893C13.1063 0.679484 10.8925 0.679484 9.49757 2.02893C9.14327 2.37168 8.65062 2.53175 8.16252 2.46271C6.24082 2.1909 4.44984 3.49213 4.11451 5.40377C4.02934 5.88931 3.72487 6.30838 3.2894 6.53943C1.57495 7.44907 0.890854 9.55451 1.7432 11.2982C1.95969 11.741 1.95969 12.259 1.7432 12.7019C0.890854 14.4456 1.57495 16.551 3.2894 17.4606C3.72487 17.6917 4.02934 18.1107 4.11451 18.5963C4.44984 20.5079 6.24083 21.8092 8.16252 21.5373C8.65062 21.4683 9.14327 21.6284 9.49757 21.9711C10.8925 23.3206 13.1063 23.3206 14.5012 21.9711C14.8555 21.6284 15.3481 21.4683 15.8362 21.5373C17.7579 21.8092 19.5489 20.5079 19.8843 18.5963C19.9694 18.1107 20.2739 17.6917 20.7094 17.4606C22.4238 16.551 23.1079 14.4456 22.2556 12.7019C22.0391 12.259 22.0391 11.741 22.2556 11.2982C23.1079 9.5545 22.4238 7.44907 20.7094 6.53943C20.2739 6.30838 19.9694 5.88931 19.8843 5.40377C19.5489 3.49213 17.7579 2.1909 15.8362 2.46271C15.3481 2.53175 14.8555 2.37168 14.5012 2.02893ZM10.8882 3.46638C11.5077 2.867 12.491 2.867 13.1106 3.46638C13.9083 4.23805 15.0174 4.59844 16.1163 4.443C16.9699 4.32227 17.7654 4.90023 17.9143 5.74932C18.1061 6.84248 18.7916 7.78598 19.772 8.30615C20.5335 8.71019 20.8373 9.64535 20.4587 10.4198C19.9713 11.4169 19.9713 12.5831 20.4587 13.5802C20.8373 14.3547 20.5335 15.2899 19.772 15.6939C18.7916 16.2141 18.1061 17.1576 17.9143 18.2507C17.7654 19.0998 16.9699 19.6778 16.1163 19.5571C15.0174 19.4016 13.9083 19.762 13.1106 20.5337C12.491 21.1331 11.5077 21.1331 10.8882 20.5337C10.0905 19.762 8.98134 19.4016 7.88242 19.5571C7.02887 19.6778 6.23337 19.0998 6.08443 18.2507C5.89268 17.1576 5.20718 16.2141 4.22678 15.6939C3.46528 15.2899 3.16143 14.3547 3.54001 13.5802C4.02742 12.5831 4.02742 11.4169 3.54001 10.4198C3.16143 9.64535 3.46528 8.71019 4.22678 8.30615C5.20718 7.78598 5.89268 6.84248 6.08443 5.74932C6.23337 4.90024 7.02887 4.32227 7.88242 4.443C8.98134 4.59844 10.0905 4.23805 10.8882 3.46638Z"
                  fill="#00545F"
                />
              </svg>
              How it Works
            </span>
          </div>
          {/* </div> */}
          
        </div>
        <div className="md:-mr-[3%]"><Image src={couple} alt="Couple" height={500} width={600} />
        </div>
      </section>
    </header>
  );
}
