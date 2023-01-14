import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Chats, UserCircle, UsersThree } from "phosphor-react";
import { useEffect, useState } from "react";

interface Props {}
const BottomNavbar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [currentTab, setCurrentTab] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === null) {
      setCurrentTab("/");
    } else {
      setCurrentTab(pathname);
    }
  }, [pathname]);
  return (
    <div className="fixed bottom-0 flex w-full justify-around bg-white py-5">
      {/* <Heart color="#AE2983" weight="fill" size={32} /> */}
      <Link href="/contacts">
        <UsersThree
          onClick={() => {
            setCurrentTab("/contacts");
          }}
          size={32}
          color={`${currentTab === "/contacts" ? "rgb(126 34 206)" : "#000"}`}
        />
      </Link>
      <Link href="/">
        <Chats
          onClick={() => {
            setCurrentTab("/");
          }}
          size={32}
          color={`${currentTab === "/" ? "rgb(126 34 206)" : "#000"}`}
        />
      </Link>
      <Link href="/profile">
        <UserCircle
          onClick={() => {
            setCurrentTab("/profile");
          }}
          size={32}
          color={`${
            currentTab.includes("profile") ? "rgb(126 34 206)" : "#000"
          }`}
        />
      </Link>
    </div>
  );
};

export default BottomNavbar;
