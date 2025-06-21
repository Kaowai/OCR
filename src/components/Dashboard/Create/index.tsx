import OCRContainer from "@/components/Shared/OCRContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreateProjectPage = () => {
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
          Create Project
        </div>

        <form>
          <div>
            <label className="block text-sm mb-2 font-semibold">
              Project name: <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter project name"
              className="w-1/2 bg-white"
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm mb-2 font-semibold">
              Description:
            </label>
            <Textarea
              placeholder="Enter project name"
              className="w-1/2 bg-white min-h-[200px]"
            />
          </div>

          <div className="flex items-center gap-2 mt-6 w-1/2 justify-end">
            <Button
              type="submit"
              variant="secondary"
              className="border border-blue-500 bg-transparent hover:bg-blue-500 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </OCRContainer>
  );
};

export default CreateProjectPage;
