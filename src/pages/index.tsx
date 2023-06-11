import MainCard from "@/components/card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex md:p-24 p-2 justify-center h-screen items-center bg-gray-950 text-white`}
    >
      <MainCard />
    </main>
  );
}
