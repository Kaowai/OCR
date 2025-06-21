"use client";

import OCRContainer from "@/components/Shared/OCRContainer";
import OCRDialog from "@/components/Shared/OCRDialog";
import OCRHeaderCellTable from "@/components/Shared/OCRHeaderCellTable";
import OCRTable from "@/components/Shared/OCRTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IProjectItem } from "@/const/const";
import { mockProjectItems } from "@/data/mock.data";
import { ITableHeader } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation"; // ✅ Dùng hook đúng cho App Router
import React from "react";

const ProjectDetail = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const getRows = () => {
    const headers: ITableHeader<IProjectItem>[] = [
      {
        label: "Name",
        renderRow: (data) => (
          <div className="text-sm py-2 flex items-center gap-4 text-start font-medium text-neutral-950">
            {data.name}
          </div>
        ),
        renderHeader: (label) => <OCRHeaderCellTable label={label} />,
      },
      {
        label: "Pages",
        renderRow: (data) => (
          <div className="text-sm py-2 flex items-center gap-4 text-start text-neutral-600">
            {data.pageNumber}
          </div>
        ),
        renderHeader: (label) => <OCRHeaderCellTable label={label} />,
      },
      {
        label: "Confidence Score",
        renderRow: (data) => (
          <div className="text-sm py-2 flex items-center gap-4 text-start text-neutral-600">
            {data?.confidenceScore !== undefined ? data?.confidenceScore : "--"}
          </div>
        ),
        renderHeader: (label) => <OCRHeaderCellTable label={label} />,
      },
      {
        label: "Status",
        renderRow: (data) => (
          <div className="text-sm py-2 flex items-center gap-4 text-start font-medium text-neutral-600">
            {data.status === "processing" ? (
              <div className="px-2 py-1 flex gap-2 items-center">
                <Image
                  src={"/icons/process.svg"}
                  height={16}
                  width={16}
                  alt="eye-icon"
                />
                Processing
              </div>
            ) : data.status === "failure" ? (
              <div className="px-2 py-1 flex gap-2 items-center">
                <Image
                  src={"/icons/fail.svg"}
                  height={16}
                  width={16}
                  alt="eye-icon"
                />
                Failure
              </div>
            ) : (
              <div className="px-2 py-1 flex gap-2 items-center">
                <Image
                  src={"/icons/wait.svg"}
                  height={16}
                  width={16}
                  alt="eye-icon"
                />
                Waiting
              </div>
            )}
          </div>
        ),
        renderHeader: (label) => <OCRHeaderCellTable label={label} />,
      },
      {
        label: "Upload At",
        renderRow: (data) => (
          <div className="text-sm py-2 flex items-center gap-4 text-start  text-neutral-600">
            {data.updatedAt.toLocaleString()}
          </div>
        ),
        renderHeader: (label) => <OCRHeaderCellTable label={label} />,
      },
      {
        label: "Updated",
        renderRow: (data) => (
          <div className="text-sm py-2 flex items-center gap-4 text-start  text-neutral-600">
            {data.updatedAt.toLocaleString()}
          </div>
        ),
        renderHeader: (label) => <OCRHeaderCellTable label={label} />,
      },

      {
        label: "Actions",
        renderRow: () => (
          <div className="text-sm py-2 flex items-center gap-2 text-start font-medium text-neutral-500">
            <Image
              src={"/icons/eye.svg"}
              height={16}
              width={16}
              alt="eye-icon"
              className="cursor-pointer"
            />
            <Image
              src={"/icons/download.svg"}
              height={16}
              width={16}
              alt="download-icon"
              className="cursor-pointer"
            />
            <Image
              src={"/icons/delete.svg"}
              height={16}
              width={16}
              alt="delete-icon"
              className="cursor-pointer"
            />
          </div>
        ),
        renderHeader: (label) => <OCRHeaderCellTable label={label} />,
      },
    ];
    return headers;
  };

  return (
    <OCRContainer>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 text-xl font-medium text-neutral-950 items-center mb-4">
          <Link href={"/project"}>
            <Image
              alt="back-icon"
              width={24}
              height={24}
              src={"/icons/back.svg"}
            />
          </Link>
          {name}
        </div>
      </div>
      <div className="bg-blue-700 px-10 py-3 pb-10 rounded-t-xl relative">
        <div className="w-full flex items-center gap-4">
          <div className="font-medium text-xs text-neutral-200 rounded-xl">
            Total documents: <span className="text-white">37 files</span>
          </div>
          <div className="font-medium text-xs text-neutral-200 rounded-xl">
            Total pages: <span className="text-white">37 pages</span>
          </div>
          <div className="font-medium text-xs text-neutral-200 rounded-xl">
            <Image
              src={"/icons/process.svg"}
              alt="process"
              width={16}
              height={16}
              className="inline-block"
            />{" "}
            Processing: <span className="text-white">0 pages</span>
          </div>
          <div className="font-medium text-xs text-neutral-200 rounded-xl">
            <Image
              src={"/icons/fail.svg"}
              alt="process"
              width={16}
              height={16}
              className="inline-block"
            />{" "}
            Failure: <span className="text-white">0 pages</span>
          </div>
          <div className="font-medium text-xs text-neutral-200 rounded-xl">
            <Image
              src={"/icons/wait.svg"}
              alt="process"
              width={16}
              height={16}
              className="inline-block"
            />{" "}
            Waiting for review: <span className="text-white">37 pages</span>
          </div>
          <div className="font-medium text-xs text-neutral-200 rounded-xl">
            <Image
              src={"/icons/check.svg"}
              alt="process"
              width={16}
              height={16}
              className="inline-block"
            />{" "}
            Verified: <span className="text-white">37 pages</span>
          </div>
        </div>
        <div className="absolute left-0 top-10 flex bg-white w-full rounded-xl">
          <div className=" flex flex-col gap-6 px-2 py-4 items-end w-full">
            <OCRDialog
              title="Upload file"
              trigger={
                <Button className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition">
                  Add files
                </Button>
              }
              classNameFooter="hidden"
            >
              {
                <div className="flex relative flex-col bg-blue-50 justify-center items-center gap-2 py-4 w-full border border-blue-500 border-dashed rounded-xl">
                  <label
                    htmlFor="file"
                    className="absolute w-full h-full"
                  ></label>
                  <Image
                    width={48}
                    height={48}
                    alt="cloud"
                    src={"/icons/cloud.svg"}
                  />
                  <Input
                    id="file"
                    type="file"
                    title=""
                    className="w-full absolute h-full hidden border-none  text-transparent"
                  ></Input>
                  <div className="text-neutral-950">
                    Drag or drop your file here or{" "}
                    <span className="text-blue-500">Browse file</span>
                  </div>
                  <div className="text-neutral-500">
                    File supported: pdf, jpg, png.
                  </div>
                </div>
              }
            </OCRDialog>

            <OCRTable headers={getRows()} data={mockProjectItems} />
          </div>
        </div>
      </div>
    </OCRContainer>
  );
};

export default ProjectDetail;
