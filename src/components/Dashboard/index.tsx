"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import OCRContainer from "../Shared/OCRContainer";
import OCRProjectItem from "../Shared/OCRProjectItem";
import { listProjects } from "@/data/mock.data";

const Dashboard = () => {
  const [cardDisplay, setCardDisplay] = useState<"card" | "horizontal">("card");

  const handleChangeStyle = (value: "card" | "horizontal") => {
    if (cardDisplay === value) {
      return;
    }
    setCardDisplay(value);
  };
  return (
    <OCRContainer>
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-between">
          <div className="text-xl text-neutral-950 font-bold">Project (2)</div>
          <div className="flex items-center gap-2">
            <div className="bg-neutral-200 flex gap-1 items-center rounded-lg ">
              <button
                onClick={() => handleChangeStyle("card")}
                className="p-2 bg-transparent rounded-l-lg border-none outline-none hover:bg-neutral-300"
              >
                <Image
                  width={20}
                  height={20}
                  alt="card"
                  src={
                    cardDisplay === "card"
                      ? "/icons/card.svg"
                      : "/icons/disable-card.svg"
                  }
                />
              </button>
              <div className="w-[1px] h-4 bg-neutral-400"></div>
              <button
                onClick={() => handleChangeStyle("horizontal")}
                className="p-2 bg-transparent rounded-r-lg border-none hover:bg-neutral-300"
              >
                <Image
                  width={20}
                  height={20}
                  alt="card"
                  className="text-"
                  src={
                    cardDisplay === "horizontal"
                      ? "/icons/horizontal.svg"
                      : "/icons/disable-horizontal.svg"
                  }
                />
              </button>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 transition cursor-pointer">
              <Link href={"/project/create"}>Create project</Link>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 mt-6">
          {listProjects?.map((item) => (
            <OCRProjectItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </OCRContainer>
  );
};

export default Dashboard;
