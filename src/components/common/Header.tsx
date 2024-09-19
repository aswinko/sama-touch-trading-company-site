import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
// import { auth } from "@/auth";
// import ProfileDropDown from "./ProfileDropDown";
import { SVGProps } from "react";
import { Logo, LogoSmall } from "./LogoImg";

export default async function Component() {
  // const session = await auth();
  // console.log(session);

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 justify-between ">
      <Sheet>
        <SheetTrigger asChild className="flex">
          <Button variant="outline" size="icon" className="lg:hidden z-1">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-6 lg:flex pt-0 relative -top-6 z-0" prefetch={false}>
            {/* <MountainIcon className="h-6 w-6" /> */}
            {/* <img src={"/SAMA-FINAL-01.png"} className="w-8 h-8" alt="logo" /> */}
            <LogoSmall />
            <span className="sr-only">Sama Touch</span>
          </Link>
          <div className="grid gap-2 pb-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Products
            </Link>
            <Link
              href="/about-us"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contact Us
            </Link>
            {/* {!session?.user ? (
              // <Link
              //   className="flex w-full items-center py-2 text-lg font-semibold dark:text-primary dark:hover:text-primary"
              //   prefetch={false}
              // >
              <form
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <Button
                  className="flex w-full items-center py- font-semibold"
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
            ) : (
              // </Link>
              <ProfileDropDown />
            )} */}
          </div>
        </SheetContent>
      </Sheet>
      <div className="lg:hidden">
        <ModeToggle />
      </div>
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        {/* <MountainIcon className="h-6 w-6" /> */}
        {/* <img src={"/SAMA-white.png"} className="hidden dark:flex object-contain w-80 h-56" alt="logo" />
        <img src={"/SAMA-Final-02.png"} className="dark:hidden flex object-contain w-80 h-56" alt="logo" /> */}
        <Logo />

        <span className="sr-only">Sama Touch</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="/"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/products"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Products
        </Link>
        <Link
          href="/about-us"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Contact Us
        </Link>

        {/* {!session?.user ? (
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button
              className="flex w-full items-center py-2 font-semibold"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        ) : (
          <ProfileDropDown />
          // <form
          //   action={async () => {
          //     "use server";
          //     await signOut();
          //   }}
          // >
          //   <button type="submit">Log Out</button>
          // </form>
        )} */}
        <ModeToggle />
      </nav>
    </header>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

// function MountainIcon(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }
