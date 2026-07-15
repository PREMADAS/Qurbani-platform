'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const NavbarPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    console.log({ data: session });

    const handleLogout = async () => {
        await authClient.signOut();
        router.push('/');
    };

    return (
        <div className="relative bg-white border-b border-black/10">
            <div className="flex items-center justify-between px-6 md:px-8 py-4">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#7A2E2A] flex items-center justify-center text-white font-serif font-bold text-base">
                        Q
                    </div>
                    <span className="font-serif font-bold text-xl text-[#1F2A24]">
                        Qurbani<span className="text-[#7A2E2A]">Hat</span>
                    </span>
                </Link>

                {/* Nav Links (desktop only) */}
                <div className="hidden md:flex items-center gap-7">
                    <Link href="/" className={`text-sm font-medium pb-1 border-b-2 ${pathname === "/"
                        ? "text-[#1F2A24] border-[#B9862E]"
                        : "text-[#6B675C] hover:text-[#1F2A24] border-transparent"
                        }`}>
                        Home
                    </Link>
                    <Link href="/animal" className={`text-sm font-medium pb-1 border-b-2 ${pathname === "/animal"
                        ? "text-[#1F2A24] border-[#B9862E]"
                        : "text-[#6B675C] hover:text-[#1F2A24] border-transparent"
                        }`}>
                        All Animals
                    </Link>
                </div>

                {/* Auth Section (desktop only) */}
                <div className="hidden md:flex items-center gap-2.5">
                    {isPending ? (
                        <div className="flex items-center justify-center px-4">
                            <span className="loading loading-spinner loading-md text-[#7A2E2A]"></span>
                        </div>
                    ) : session ? (
                        <div className="flex items-center gap-3">

                            <Link href="/profile" title="My Profile">
                                {session.user?.image ? (
                                    <img
                                        src={session.user.image}
                                        alt={session.user?.name || "User"}
                                        className="w-9 h-9 rounded-full object-cover border border-[#1F2A24]/20 hover:opacity-80 transition"
                                    />
                                ) : (
                                    <div className="w-9 h-9 rounded-full bg-[#7A2E2A] flex items-center justify-center text-white font-semibold text-sm hover:opacity-80 transition">
                                        {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                                    </div>
                                )}
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-sm font-semibold border border-[#1F2A24] text-[#1F2A24] rounded-sm hover:bg-[#1F2A24] hover:text-white transition"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link href="/auth/login" className="flex-1 px-4 py-2 text-sm font-semibold border border-[#1F2A24] text-[#1F2A24] rounded-sm hover:bg-[#1F2A24] hover:text-white ">
                                <button>Login</button>
                            </Link>
                            <Link href="/auth/register" className="px-4 py-2 text-sm font-semibold bg-[#7A2E2A] text-white rounded-sm hover:bg-[#5f2320] transition">
                                <button>Register</button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Hamburger Button (mobile only) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex items-center justify-center w-9 h-9 text-[#1F2A24]"
                >
                    {!isOpen ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden flex flex-col gap-1 px-6 pb-5 border-t border-black/10 bg-[#EEE3CC]`}>
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm font-medium text-[#1F2A24] border-b border-black/10"
                >
                    Home
                </Link>
                <Link
                    href="/animal"
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm font-medium text-[#6B675C] border-b border-black/10"
                >
                    All Animals
                </Link>

                {isPending ? (
                    <div className="flex items-center justify-center mt-4 py-2">
                        <span className="loading loading-spinner loading-md text-[#7A2E2A]"></span>
                    </div>
                ) : session ? (
                    <div className="flex items-center gap-3 mt-4">
                        <Link
                            href="/my-profile"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3"
                        >
                            {session.user?.image ? (
                                <img
                                    src={session.user.image}
                                    alt={session.user?.name || "User"}
                                    className="w-9 h-9 rounded-full object-cover border border-[#1F2A24]/20"
                                />
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-[#7A2E2A] flex items-center justify-center text-white font-semibold text-sm">
                                    {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                                </div>
                            )}
                            <span className="text-sm font-medium text-[#1F2A24]">My Profile</span>
                        </Link>

                        <button
                            onClick={() => { setIsOpen(false); handleLogout(); }}
                            className="ml-auto px-4 py-2 text-sm font-semibold border border-[#1F2A24] text-[#1F2A24] rounded-sm"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-2.5 mt-4">
                        <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                            <button className="flex-1 px-4 py-2 text-sm font-semibold border border-[#1F2A24] text-[#1F2A24] rounded-sm">
                                Login
                            </button>
                        </Link>
                        <Link href="/auth/register" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-semibold bg-[#7A2E2A] text-white rounded-sm hover:bg-[#5f2320] transition">
                            <button>Register</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavbarPage;