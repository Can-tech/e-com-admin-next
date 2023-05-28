"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <main className=" bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className=" bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <>
          Signed in as {session.user.email} <br />
          <button
            onClick={() => signOut()}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Sign out
          </button>
        </>
      </div>
    </main>
  );
}
