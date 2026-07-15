"use client";

import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import Link from "next/link";

export default function AnimalList({ initialAnimals }) {
    const [animals, setAnimals] = useState(initialAnimals || []);
    const [sortOrder, setSortOrder] = useState("default");

    const handleSort = (order) => {
        const sorted = [...animals].sort((a, b) => {
            if (order === "low-to-high") return a.price - b.price;
            if (order === "high-to-low") return b.price - a.price;
            return 0;
        });
        setAnimals(sorted);
        setSortOrder(order);
    };

    const transitions = useTransition(animals, {
        key: (animal) => animal.id,
        from: { opacity: 0, transform: "translateY(20px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(-20px)" },
        config: { tension: 300, friction: 30 },
        trail: 20,
    });

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex justify-between mt-6">
                <div>
                    <h2 className="font-serif font-bold text-3xl text-[#1F2A24]">All Animals</h2>
                    <p className="text-sm text-[#6B675C]">{animals.length} animals available</p>
                </div>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 text-sm">Sort By: Featured</div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[#6B675C]">
                        <li><a onClick={() => handleSort("low-to-high")}>Price: Low to High</a></li>
                        <li><a onClick={() => handleSort("high-to-low")}>Price: High to Low</a></li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-10">
                {transitions((style, animal) => (
                    <animated.div style={style} key={animal.id}>
                        <div className="card bg-base-100 w-full shadow-sm">
                            <figure className="px-6 pt-6">
                                <img
                                    src={animal.image}
                                    alt={animal.name}
                                    className="rounded-xl w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-serif">{animal.name}</h2>
                                <p className="text-sm text-[#6B675C] font-serif">
                                    {animal.breed} &middot; {animal.location}
                                </p>
                                <p className="text-[#6B675C] text-sm mt-0">
                                    {animal.weight} &middot; {animal.age}
                                </p>
                                <p className="font-bold text-[#7A2E2A]">
                                    ৳ {animal.price ? animal.price.toLocaleString() : "N/A"}
                                </p>
                                <div className="card-actions">
                                    <Link href={`/animal/${animal.id}`} className="btn w-full font-serif hover:bg-[#1F2A24] hover:text-white"> <button >
                                        View Details
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                ))}
            </div>
        </div>
    );
}