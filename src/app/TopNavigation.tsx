"use client";
import Image from "next/image";
import { BsYoutube, BsMicFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearch, BiVideoPlus } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
const TopNavigation = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-6">
        <HiOutlineMenu size={26} />
        <div className="flex items-center gap-2">
          <BsYoutube size={29} className="text-red-500" />
          <span className="text-xl">YouTube</span>
        </div>
      </div>
      <div className="hidden md:flex gap-2 min-w-[300px] xl:min-w-[600px]">
        <div className="flex w-full">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
            className="w-full bg-zinc-900 border-[1px] px-3 py-2 focus:ring-zinc-500 border-zinc-700 rounded-tl-full rounded-bl-full placeholder:text-zinc-500"
          />
          <div className="bg-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full flex items-center cursor-pointer">
            <BiSearch size={20} />
          </div>
        </div>
        <div className="flex items-center bg-zinc-800 p-3 rounded-full hover:bg-zinc-500 cursor-pointer">
          <BsMicFill size={20} />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center p-2 rounded-full hover:bg-zinc-500 cursor-pointer">
          <BiVideoPlus size={25} />
        </div>
        <div className="flex items-center p-2 rounded-full hover:bg-zinc-500 cursor-pointer">
          <FaBell size={20} />
        </div>
        <div>
          <Image
            className="rounded-full cursor-pointer"
            src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
            width={40}
            height={40}
            alt="elon"
          />
        </div>
      </div>
    </div>
  );
};
export default TopNavigation;
