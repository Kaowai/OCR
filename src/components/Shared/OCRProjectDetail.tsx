import Image from "next/image";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";

const OCRProjectDetail = () => {
  return (
    <div className="w-full h-full flex flex-col gap-1 mt-4 mb-6">
      <div className="flex gap-2">
        <div className="relative border p-2 border-blue-500 ring-3 ring-blue-300 rounded-lg w-fit">
          <div className="p-1 text-white text-xs bg-blue-800 rounded-sm absolute top-1 left-1">
            #1
          </div>
          <Image
            src={"/images/example.png"}
            alt="example"
            className="object-cover"
            width={48}
            height={64}
          />
        </div>
        <div className="relative border p-2 border-neutral-200 rounded-lg w-fit">
          <Image
            src={"/images/example.png"}
            alt="example"
            className="object-cover"
            width={48}
            height={64}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1 flex-shrink overflow-hidden mt-2">
        <ScrollArea className=" rounded-xl h-full flex items-center justify-center border border-neutral-200 p-4">
          <Image
            width={300}
            height={60}
            alt="image"
            src={"/images/example2.jpg"}
          />
        </ScrollArea>

        <ScrollArea className="rounded-xl border border-neutral-200 p-4">
          <div className="space-y-4">
            <h2 className="font-semibold text-base text-gray-800 mb-2">
              Final Result
            </h2>
            {[
              { label: "Table", value: "View", type: "button" },
              { label: "BATCH", value: "B-230829-47787" },
              { label: "PRODUCT_NAME", value: "Hexane(S)-SWE" },
              { label: "DATE", value: "Aug 29 2023 12:25AM" },
              { label: "Date Shipped", value: "08/31/2023" },
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-3 items-center gap-2">
                <div className="w-32 text-sm text-gray-600">{item.label}</div>
                {item.type === "button" ? (
                  <button className="text-sm text-blue-600 border border-blue-500 px-2 py-0.5 rounded hover:bg-blue-50">
                    {item.value}
                  </button>
                ) : (
                  <input
                    type="text"
                    defaultValue={item.value}
                    className="border border-gray-300 col-span-2 px-2 py-1 text-sm rounded w-full"
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default OCRProjectDetail;
