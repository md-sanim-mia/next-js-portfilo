import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function BlogDetails({ data }: { data: any }) {
  const { image, title } = data;
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1d21] to-[#212428] text-white">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-400 hover:text-[#ff014f] mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blogs
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>

            <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{data?.createdAt}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{10} min read</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span className="capitalize">{"web development "}</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={"title"}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            {/* <p className="text-lg leading-relaxed mb-6">{blog.excerpt}</p> */}

            {data?.description}
            <div className="border-t border-gray-800 pt-6 mt-12">
              <div className="flex flex-wrap gap-2">
                {/* {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-sm rounded-full hover:bg-[#ff014f] transition-colors"
                  >
                    #{tag}
                  </span>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
