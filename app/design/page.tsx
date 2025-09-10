import Link from "next/link";
//import styles from "./page.module.css";
import Image from "next/image";

export default function Design() {
  // throw new Error("Not today Satan");
  return (
    <div className="min-h-screen bg-black">
      <main className="flex flex-col items-center justify-center min-h-screen text-center text-white">
        <Image
          className="mx-auto mb-8"
          priority={true}
          src="/web-design.png"
          alt="Web Design Logo"
          width={600}
          height={400}
        />
        <p className="mb-2 text-custom-orange">
          This is the design page of Tom's Next.js App.
        </p>
        <p className="mb-4 text-custom-orange">
          Here you can find the various desing elements and new techniques I am
          learning.
        </p>
        <Link
          href="/"
          className="mt-1 block text-lg leading-tight font-medium text-indigo-500 hover:underline mb-16"
        >
          Link to Home Page
        </Link>
        <Image
          className="mx-auto mb-8"
          priority={true}
          src="/Symbol%20Alternative.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
        />

        {/* DESIGN Card positioned below the Symbol Alternative.svg */}

        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg mt-8">
          <div className="flex flex-col">
            <div className="w-full">
              <img
                className="h-64 w-full object-cover"
                src="/AdobeStock.png"
                alt="Adobe Stock Design Image"
              />
            </div>
            <div className="p-8">
              <div className="text-sm font-semibold tracking-wide text-custom-orange uppercase">
                DESIGN ELEMENTS
              </div>
              <a
                href="/design/beginning"
                className="mt-1 block text-lg leading-tight font-medium text-indigo-500 hover:underline"
              >
                The beginning of a beautiful design system
              </a>
              <p className="mt-2 text-gray-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card - Empty */}

        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg mt-8">
          <div className="flex flex-col">
            <div className="w-full">
              {/* Empty space for future image */}
              <div className="h-64 w-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">
                  Placeholder for future content
                </span>
              </div>
            </div>
            <div className="p-8">
              {/* Empty content area ready for future use */}
              <div className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                COMING SOON
              </div>
              <div className="mt-1 block text-lg leading-tight font-medium text-gray-400">
                Future content placeholder
              </div>
              <p className="mt-2 text-gray-400">
                This card is ready for your future content. You can add images,
                text, links, and any other elements you need.
              </p>
            </div>
          </div>
        </div>

        {/* Third Card - Different Layout */}

        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg mt-8">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/heart-squared-front.jpg"
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="text-sm font-semibold tracking-wide text-custom-orange uppercase">
                Company retreats
              </div>
              <a
                href="#"
                className="mt-1 block text-lg leading-tight font-medium text-indigo-500 hover:underline"
              >
                Incredible accommodation for your team
              </a>
              <p className="mt-2 text-gray-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-16 text-sm text-gray-500">
          &copy; 2024 Tom's Next.js App. All rights reserved.
        </p>
      </main>
    </div>
  );
}
