import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  name: string;
  image: string;
  lastTime: string;
  chat?: boolean;
  message?: string;
}

const ContactCard: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { name, image, lastTime, chat, message } = props;
  const router = useRouter();
  const handleClick = () => {
    if (!chat) {
      return;
    }
    router.push(`/chat/${name}`);
  };
  return (
    <div
      onClick={handleClick}
      className="flex space-x-3 items-center justify-between"
    >
      <div className="flex space-x-3 items-center">
        <Image
          src={image}
          alt="Profile image"
          width={100}
          height={100}
          className="h-12 w-12 rounded-[50%] object-cover"
        />
        <div className="flex flex-col justify-center -space-y-1">
          <p className="text-lg">{name}</p>
          {chat && <p className="text-sm text-gray-600">{message}</p>}
        </div>
      </div>
      <p className="text-sm text-gray-600 justify-self-end">{lastTime}</p>
    </div>
  );
};

export default ContactCard;
