import Image from "next/image";

import guy from "@/public/big-guy.png";
import tukay from "@/public/tukay.svg"

export default function Greet() {
  return (
    <section className="mt-16 md:mt-20 bg-[#00545F]">
      <div className="max-w-[94%] mx-auto justify-center flex flex-col lg:flex-row gap-5">
        <div className="lg:order-1 lg:w-1/2 pt-10 lg:pt-28">
          <Image src={tukay} width={100} height={100} alt="Tukay" className="mx-auto mb-6" />
          <h3 className="text-white text-4xl  w-full lg:text-6xl font-bold mx-auto text-center mb-4">Bros, I greet o</h3>
          <p className="text-white/70 text-center text-lg mx-auto">Howfa my urgent <br />"<span className="text-[#EBFFB7] font-semibold">tuks</span>", normal tukay na</p>
          <div className="flex justify-center items-center gap-5 mt-10 text-[#EBFFB7]">
            <div className="border border-white rounded-lg px-7 py-2">Playstore</div>
            <div className="border border-white rounded-lg px-7 py-2">Applestore</div>
          </div>
        </div>
        <div className="mx-auto">
          <Image src={guy} alt="The guy" width={600} height={500} />
        </div>
      </div>
    </section>
  );
}
