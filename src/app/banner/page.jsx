import Image from "next/image";
import Link from "next/link";


const BannerPage = () => {
    return (
        <div className="hero bg-white min-h-screen ">
            <div className=" hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 ">
                <Image
                    src="/image/picture.jpg"
                    alt="Qurbani cow"
                    width={500}
                    height={500}
                    className=" rounded-lg shadow-2xl"
                />
                <div>
                    <p className="text-sm font-serif text-[#7A2E2A] ">EID-UL-ADHA 2026 · BOOKING OPEN</p>
                    <p className="py-6 font-bold text-6xl text-[#1F2A24] tracking-tight">
                        Book your Qurbani <br />
                        animal, without <br />
                        leaving home.
                    </p>
                    <p className="text-[#6B675C]">Browse verified cows and goats from trusted farms across <br />Bangladesh. Compare weight, breed and price — then reserve in <br /> a few taps.</p>

                    <div className="mt-5 flex gap-3 font-serif">
                        <Link href="/animal"> <button className="btn btn-primary bg-[#7A2E2A]">Browse Animal</button></Link>
                        <button className="border btn text-sm pt-2 pl-2 pb-2 pr-2 ">See How It Works</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerPage;