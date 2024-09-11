import React from "react";
import { GoHome } from "react-icons/go";
import { SiTrendmicro, SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight, FaYoutube } from "react-icons/fa";
import { SiYoutubestudio, SiYoutubekids, SiYoutubemusic } from "react-icons/si";
import { MdOutlineWatchLater, MdPodcasts } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight, PiLightbulbLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { SiStylelint } from "react-icons/si";
import { BiVideo } from "react-icons/bi";

function Sidebar() {
  const sidebarItems = [
    { id: 1, name: "Home", icon: <GoHome /> },
    { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
    { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
  ];

  const sidebarItems2 = [
    { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
    { id: 2, name: "History", icon: <MdHistory /> },
    { id: 3, name: "Playlists", icon: <MdOutlineSubscriptions /> },
    { id: 4, name: "Your Videos", icon: <BiVideo /> },
    { id: 5, name: "Watch later", icon: <MdOutlineWatchLater /> },
    { id: 6, name: "Liked videos", icon: <AiOutlineLike /> },
  ];

  const sidebarItems3 = [
    { id: 1, name: "Trending", icon: <SiTrendmicro /> },
    { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
    { id: 3, name: "Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
    { id: 5, name: "Live", icon: <CgMediaLive /> },
    { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
    { id: 7, name: "News", icon: <FaRegNewspaper /> },
    { id: 8, name: "Sport", icon: <TfiCup /> },
    { id: 9, name: "Courses", icon: <SiStylelint /> },
    { id: 10, name: "Fashion & beauty", icon: <PiLightbulbLight /> },
    { id: 11, name: "Podcasts", icon: <MdPodcasts /> },
  ];

  const sidebarItems4 = [
    { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
    { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
    { id: 3, name: "YouTube Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> },
  ];

  return (
    <div className=" w-full md:w-48 lg:w-60 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden px-2 md:px-4">
       {/* <div className="px-6 w-[17%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden "></div> */}

      {/* Home */}
      <div className="space-y-2 md:space-y-4">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 md:space-x-6 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition duration-300"
          >
            <div className="text-xl md:text-2xl">{item.icon}</div>
            <span className="text-sm md:text-base">{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />
      {/* You */}
      <div className="mt-4 space-y-2 md:space-y-4">
        <div className="flex items-center space-x-2 text-sm md:text-base font-semibold">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 md:space-x-6 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition duration-300"
          >
            <div className="text-xl md:text-2xl">{item.icon}</div>
            <span className="text-sm md:text-base">{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />
      {/* Explore */}
      <div className="mt-4 space-y-2 md:space-y-4">
        <div className="text-sm md:text-base font-semibold">
          <h1>Explore</h1>
        </div>
        {sidebarItems3.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 md:space-x-6 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition duration-300"
          >
            <div className="text-xl md:text-2xl">{item.icon}</div>
            <span className="text-sm md:text-base">{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />
      {/* More from YouTube */}
      <div className="mt-4 space-y-2 md:space-y-4">
        <div className="text-sm md:text-base font-semibold">
          <h1>More From YouTube</h1>
        </div>
        {sidebarItems4.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 md:space-x-6 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition duration-300"
          >
            <div className="text-xl md:text-2xl text-red-500">{item.icon}</div>
            <span className="text-sm md:text-base">{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />
      <span className="text-xs text-gray-600 font-semibold">
        About Press Copyright <br /> Contact us Creators <br /> Advertise
        Developers <br />
        <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works{" "}
        <br /> Test new features
      </span>
      <p className="text-xs text-gray-500 mt-3">© 2024 Learn Coding</p>
    </div>
  );
}

export default Sidebar;
