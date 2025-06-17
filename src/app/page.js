import Image from "next/image";

export default function Home() {
  return (
    <div
      className="container mx-auto  p-8 pb-20 sm:p-20
    font-[family-name:var(--font-geist-sans)]"
    >
      <div>
        <h1 className="text-4xl font-bold tracking-light">
          Software developer
        </h1>
        <p className="mt-6 text-xl text-gray-700 leading-8">
          Creating Responsive Websites for customers.
        </p>
        <div className="flex mt-10 gap-4">
          <button
            className="px-8 py-3 rounded-lg bg-purple-600
          text-white font-medium hover:bg-purple-500"
          >
            About Me
          </button>
          <button
            className="px-8 py-3 rounded-lg bg-purple-700 border

          border-gray-600
          text-white font-medium hover:bg-purple-500"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
