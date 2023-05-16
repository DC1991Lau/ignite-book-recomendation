"use client";

import { LineChart, LogOut, Search, User } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import SidebarLink from "./SidebarLink";
import Image from "next/image";

import logo from "@/assets/Logo.svg";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="w-[232px] pt-10 pb-6 rounded-xl flex items-center flex-col justify-between bg-gradient-to-t from-[#0E1116] to-[#2A2879]">
      <div>
        <Image src={logo} alt="logo" height={32} className="mb-16" />
        <ul className="flex flex-col space-y-4">
          <SidebarLink href="/" icon={LineChart} title="Início" />
          <SidebarLink href="/explore" icon={Search} title="Explorar" />
          <SidebarLink
            href="/profile"
            icon={User}
            title="Perfil"
            // show={false}
          />
        </ul>
      </div>
      <div>
        <Link
          href={"/profile"}
          className="flex space-x-3 items-center text-grayscale-200 font-bold"
        >
          <span>Fazer Login</span>
          <LogOut size={20} className="text-green-100" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
