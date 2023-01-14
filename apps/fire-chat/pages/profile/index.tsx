import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CaretRight,
  Copyright,
  Gear,
  Headset,
  SignOut,
  UserGear,
  XCircle,
} from "phosphor-react";

const Profile: NextPage = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between py-5 px-2">
        <span>FCHAT</span>
        <Link href="/">
          <XCircle size={32} />
        </Link>
      </div>
      <hr className="mx-auto w-[95%] bg-gray-600" />
      <div className="my-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/default-profile.jpg"
            alt="Profile image"
            width={100}
            height={100}
            className="h-12 w-12 rounded-[50%] object-cover"
          />
          <div className="flex flex-col space-y-0.5">
            <span className="text-sm text-gray-600">Welcome</span>
            <span className="font-medium">Sandeep Kumar</span>
          </div>
        </div>
        <SignOut size={28} />
      </div>
      <hr className="mx-auto w-[95%] bg-gray-600" />
      <div className="py-14 px-4">
        <Link href="/profile/edit">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <UserGear size={32} />
              <p className="text-lg font-medium">Profile</p>
            </div>
            <CaretRight size={20} />
          </div>
        </Link>
        <Link href="/profile/settings">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Gear size={32} />
              <p className="text-lg font-medium">Settings</p>
            </div>
            <CaretRight size={20} />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-between space-x-4 rounded-xl bg-gradient-to-r from-purple-300 to-purple-200 py-5 px-4">
        <div className="flex items-center space-x-4">
          <Headset size={45} color="rgb(126 34 206)" />
          <p className="text-lg font-semibold">How can we help you?</p>
        </div>
        <CaretRight size={25} color="rgb(126 34 206)" weight="bold" />
      </div>
      <div className="flex justify-between space-x-5 py-6">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium text-gray-600">Privacy Policy</p>
          <CaretRight size={18} color="rgb(75 85 99)" />
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium text-gray-600">Resources</p>
          <CaretRight size={18} color="rgb(75 85 99)" />
        </div>
      </div>
      <hr className="mx-auto w-[95%] bg-gray-600" />
      <div className="flex items-center justify-center space-x-1 py-6">
        <Copyright size={18} />
        <span className="text-sm text-gray-600">FCHAT</span>
        <span className="text-sm text-gray-600">2023</span>
      </div>
    </div>
  );
};

export default Profile;
