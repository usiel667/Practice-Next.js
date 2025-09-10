import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import Image from "next/image";

export default function Page() {
  return (
    // Use flex column to stack elements with logo centered and text at bottom
    <div className="min-h-screen flex flex-col bg-black">
      {/* Centered logo */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          priority={true}
          src="/next_white.svg"
          alt="Next.js Logo"
          width={400}
          height={200}
          //fill={true}
          className="w-auto h-auto max-w-sm max-h-64 drop-shadow-lg"
        />
      </div>

      {/* Copyright text at bottom center */}
      <div className="flex justify-center pb-8">
        <p className="text-sm text-gray-500">
          &copy; 2024 Tom's Next.js App. All rights reserved.
        </p>
      </div>
    </div>
  );
}
