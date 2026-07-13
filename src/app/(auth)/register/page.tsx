"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface Users {
    name: string;
    email: string;
    password: string;
}

export default function RegisterPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setErrors('');
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as unknown as Users;

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
        });

        console.log(data, error);
        setLoading(false);

        if (error) {
            setErrors(error.message || 'An error occurred during registration.');
            return;
        }

        router.push('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4 transition-colors duration-300">
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-transparent dark:border-slate-800/60 transition-colors duration-300">
                <h1 className="text-3xl font-bold text-center text-slate-800 dark:text-white tracking-tight">
                    Create Account
                </h1>

                <p className="text-center text-slate-500 dark:text-slate-400 mt-2 mb-8 text-sm">
                    Register to continue
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                            <input
                                type="text"
                                name="name"
                                required
                                disabled={loading}
                                placeholder="John Doe"
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent py-3 pl-11 pr-4 text-slate-900 dark:text-white outline-none transition focus:border-blue-500 dark:focus:border-blue-400 disabled:opacity-60 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                            Email Address
                        </label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                            <input
                                type="email"
                                name="email"
                                required
                                disabled={loading}
                                placeholder="example@gmail.com"
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent py-3 pl-11 pr-4 text-slate-900 dark:text-white outline-none transition focus:border-blue-500 dark:focus:border-blue-400 disabled:opacity-60 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                disabled={loading}
                                placeholder="********"
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent py-3 pl-11 pr-12 text-slate-900 dark:text-white outline-none transition focus:border-blue-500 dark:focus:border-blue-400 disabled:opacity-60 disabled:cursor-not-allowed"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                disabled={loading}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Dynamic Error Container */}
                    {errors && (
                        <p className="text-sm font-medium text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-100 dark:border-red-900/50">
                            {errors}
                        </p>
                    )}

                    {/* Submit Registration */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-blue-600 dark:bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>

                {/* Redirect Footer */}
                <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}