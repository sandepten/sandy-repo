import type { NextPage } from "next";
import { useState } from "react";
import ContactCard from "../../components/ContactCard";

const Index: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold">Contacts</h1>
      <div className="flex items-center justify-between mt-4">
        <input
          type="text"
          placeholder="Search your contacts"
          className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-gray-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-5 py-6 px-2">
        <ContactCard
          name="Sandeep Kumar"
          image="/default-profile.jpg"
          lastTime="21:10"
        />
        <ContactCard
          name="Shivani"
          image="/default-profile.jpg"
          lastTime="09:15"
          chat={true}
          message="Hey, how are you?"
        />
      </div>
    </div>
  );
};

export default Index;
