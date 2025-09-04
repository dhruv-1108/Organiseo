import { Button } from "@/components/button";
import { Medal } from "lucide-react";
import Link from "next/link";

// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex mb-4 items-center border shadow-sm p-4 bg-amber-100 text-amber-800 rounded-full uppercase space-x-2">
          <Medal className="h-6 w-6" /> No.1 Task Management App
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Organiseo: Build. Manage. Succeed.{" "}
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4 rounded-md pb-4 w-fit font-extrabold">
          progress tracked.
        </div>
        <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
          Collaborate on ideas, manage projects, and achieve your peak
          performance. Whether in the boardroom or the living room, your team
          works differently—orchestrate it all with Organiseo.
        </div>
        <Button className="mt-6" size="lg" asChild>
          <Link href={"/auth/login"}>Get Started - It's Free!</Link>
        </Button>
      </div>
    </div>
  );
}
