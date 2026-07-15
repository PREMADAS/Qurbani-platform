import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 text-center">
            <h1 className="font-serif font-bold text-7xl text-[#7A2E2A]">404</h1>
            <h2 className="font-serif font-bold text-2xl text-[#1F2A24] mt-4">
                Page Not Found
            </h2>
            <p className="text-sm text-[#6B675C] mt-2 max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-6 bg-[#7A2E2A] text-white font-semibold text-sm px-6 py-2.5 rounded-sm hover:bg-[#5f2320] transition"
            >
                Back to Home
            </Link>
        </div>
    );
}