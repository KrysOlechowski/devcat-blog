import Image from "next/image";

export default function HillsGroup() {
  return (
    <div className="mx-auto max-wdith-[1080px] ">
      <Image
        src="/images/HILLS_GROUP_1.svg"
        alt="Hills group"
        width={1084}
        height={997}
        // className="absolute bottom-0 left-0 h-auto w-full"
        priority
      />
    </div>
  );
}
