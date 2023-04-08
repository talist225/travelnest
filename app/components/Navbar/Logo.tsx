"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="logo md:block cursor-pointer"
      height="200"
      width="300"
      src="/images/Logo2.png"
    />
  );
};

export default Logo;
