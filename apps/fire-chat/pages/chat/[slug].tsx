import { Popover } from "@headlessui/react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowLeft,
  DotsThreeVertical,
  MagnifyingGlass,
  Paperclip,
  PaperPlaneTilt,
} from "phosphor-react";
import { useState } from "react";

const Chat: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    console.log(message);
  };
  return (
    <div className="relative py-6">
      <div className="fixed top-0 w-full bg-gray-200 pt-3">
        <div className="flex justify-between px-4">
          <Link href="/">
            <ArrowLeft size={24} />
          </Link>
          <Popover className="relative">
            <Popover.Button>
              <DotsThreeVertical size={32} />
            </Popover.Button>
            <Popover.Panel className="absolute top-0 right-0 w-40 space-y-3 rounded-lg bg-white p-4 shadow-lg">
              <p>Clear chat</p>
              <p>Block contact</p>
              <p>Report contact</p>
            </Popover.Panel>
          </Popover>
        </div>
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-2">
            <Image
              src="/default-profile.jpg"
              alt="Profile image"
              width={100}
              height={100}
              className="h-12 w-12 rounded-[50%] object-cover"
            />
            <p className="text-lg font-medium">{slug}</p>
          </div>
          <MagnifyingGlass size={24} />
        </div>
      </div>
      <div className="h-screen bg-gray-300">
        <div className="fixed bottom-[4.5rem] flex w-full items-center justify-between gap-4 bg-gray-200 px-4 py-3">
          <Paperclip size={32} />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="w-full rounded-lg border-2 border-gray-300 py-2 px-4 focus:border-gray-500 focus:outline-none"
          />
          <PaperPlaneTilt onClick={handleSendMessage} size={32} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
