"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";

const AnimalDetailsPage = () => {
    const { id } = useParams();
    const { data: session } = authClient.useSession();

    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/db.json")
            .then((res) => res.json())
            .then((data) => {

                const animalsArray = data.animals || [];
                const found = animalsArray.find((item) => String(item.id) === String(id));

                setAnimal(found);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch animal:", err);
                setLoading(false);
            });
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        toast.success("Booking Successful!");
        e.target.reset();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-[#6B675C]">Loading...</p>
            </div>
        );
    }

    if (!animal) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-[#6B675C]">Animal not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white px-6 md:px-16 py-10">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Left: Image */}
                <div className="relative bg-gray-200 border border-[#1F2A24]/10 rounded-md h-[400px] p-4">
                    <span className="absolute top-4 right-4 bg-white border border-[#1F2A24]/20 rounded px-3 py-1 text-sm z-10">
                        ID · {String(animal.id).padStart(4, "0")}
                    </span>
                    <img
                        src={animal.image}
                        alt={animal.name}
                        className="w-full h-full rounded-md object-contain"
                    />
                </div>

                {/* Right: Details */}
                <div>
                    <h1 className="font-serif font-bold text-4xl text-[#1F2A24]">
                        {animal.name}
                    </h1>
                    <p className="text-[#6B675C] mt-1">
                        {animal.breed} · {animal.location}
                    </p>

                    <p className="text-[#7A2E2A] font-bold text-3xl font-mono mt-4">

                        ৳ {animal.price ? animal.price.toLocaleString() : "N/A"}
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-gray-200 border border-[#1F2A24]/10 rounded-md p-4">
                            <p className="text-xs text-[#6B675C] uppercase">Type</p>
                            <p className="font-bold text-lg text-[#1F2A24]">{animal.type}</p>
                        </div>
                        <div className="bg-gray-200 border border-[#1F2A24]/10 rounded-md p-4">
                            <p className="text-xs text-[#6B675C] uppercase">Weight</p>
                            <p className="font-bold text-lg text-[#1F2A24]">{animal.weight}</p>
                        </div>
                        <div className="bg-gray-200 border border-[#1F2A24]/10 rounded-md p-4">
                            <p className="text-xs text-[#6B675C] uppercase">Age</p>
                            <p className="font-bold text-lg text-[#1F2A24]">{animal.age}</p>
                        </div>

                        <div className="bg-gray-200 border border-[#1F2A24]/10 rounded-md p-4">
                            <p className="text-xs text-[#6B675C] uppercase">Location</p>
                            <p className="font-bold text-lg text-[#1F2A24]">{animal.location}</p>
                        </div>
                    </div>

                    <p className="text-[#4B473E] mt-6">{animal.description}</p>

                    {/* Booking Section */}
                    <div className="bg-gray-200 border border-[#1F2A24]/10 rounded-md p-6 mt-8">
                        <h2 className="font-serif font-bold text-xl text-[#1F2A24]">
                            Book this animal
                        </h2>

                        {!session ? (
                            <>
                                <p className="text-sm text-[#6B675C] mt-2 mb-4">
                                    Please log in to book this animal.
                                </p>
                                <Link
                                    href="/auth/login"
                                    className="block text-center bg-[#7A2E2A] text-white font-semibold py-3 rounded-sm hover:bg-[#5f2320] transition"
                                >
                                    Log in to Book
                                </Link>
                            </>
                        ) : (
                            <form onSubmit={handleBooking} className="flex flex-col gap-4 mt-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    required
                                    className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Delivery Address"
                                    required
                                    className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#7A2E2A] text-white font-semibold py-3 rounded-sm hover:bg-[#5f2320] transition cursor-pointer"
                                >
                                    Confirm Booking
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetailsPage;