"use client";
import useSidebar from "@/hooks/useSidebar";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { sidebarItems } = useSidebar();
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#002a6d] text-white p-4 space-y-4 h-screen relative">
      {/* Logo */}
      <div className="text-xl font-bold mb-6">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image width={36} height={36} alt="icon" src={"/icons/icon.svg"} />
          <div className="">AkaOCR</div>
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-2">
        {sidebarItems?.map((item, idx) => {
          const isActive = pathname.includes(item.url);

          return (
            <Link
              key={idx}
              href={item.url || "#"}
              className={cn(
                "block px-3 py-2 rounded transition",
                isActive ? "bg-[#004aad] font-semibold" : "hover:bg-[#003a9d]"
              )}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Account */}
      <div className="absolute px-3 py-2 bottom-4 cursor-pointer hover:bg-[#003a9d] transition rounded flex gap-2 items-center">
        <Image
          height={32}
          width={32}
          src={"/images/avatar.jpg"}
          alt="avatar"
          className="rounded-full"
        />
        <div className="text-white text-xs truncate">hoainc2806@gmail.com</div>
      </div>
    </aside>
  );
}
