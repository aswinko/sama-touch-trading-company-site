"use client"; // This makes the component a Client Component

import { signOut } from "@/auth"; // Make sure this correctly handles the sign-out

const SignOutButton = () => {
  
  return (
    <button onClick={() => signOut()}>Sign Out</button>
  );
};

export default SignOutButton;
