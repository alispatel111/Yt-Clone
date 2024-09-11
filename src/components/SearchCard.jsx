import React from 'react';
import Time from '../loader/Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';

function SearchCard({ video }) {
  console.log(video);

  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col md:flex-row mb-8 md:mb-6 p-4 md:p-4">
          <div className="relative flex h-48 w-full md:w-80">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={video?.thumbnails[0]?.url}
              alt={video?.title}
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0 overflow-hidden">
            <span className="text-lg md:text-xl font-semibold line-clamp-2">
              {video?.title}
            </span>
            <span className="text-sm line-clamp-2 mt-2 md:mt-4">
              {video?.descriptionSnippet}
            </span>
            <div className="flex items-center mt-4 md:hidden">
              <div className="flex items-start mr-3">
                <div className="flex h-8 w-8 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                    alt={video?.author?.title}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-[12px] ml-1" />
                  )}
                </span>
                <div className="flex text-sm font-semibold truncate overflow-hidden">
                  <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                  <span className="mx-1">.</span>
                  <span className="truncate">{video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="flex items-start mr-3">
                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                    alt={video?.author?.title}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-[12px] ml-1" />
                  )}
                </span>
                <div className="flex text-sm font-semibold truncate overflow-hidden">
                  <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                  <span className="mx-1">.</span>
                  <span className="truncate">{video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
