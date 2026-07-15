const featuredAnimals = [
    {
        "id": 1,
        "name": "Australian Friesian Cross",
        "type": "Cow",
        "breed": "Friesian Cross",
        "price": 220000,
        "weight": "420kg",
        "age": "4 yrs",
        "location": "Sirajganj",
        "description": "Imported breed cross cow, extra weight and high meat quality.",
        "image": "/image/australian.jpg",
        "category": "Large Animal"
    },
    {
        "id": 2,
        "name": "Totapari Goat",
        "type": "Goat",
        "breed": "Totapari",
        "price": 32000,
        "weight": "38kg",
        "age": "2 yrs",
        "location": "Jashore",
        "description": "Rare Totapari breed, tall structure, well suited for premium Qurbani.",
        "image": "/image/totapuri.jpg",
        "category": "Small Animal"
    },
    {
        "id": 3,
        "name": "Arabian Camel",
        "type": "Camel",
        "breed": "Arabian",
        "price": 420000,
        "weight": "620kg",
        "age": "6 yrs",
        "location": "Dhaka",
        "description": "Imported Arabian camel, huge size, ideal for 7-share Qurbani.",
        "image": "/image/arabian.jpg",
        "category": "Large Animal"
    },
    {
        "id": 4,
        "name": "Murrah Mohish",
        "type": "Buffalo",
        "breed": "Murrah",
        "price": 165000,
        "weight": "340kg",
        "age": "3 yrs",
        "location": "Barisal",
        "description": "Murrah breed buffalo, high meat yield, well maintained on natural feed.",
        "image": "/image/muraah.png",
        "category": "Large Animal"
    },
];

const FeaturedAnimals = () => {
    return (
        <div className="bg-white px-6 md:px-10 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="font-serif font-bold text-4xl text-[#1F2A24]">
                        Featured Animals
                    </h2>
                    <p className="font-mono text-sm text-[#6B675C]">
                        {String(featuredAnimals.length).padStart(2, "0")} listed
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredAnimals.map((animal) => (
                        <div
                            key={animal.id}
                            className="card bg-base-100 w-full shadow-sm"
                        >
                            <figure className="px-6 pt-6">
                                <img
                                    src={animal.image}
                                    alt={animal.name}
                                    className="rounded-xl w-full h-48 object-cover "
                                />
                            </figure>


                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-serif font-bold text-lg text-[#1F2A24]">
                                    {animal.name}
                                </h3>
                                <p className="text-sm text-[#6B675C] mt-1">
                                    {animal.breed} &middot; {animal.location}
                                </p>
                                <p className="text-sm text-[#6B675C]">
                                    {animal.weight} &middot; {animal.age}
                                </p>
                                <p className="font-bold text-[#7A2E2A] mt-2">
                                    ৳ {animal.price.toLocaleString()}
                                </p>

                                <button className="btn w-full mt-4 font-serif border border-[#1F2A24] bg-transparent hover:bg-[#1F2A24] hover:text-white">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedAnimals;