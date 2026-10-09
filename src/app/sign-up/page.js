import React from "react";
import Link from "next/link";

const SignupPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f1f6f1] px-4 py-10 text-[#202a23]">
      {/* Heading */}
      <div className="mb-7 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* Signup Card */}
      <div className="w-full max-w-md rounded-2xl border border-[#e2eae3] bg-[#fbfdfb] p-6 shadow-sm sm:p-8">
        <form className="space-y-2.5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              নাম
            </label>
            <input
              id="name"
              type="text"
              placeholder="আপনার সম্পূর্ণ নাম"
              required
              className="h-11 w-full rounded-lg border border-[#e2eae3] bg-transparent px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              ইমেইল
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="h-11 w-full rounded-lg border border-[#e2eae3] bg-transparent px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              type="password"
              placeholder="কমপক্ষে ৬ অক্ষর"
              minLength={6}
              required
              className="h-11 w-full rounded-lg border border-[#e2eae3] bg-transparent px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="আবার লিখুন"
              minLength={6}
              required
              className="h-11 w-full rounded-lg border border-[#e2eae3] bg-transparent px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-[#07883f] text-sm font-semibold text-white shadow-md transition hover:bg-[#067536] active:scale-[0.99]"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#e0e7e0]" />
          <span className="text-xs text-gray-500">অথবা</span>
          <div className="h-px flex-1 bg-[#e0e7e0]" />
        </div>

        {/* Social Signup */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#e2eae3] text-xs font-medium transition hover:bg-gray-100"
          >
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 bg-clip-text text-base font-bold text-transparent">
              G
            </span>
            Google দিয়ে সাইন আপ
          </button>

          <button
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#e2eae3] text-xs font-medium transition hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.76 2.07 3.87 1.43.1-.73.4-1.22.7-1.5-2.5-.28-5.12-1.25-5.12-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.33-2.62 5.28-5.13 5.56.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
            </svg>
            GitHub দিয়ে সাইন আপ
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/login"
            className="font-semibold text-green-700 hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      {/* Footer */}
      <p className="mt-7 pb-3 text-xs text-gray-400">— হোম পেজে ফিরে যান</p>
    </main>
  );
};

export default SignupPage;
