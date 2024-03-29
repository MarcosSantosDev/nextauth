import Link from "next/link";
import { useEffect } from "react";

import useStore from "@/common/store/zustand/useStore";
import { useUserAuth } from "@/common/store/zustand/useUserAuth";

const Header = () => {
  const userAuth = useStore(useUserAuth, (state) => state);

  if (userAuth?.isAuthenticated) {
    return (
      <header className="h-20 px-4 flex justify-between items-center border-b-2 border-b-green-100">
        <h4 className="text-sm font-normal font-pressStart2P">
          Next.js Authentication
        </h4>

        <div className="flex justify-end items-center gap-10">
          <nav className="flex gap-4">
            <Link href='/metrics' className="font-bold underline">Metrics</Link>
            <Link href='/users' className="font-bold underline">Users</Link>
          </nav>

          <div className="flex justify-end items-center gap-2">
            <p className="text-black font-bold">{userAuth?.user?.email}</p>

            <div className="w-10 h-10 flex justify-center items-center bg-black rounded-full"/>

            <button
              type="button"
              className="w-fit h-10 px-4 py-1 text-gray-600 border-2 border-gray-600 rounded-md font-bold"
              onClick={() => userAuth?.signOut()}
            >
              Signout
            </button>
          </div>
        </div>
      </header>
    );
  }

  return null;
}

export default Header;