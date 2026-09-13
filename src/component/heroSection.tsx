import bannerImage from "../assets/banner-stack.png";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left-side Content Area */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto btn rounded-full px-8 py-3 text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 border-none shadow-md hover:opacity-95 transition-opacity font-medium">
                Explore Technologies
              </button>
              <button className="w-full sm:w-auto btn btn-outline rounded-full px-8 py-3 text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right-side Banner Image Area */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center">
            <img
              src={bannerImage}
              alt="Development Stack 3D Illustration"
              className="w-full h-auto object-contain max-h-112.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
