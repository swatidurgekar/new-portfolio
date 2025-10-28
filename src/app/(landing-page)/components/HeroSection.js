"use client"
import { useState } from "react";
import Link from "next/link";

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);

    const HandleMouseMove = (e) => {
        if (!isHovering) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
    }

    return (
        <div className="relative"
            onMouseMove={HandleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <div className="pattern-background default-fade"
                style={{ opacity: isHovering ? 0 : 0.3 }}></div>
            <div className="pattern-background"
                style={{
                    WebkitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgb(15, 23, 42) 0%, transparent 35%)`,
                    mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgb(15, 23, 42) 0%, transparent 35%)`,
                    opacity: isHovering ? 0.3 : 0,
                    transition: `opacity 0.5s ease-in-out`
                }}

            ></div>
            <div className="opacity-10">
                <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-purple-700/50 rounded-full blur-3xl"></div>
                <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-purple-500/60 rounded-full blur-2xl"></div>
                <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-purple-400/70 rounded-full blur-xl"></div>
            </div>
            <h1 className="text-4xl font-bold tracking-light">
                Software developer
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-8">
                Creating Responsive Websites for customers.
            </p>
            <div className="flex mt-10 gap-4">
                <Link href={"/posts/3"}
                    className="px-8 py-3 rounded-lg bg-[var(--primary-500)]
          text-white font-medium hover:bg-[var(--primary-500)]"
                >
                    About Me
                </Link>
                <button
                    className="px-8 py-3 rounded-lg bg-slate-900 border
          border-gray-600
        font-medium hover:bg-[var(--primary-500)]"
                >
                    Contact Me
                </button>
            </div>
        </div>
    )
}

export default HeroSection;