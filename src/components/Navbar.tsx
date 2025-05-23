import { SignedIn, UserButton } from "@clerk/nextjs";
import { BriefcaseIcon } from "lucide-react";
import Link from "next/link";
import DashboardBtn from "./DashboardBtn";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
      href="/"
      className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
    >
      <BriefcaseIcon className="w-8 h-8 text-blue-500" />
      <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
        Intervak
      </span>
    </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DashboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;