import React from "react";
import { ITableHeader } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { OCRPagination } from "./OCRPagination";

export interface IProps<T extends { id: number }> {
  isHasChecked?: boolean;
  headers: ITableHeader<T>[];
  data: T[];
  className?: string;
  onChangeItemsSelected?: (selectedIds: number[]) => void;
}

const OCRTable = <T extends { id: number }>({
  isHasChecked = false,
  headers,
  data,
  className = "",
}: IProps<T>) => {
  return (
    <div className="flex flex-col w-full items-end justify-end gap-4">
      <Table
        className={`border-separate border-spacing-0 border h-full overflow-auto rounded-xl px-4 ${className}`}
      >
        <TableHeader className="sticky top-0 bg-white">
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index} className="rounded-bl-lg rounded-tl-lg">
                {header.renderHeader && header.renderHeader(header.label)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {isHasChecked && (
                <TableCell className="w-10 text-center"></TableCell>
              )}
              {headers.map((header, idx) => (
                <TableCell
                  key={idx}
                  className="border-b border-neutral/50 py-2 text-center"
                >
                  {header.renderRow && header.renderRow(item)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <OCRPagination></OCRPagination>
    </div>
  );
};

export default OCRTable;
