import React from 'react'

const TipsList = () => {
    return (
        <div className="bg-gray-200 px-6 md:px-10 py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif font-bold text-4xl text-[#1F2A24] mb-8">
                    Qurbani Tips
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 font-serif gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-md">
                        <p className="font-serif font-bold text-[#D89B3C]">01</p>
                        <h3 className="font-serif font-bold text-xl text-[#1F2A24] mt-3">
                            Check the age
                        </h3>
                        <p className="text-[#6B675C] mt-2">
                            Cows should be 2+ years, goats 1+ year to be valid for Qurbani.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-md">
                        <p className="font-serif font-bold text-[#D89B3C]">02</p>
                        <h3 className="font-serif font-bold text-xl text-[#1F2A24] mt-3">
                            Inspect health
                        </h3>
                        <p className="text-[#6B675C] mt-2">
                            Look for an active animal with a clean coat and steady appetite.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-md">
                        <p className="font-serif font-bold text-[#D89B3C]">03</p>
                        <h3 className="font-serif font-bold text-xl text-[#1F2A24] mt-3">
                            Book early
                        </h3>
                        <p className="text-[#6B675C] mt-2">
                            Good breeds sell out fast in the final week before Eid.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TipsList;