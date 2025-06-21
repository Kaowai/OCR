"use client";

import { IProject } from "@/const/const";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Sửa tại đây
import React from "react";

interface IProps {
  item: IProject;
}

const OCRProjectItem = ({ item }: IProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/project/${item.id}?name=${encodeURIComponent(item.name)}`); // dùng query thủ công
  };

  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer transition hover:ring-1 hover:ring-neutral-500 flex-col bg-white p-4 gap-2 relative rounded-lg"
    >
      <div className="absolute p-1 top-2 right-2 z-10 bg-transparent hover:bg-neutral-300 transition rounded-full">
        <Image
          width={18}
          height={18}
          alt="icon-dot"
          src={"/icons/three-dots.svg"}
        />
      </div>
      <div className="p-2 bg-neutral-100 rounded-lg w-fit">
        <Image width={32} height={32} alt="item" src={"/icons/item.svg"} />
      </div>
      <div className="text-base font-medium text-neutral-950">{item.name}</div>
      <div className="text-xs text-neutral-500">
        ({item.amountItems}) file extracts
      </div>
    </div>
  );
};

export default OCRProjectItem;
