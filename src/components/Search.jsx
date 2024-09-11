import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/Rapidapi";
import Sidebar from "./Sidebar.jsx";
import SearchCard from "./SearchCard.jsx";

function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchData(`search/?q=${searchQuery}`)
      .then((res) => {
        console.log("API Response:", res); // Log the full API response
        setResult(res?.contents); // Make sure the contents exist in the response
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="mt-24 flex flex-col lg:flex-row h-[calc(100%-56px)]">
      {/* Sidebar for larger screens */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {result?.map((item, index) => {
            if (item?.type !== "video") return null;
            return <SearchCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
