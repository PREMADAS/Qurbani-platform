"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const { email, name, photo, password } = data;
            console.log("submitting...", data);

            const { data: userData, error } = await authClient.signUp.email({
                name,
                email,
                password,
                image: photo,
                callbackURL: "/auth/login",
            });

            console.log("response:", { userData, error });

            if (error) {
                toast.error(error.message);
            } else if (userData) {
                toast.success("Registration Successful!");
                router.push("/auth/login");
            }
        } catch (err) {
            console.error("signUp failed:", err);
            toast.error("Something went wrong. Please try again.");
        }
    };


    return (


        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md bg-gray-200 border border-black/10 rounded-sm p-8">
                {/* Title */}
                <h1 className="font-serif font-bold text-3xl text-[#1F2A24] text-center">
                    Create your account
                </h1>
                <p className="text-sm text-[#6B675C] text-center mt-2">
                    Register to book your Qurbani animal
                </p>

                {/* Form */}
                <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="text-sm font-medium  text-[#1F2A24] mb-1 block">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                            {...register("name", { required: "Name field is required", })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#1F2A24] mb-1 block">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                            {...register("email", { required: "Email field is required", })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#1F2A24] mb-1 block">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="https://..."
                            className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                            {...register("photo", { required: "Photo field is required", })}
                        />
                        {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#1F2A24] mb-1 block">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="At least 6 characters"
                            className="w-full border bg-white border-[#1F2A24]/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#7A2E2A]"
                            {...register("password", { required: "Password field is required", })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-[#7A2E2A] text-white font-semibold text-sm py-2.5 rounded-sm hover:bg-[#5f2320] transition"
                    >
                        Register
                    </button>
                </form>

                {/* Bottom link */}
                <p className="text-sm text-[#6B675C] text-center mt-6">
                    Already have an account? <a href="/auth/login" className="text-[#7A2E2A] font-medium hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
}



export default RegisterPage;