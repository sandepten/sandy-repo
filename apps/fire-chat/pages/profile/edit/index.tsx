import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera } from "phosphor-react";

const EditProfile: NextPage = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between py-8">
        <Link href="/profile">
          <ArrowLeft size={24} />
        </Link>
        <p className="text-xl font-semibold">Profile</p>
        <ArrowLeft size={24} color="rgb(229 231 235)" />
      </div>
      <div className="relative mx-auto mt-2 mb-8 w-fit">
        <Image
          src="/default-profile.jpg"
          alt="Profile image"
          width={100}
          height={100}
          className="h-24 w-24 rounded-[50%] bg-white object-cover p-1 shadow-xl shadow-gray-400/60"
        />
        <div className="absolute -top-2 -right-2 inline-block rounded-full border-4 border-white bg-purple-500 p-1.5">
          <Camera size={18} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
