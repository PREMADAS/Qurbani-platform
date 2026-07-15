"use client";
import { authClient } from "@/lib/auth-client";

const MyProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-[#6B675C]">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md bg-[#F7F2E7] border border-[#1F2A24]/10 rounded-md p-10 flex flex-col items-center text-center">
                {user.image ? (
                    <img
                        src={user.image}
                        alt={user.name}
                        className="w-24 h-24 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-24 h-24 rounded-full bg-[#1F2A24] flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">
                            {user.name?.charAt(0).toUpperCase()}
                        </span>
                    </div>
                )}

                <h2 className="font-serif font-bold text-2xl text-[#1F2A24] mt-5">
                    {user.name}
                </h2>
                <p className="text-[#6B675C] mt-1">{user.email}</p>
            </div>
        </div>
    );
};

export default MyProfilePage;