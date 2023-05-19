import cls from "libs/cls";
import { NextPage } from "next";
import Image from "next/image";

interface BubbleProps {
  message: string;
  avatar?: string;
  reversed?: boolean;
}

const ProfileAvatar = ({ avatar }: { avatar?: string }) => {
  if (avatar)
    return (
      <Image
        width={40}
        height={40}
        className="w-10 h-10 rounded-full bg-gray-200"
        src={`https://imagedelivery.net/bNh-NL16qgpnc_aca1vxPw/${avatar}/avatar`}
        alt="avatar"
      />
    );
  return <div className="w-10 h-10 rounded-full bg-gray-200" />;
};

const Bubble: NextPage<BubbleProps> = ({ message, reversed, avatar }) => {
  return (
    <div
      className={cls(
        "flex gap-2",
        !reversed ? "self-start justify-start" : "self-end justify-end"
      )}
    >
      {!reversed ? <ProfileAvatar avatar={avatar} /> : null}
      <div className="text-sm p-2 border rounded-lg max-w-[60%]">
        <p>{message}</p>
      </div>
      {reversed ? <ProfileAvatar avatar={avatar} /> : null}
    </div>
  );
};

export default Bubble;
