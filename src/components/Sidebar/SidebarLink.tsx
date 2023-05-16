"use client";

import { Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface SidebarLinkProps {
  href: string;
  title: string;
  icon: Icon;

  show?: boolean;
}

const SidebarLink: FC<SidebarLinkProps> = ({
  show = true,
  title,
  href,
  icon: Icon,
}) => {
  const router = usePathname();

  return (
    <div className="relative h-[42px]">
      {router === href && (
        <div className=" absolute -left-4 top-0 h-[24px] bg-red-300 w-1 rounded-lg bg-gradient-to-t from-[#7FBDD1] to-[#9694F5]" />
      )}
      <Link href={href} className={`${!show && "hidden"}`}>
        <div
          className={`relative flex space-x-3 items-center ${
            router === href
              ? "text-grayscale-100 font-bold"
              : "text-grayscale-400"
          }  hover:text-grayscale-100 transition-colors
    }`}
        >
          <Icon />
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default SidebarLink;
