import Image from "next/image";

import boy from "@/public/boy.png"
import lady from "@/public/lady.png"
import guy from "@/public/guy.png"

export default function Features() {
    return (
        <section  className="max-w-[94%] mx-auto pt-14 md:pt-20 text-[#001B1F]">
            <h2 className="text-2xl md:max-w-none md:text-4xl text-center font-bold mb-2">What you stand to benefit</h2>
            <p className="text-center text-lg">This is how our products work</p>
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-7">
                <div className="bg-white rounded-[20px] w-[330px] mx-auto max-w-[360px] p-[25px] py-[48px]">
                    <Image className="mx-auto" src={boy} alt="No more sapa" />
                    <h4 className="text-center text-[20px] font-bold mt-2">No more sapa</h4>
                    <p className="text-center mx-auto max-w-[250px] mt-1">In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.</p>
                </div>
                <div className="bg-white rounded-[20px] w-[330px] mx-auto max-w-[360px] p-[25px] py-[48px]">
                    <Image className="mx-auto" src={lady} alt="Beg" />
                    <h4 className="text-center text-[20px] font-bold mt-2">Beg</h4>
                    <p className="text-center mx-auto max-w-[250px] mt-1">In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.</p>
                </div>
                <div className="bg-white rounded-[20px] w-[330px] mx-auto max-w-[360px] p-[25px] py-[48px]">
                    <Image className="mx-auto" src={guy} alt="Send money" />
                    <h4 className="text-center text-[20px] font-bold mt-2">Send money</h4>
                    <p className="text-center mx-auto max-w-[250px] mt-1">In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.</p>
                </div>
            </section>
        </section>
    )
}