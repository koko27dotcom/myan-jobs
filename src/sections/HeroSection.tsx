interface Props {
  totalJobs: number
}

export default function HeroSection({ totalJobs }: Props) {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Find Your Dream Job in Myanmar
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Discover {totalJobs}+ opportunities from top companies
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Browse Jobs
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
            Refer a Friend
          </button>
        </div>
      </div>
    </section>
  )
}
