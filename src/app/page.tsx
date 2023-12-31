import Image from "next/image";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { feedVideos } from "./util/data";

export default function Home() {
  return (
    <div className="flex flex-col px-8 py-4 md:flex-row flex-wrap gap-10 lg:gap-4 flex-1">
      {feedVideos.map((video) => (
        <div key={video.id} className="flex flex-col gap-3 lg:w-[340px]">
          <div className="">
            <Image
              src={video.thumbnailUrl}
              height={180}
              width={340}
              alt="thumbnail"
              className="rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex gap-3">
            <div className="min-w-[40px] ">
              <Image
                src={video.channelThumbUrl}
                height={40}
                width={40}
                alt="user image"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="font-semibold text-white max-w-[80%] cursor-pointer hover:text-zinc-300">
                  {video.title}
                </span>
                <BsThreeDotsVertical />
              </div>
              <div className="text-sm text-zinc-400">
                <span className="cursor-pointer">{video.channelName}</span>
                <div className="flex items-center">
                  <span>{video.viewCount}</span>
                  <BsDot />
                  <span>{video.createdAt.toDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
