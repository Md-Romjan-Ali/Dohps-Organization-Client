"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaEye, FaEyeSlash, FaGoogle, FaLock } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setErrors('');
        const form = e.currentTarget;

        const email = (form.email as HTMLInputElement).value;
        const password = (form.password as HTMLInputElement).value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        setLoading(false);
        if (error) {
            setErrors(error.message || 'Authentication failed. Please try again.');
            return;
        }

        router.push('/');
        console.log(data);
        form.reset();
    };
    const googleHandle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4 transition-colors duration-300">
            <div className="w-full max-w-md rounded-xl bg-white dark:bg-slate-900 p-8 shadow-lg border border-transparent dark:border-slate-800/60 transition-colors duration-300">
                <h1 className="text-center text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
                    Welcome Back
                </h1>

                <p className="mt-2 mb-8 text-center text-slate-500 dark:text-slate-400 text-sm">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Email Address
                        </label>

                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                required
                                disabled={loading}
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent py-3 pl-11 pr-4 text-slate-900 dark:text-white outline-none transition focus:border-blue-500 dark:focus:border-blue-400 disabled:opacity-60 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="********"
                                required
                                disabled={loading}
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

                    {/* Dynamic Error Messaging Output */}
                    {errors && (
                        <p className="text-sm font-medium text-red-500 dark:text-red-400 animate-fade-in bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-100 dark:border-red-900/50">
                            {errors}
                        </p>
                    )}

                    {/* Remember Me Box */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                            <input
                                type="checkbox"
                                disabled={loading}
                                className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500 dark:focus:ring-offset-slate-900 disabled:opacity-60"
                            />
                            Remember me
                        </label>
                    </div>

                    {/* Login Action Trigger */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-blue-600 dark:bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-[0.99] disabled:opacity-60 disabled:hover:bg-blue-600 disabled:cursor-not-allowed"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Grid Divider */}
                <div className="my-6 flex items-center">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                    <span className="mx-4 text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">OR</span>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                </div>

                {/* Social Strategy Link */}
                <button
                    onClick={googleHandle}
                    type="button"
                    disabled={loading}
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent py-3 font-medium text-slate-700 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-slate-800/50 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    <FaGoogle />
                    Continue with Google
                </button>

                {/* Redirect Footer */}
                <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    Don not have an account?{" "}
                    <Link
                        href="/register"
                        className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}