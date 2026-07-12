"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const form = e.currentTarget;

        const email = (form.email as HTMLInputElement).value;
        const password = (form.password as HTMLInputElement).value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });
        setLoading(false)
        if (error) {
            setErrors(error.message as string);
            return;
        }
        router.push('/')
        console.log(data);

        form.reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                <h1 className="text-center text-3xl font-bold text-slate-800">
                    Welcome Back
                </h1>

                <p className="mt-2 mb-8 text-center text-slate-500">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Email Address
                        </label>

                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                required
                                className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label className="text-sm font-medium">Password</label>

                            <Link
                                href="/forgot-password"
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="********"
                                required
                                className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-12 outline-none transition focus:border-blue-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <p className="text-lg text-red-600">{errors}</p>
                    {/* Remember Me */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-slate-600">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300"
                            />
                            Remember me
                        </label>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        {
                            loading ? 'login...' : 'Login'
                        }
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="h-px flex-1 bg-slate-300"></div>
                    <span className="mx-4 text-sm text-slate-500">OR</span>
                    <div className="h-px flex-1 bg-slate-300"></div>
                </div>

                {/* Social Login */}
                <button
                    type="button"
                    className="w-full rounded-lg border border-slate-300 py-3 font-medium transition hover:bg-slate-100"
                >
                    Continue with Google
                </button>

                {/* Register Link */}
                <p className="mt-6 text-center text-sm text-slate-600">
                    Do not have an account?{" "}
                    <Link
                        href="/register"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}