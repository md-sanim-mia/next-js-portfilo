"use client";

import { useState } from "react";
import { Calendar, Clock, Heart, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BlogCard({ blog }: { blog: any }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1d21] to-[#212428] text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 h-full"
      )}
    >
      <div className="relative">
        <Image
          src={blog?.image || "/placeholder.svg"}
          alt={blog?.title}
          height={400}
          width={400}
          className={cn("w-full object-cover h-48")}
        />
        <div className="absolute top-4 left-4 bg-[#ff014f] text-white text-xs font-bold px-3 py-1 rounded-full">
          category
        </div>
      </div>

      <div className="p-6">
        <h3
          className={cn(
            "font-bold mb-3 hover:text-[#ff014f] transition-colors duration-300",
            "ext-xl"
          )}
        >
          {blog?.title}
        </h3>

        <p className="text-gray-300 mb-4 text-sm"> {blog?.description}</p>

        <div className="flex items-center mb-5">
          <Image
            src={"/placeholder.svg"}
            alt={"authorName"}
            height={400}
            width={400}
            className="w-10 h-10 rounded-full mr-3 border-2 border-[#ff014f]"
          />
          <div>
            <p className="font-medium">{"authorName"}</p>
            <div className="flex items-center text-xs text-gray-400">
              <Calendar className="w-3 h-3 mr-1" />
              <span className="mr-3">{blog?.createdAt}</span>
              <Clock className="w-3 h-3 mr-1" />
              <span>{5}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
          <button onClick={handleLike} className="flex items-center text-sm">
            <Heart
              className={cn(
                "w-4 h-4 mr-1 transition-colors",
                liked ? "fill-[#ff014f] text-[#ff014f]" : "text-gray-400"
              )}
            />
            <span className={cn(liked ? "text-[#ff014f]" : "text-gray-400")}>
              {likeCount}
            </span>
          </button>

          <button className="flex items-center text-sm text-gray-400 hover:text-[#ff014f] transition-colors">
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>18</span>
          </button>

          <button className="flex items-center text-sm text-gray-400 hover:text-[#ff014f] transition-colors">
            <Share2 className="w-4 h-4 mr-1" />
            <span>Share</span>
          </button>

          <button className="bg-gradient-to-r from-[#ff014f] to-[#ff5e7d] text-white text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
