import Link from "next/link";
import { Button } from "../ui/button";
// import ProfileMenu from "./ProfileMenu";
import { Suspense } from "react";
import { Nextjs } from "@/lib/Icons";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-xl flex h-20 items-center z-50 gap-4 w-full px-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Nextjs className="text-4xl" />
      </Link>
      <div className="flex w-full justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Link href="/">
          <Button size={"sm"} variant={"secondary"} className="text-xs">
            Home
          </Button>
        </Link>
        <Link href="/products">
          <Button size={"sm"} variant={"secondary"} className="text-xs">
            Products
          </Button>
        </Link>
        <Link href="/about-us">
          <Button size={"sm"} variant={"secondary"} className="text-xs">
            About Us
          </Button>
        </Link>
        <Link href="/contact-us">
          <Button size={"sm"} variant={"secondary"} className="text-xs">
            Contact Us
          </Button>
        </Link>
        <Link href="/signup">
          <Button size={"sm"} variant={"link"} className="text-xs">
            Signup
          </Button>
        </Link>
        <ModeToggle />
        <Suspense>
          {/* <ProfileMenu /> */}
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
