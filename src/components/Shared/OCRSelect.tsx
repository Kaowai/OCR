"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IOption } from "@/const/const";

interface IProps {
  onValueChange: (value: string) => void;
  defaultValue?: string;
  value?: string;
  options: IOption[];
}

export function OCRSelect({
  onValueChange,
  defaultValue,
  value,
  options,
}: IProps) {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(
    defaultValue || value || undefined
  );

  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };
  return (
    <Select
      defaultValue={defaultValue}
      value={selectedValue}
      onValueChange={handleValueChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {options?.length > 0 && (
          <SelectGroup>
            {options?.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
}
