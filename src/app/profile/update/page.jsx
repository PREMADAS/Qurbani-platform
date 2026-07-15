"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const [name, setName] = useState(session?.user?.name || "");
    const [image, setImage] = useState(session?.user?.image || "");

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await authClient.updateUser({
                name,
                image,
            });

            if (error) {
                toast.error(error.message);
                return;
            }

            toast.success("Information Updated!");
            router.push("/profile");
        } catch (err) {
            console.error("update failed:", err);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md bg-gray-200 border border-[#1F2A24]/10 rounded-md p-8">
                <h1 className="font-serif font-bold text-2xl text-[#1F2A24] text-center">
                    Update your information
                </h1>

                <form onSubmit={handleUpdate} className="mt-8 flex flex-col gap-4">
                    <div>
                        <label className="text-sm font-medium text-[#1F2A24] mb-1 block">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            required
                            className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#1F2A24] mb-1 block">
                            Image URL
                        </label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://..."
                            className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-[#7A2E2A] text-white font-semibold text-sm py-2.5 rounded-sm hover:bg-[#5f2320] transition"
                    >
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;