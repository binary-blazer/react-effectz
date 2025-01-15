"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GlitchText } from "react-effectz";

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-4 items-start select-none">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            draggable={false}
            priority
          />
          <GlitchText
            text="+ react-effectz"
            className="text-2xl sm:text-3xl mb-6"
            playOnLoop={false}
          />
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] -mt-4">
          <p className="mb-4">Run the development server of this example:</p>
          <code className="text-xs sm:text-sm bg-[#f2f2f2] dark:bg-[#1a1a1a] rounded-md p-2 sm:p-3">
            pnpm run dev
          </code>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="flex gap-2 items-center mt-8">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <div className="relative">
              <button
                className={`rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center ${dropdownOpen ? "bg-[#f2f2f2] dark:bg-[#1a1a1a] border-transparent" : "hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"} text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44`}
                onClick={toggleDropdown}
                onBlur={() => setDropdownOpen(false)}
              >
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-2 transition-transform transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 111.4-1.4L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-.7.3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute top-full mt-2 w-full bg-white py-2.5 dark:bg-[#1a1a1a] rounded-xl shadow-lg divide-y divide-black/[.08] dark:divide-white/[.145] border border-solid border-black/[.08] dark:border-white/[.145] z-10">
                <a
                  className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#f2f2f2] dark:hover:bg-[#383838]"
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read next.js docs
                </a>
                <a
                  className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#f2f2f2] dark:hover:bg-[#383838]"
                  href="https://github.com/binary-blazer/react-effectz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit react-effectz
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
