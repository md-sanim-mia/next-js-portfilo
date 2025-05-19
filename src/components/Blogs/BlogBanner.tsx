export function BlogBanner() {
  return (
    <div className="relative bg-gradient-to-r from-[#1a1d21] to-[#212428] border-b border-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our <span className="text-[#ff014f]">Blog</span>
          </h1>
          <p className="text-xl text-gray-300">
            Discover the latest insights, tutorials, and news from the world of
            development
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-10 w-20 h-20 rounded-full bg-[#ff014f] opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#ff014f] opacity-5 blur-3xl"></div>
    </div>
  );
}
