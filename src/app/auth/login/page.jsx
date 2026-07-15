"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
    const router = useRouter();

    const handleLoginFunc = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
                rememberMe: true,
                callbackURL: "/",
            });

            if (error) {
                toast.error(error.message);
                return;
            }

            if (data) {
                toast.success("Login Successful!");
                router.push("/");
            }
        } catch (err) {
            console.error("signIn failed:", err);
            toast.error("Something went wrong. Please try again.");
        }
    };

    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }



    return (
        <div>
            <h2 className="font-serif font-bold text-2xl text-center mt-5">Login your account</h2>
            <fieldset className="fieldset mx-auto bg-gray-200 border-base-300 rounded-box w-xs border p-4 mt-5 flex justify-center items-center mb-10">

                <form onSubmit={handleLoginFunc}>

                    <label className="label mt-3">Email</label>
                    <input type="email" className="input mt-1 mb-2" placeholder="Enter your email" name="email" required />

                    <label className="label mt-1">Password</label>
                    <input type="password" className="input mt-1" placeholder="Enter your password" name="password" required />

                    <button type="submit" className="btn btn-neutral w-full mt-4">Login</button>

                    {/* Register Link */}
                    <p className="text-sm text-center mt-3">
                        Don't have an account?{" "}
                        <a href="/auth/register" className="link link-primary font-medium">
                            Register
                        </a>
                    </p>

                    {/* Divider */}
                    <div className="divider text-xs text-gray-500">OR</div>

                    {/* Google Social Login Button */}
                    <button type="button" className="btn btn-outline w-full flex items-center justify-center gap-2" onClick={handleGoogle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        Continue with Google
                    </button>

                </form>
            </fieldset>
        </div>
    );
};

export default LoginPage;