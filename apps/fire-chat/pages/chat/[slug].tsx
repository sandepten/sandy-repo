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
    <div className="py-6 relative">
      <div className="flex justify-between px-4">
        <Link href="/">
          <ArrowLeft size={24} />
        </Link>
        <Popover className="relative">
          <Popover.Button>
            <DotsThreeVertical size={32} />
          </Popover.Button>
          <Popover.Panel className="absolute top-0 right-0 w-40 bg-white rounded-lg shadow-lg p-4 space-y-3">
            <p>Clear chat</p>
            <p>Block contact</p>
            <p>Report contact</p>
          </Popover.Panel>
        </Popover>
      </div>
      <div className="flex justify-between px-6 items-center py-3">
        <div className="flex space-x-2 items-center">
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
      <div className="h-screen bg-gray-300">
        <div className="flex fixed bg-gray-200 gap-4 w-full justify-between px-4 py-3 bottom-[4.5rem] items-center">
          <Paperclip size={32} />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-gray-500"
          />
          <PaperPlaneTilt onClick={handleSendMessage} size={32} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
