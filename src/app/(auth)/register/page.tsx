"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
interface Users {
    name: string,
    email: string,
    password: string
}
export default function RegisterPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries()) as unknown as Users

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,

        });
        console.log(data, error);
        setLoading(false)
        if (error) {
            setErrors(error.message as string)
            return;
        }
        router.push('/login')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-slate-800">
                    Create Account
                </h1>

                <p className="text-center text-slate-500 mt-2 mb-8">
                    Register to continue
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">Full Name</label>

                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Email Address
                        </label>

                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="example@gmail.com"
                                className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">Password</label>

                        <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="********"
                                className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-12 outline-none focus:border-blue-500"
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
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        {
                            loading ? 'Registering...' : 'Register'
                        }

                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-600">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}