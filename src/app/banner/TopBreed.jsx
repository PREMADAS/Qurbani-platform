import React from 'react'

const TopBreed = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <h2 className="font-serif font-bold text-4xl text-[#1F2A24] mb-8">
                Top Breeds
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-200 p-6 rounded-md">
                    <h3 className="font-serif font-bold text-xl text-[#1F2A24]">
                        Shahiwal Cow
                    </h3>
                    <p className="text-[#6B675C] mt-2">
                        Hybrid cow breed with strong build and good weight gain.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-200 p-6 rounded-md">
                    <h3 className="font-serif font-bold text-xl text-[#1F2A24]">
                        Black Bengal
                    </h3>
                    <p className="text-[#6B675C] mt-2">
                        Compact goat breed, prized for tender meat quality.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-200 p-6 rounded-md">
                    <h3 className="font-serif font-bold text-xl text-[#1F2A24]">
                        Arabian Camel
                    </h3>
                    <p className="text-[#6B675C] mt-2">
                        Hardy desert breed, valued for its high meat yield and long lifespan.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopBreed;