import React from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./ListItems.jsx";

function Home() {
  const { data, loading } = useAuth();
  console.log(data);
  return (
    <div className="flex flex-col md:flex-row mt-20">
      {/* Sidebar will collapse on small screens */}
      <Sidebar />
      <div className="flex-1 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <ListItems />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {/* Conditional rendering based on loading state */}
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return null;
              return <Video key={item.id} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
