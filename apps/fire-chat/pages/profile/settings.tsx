import type { NextPage } from "next";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";

const Settings: NextPage = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between py-8">
        <Link href="/profile">
          <ArrowLeft size={24} />
        </Link>
        <p className="text-xl font-semibold">Settings</p>
        <ArrowLeft size={24} color="rgb(229 231 235)" />
      </div>
      <div className="flex flex-col mt-10 space-y-4">
        <button className="bg-gray-700 text-white font-semibold py-2 w-full rounded-xl">
          Change Password
        </button>
        <button className="bg-red-500 text-white font-semibold py-2 w-full rounded-xl">
          Delete your Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
