import React, { useState } from "react";
import Avatar from "react-avatar";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/youtube.png";
import profile from "../../public/profile.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="flex justify-between items-center fixed top-0 w-full bg-white px-4 py-2 shadow-md z-10">
      {/* Left Section: Menu and Logo */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <AiOutlineMenu className="text-2xl cursor-pointer" />
        <img src={logo} alt="YouTube Logo" className="w-24 md:w-28 cursor-pointer" />
      </div>

      {/* Middle Section: Search Bar */}
      <div className="hidden md:flex w-[35%] items-center">
        <div className="w-full px-4 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size="24px" />
        </button>
        <IoMdMic
          size="36px"
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>

      {/* Right Section: Icons */}
      <div className="flex space-x-4 md:space-x-6 items-center">
        <RiVideoAddLine className="text-xl md:text-2xl" />
        <AiOutlineBell className="text-xl md:text-2xl" />
        <Avatar src={profile} size="32" round />
      </div>
    </div>
  );
}

export default Navbar;
