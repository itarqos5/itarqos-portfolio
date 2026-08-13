"use client";

const reviews = [
  {
    name: "JustIcyXD",
    text: "Great plugins, 9/10, quick speed & cooperative",
    avatar: "https://cdn.discordapp.com/avatars/1482323231267491881/d3c66b3f17ed09c7db5333593fd8f0fa.webp?size=1024",
  },
  {
    name: "Arctifyy",
    text: "Dude made me a custom sword plugin in less than 2 days! Super quick and great particles and lots of cool features, 9/10",
    avatar: "https://cdn.discordapp.com/avatars/1038856661688909885/52cd3e886c27b28fe8d8fabd6b49ae6f.webp?size=1024",
  },
  {
    name: "DashPum4",
    text: "Great mods and makes them very quickly! 9/10, very good developer.",
    avatar: "https://cdn.discordapp.com/avatars/287999428340613122/1c00577ee32fcc1f2172b1dd9324ddeb.webp?size=1024",
  },
  {
    name: "Ruby",
    text: "Literal was my developer and I would honestly say for customer service 5/5. Every time there was a problem or a new add literal would be really quick and do it instantly and very professionally.",
    avatar: "https://cdn.discordapp.com/avatars/1057059862414118982/aa2f938014f99984142a0a604a56ca26.webp?size=1024",
  },
  {
    name: "qbqmbiii",
    text: "Got a custom plugin built to extactly the way i wanted it and response time was reasonable and fast and the workers are very nice and know what they are doing! highly recommend",
    avatar: "https://cdn.discordapp.com/avatars/1356708595278020618/5eb0863afb4abf5b64f8db6445594167.webp?size=128",
  },
  {
    name: "Tokiodan",
    text: "Literal has made me very good plugins at a very good price and very quickly",
    avatar: "https://cdn.discordapp.com/avatars/1175249149441085441/cbeaf5f699d1a5f1e28251a3b73f2790.webp?size=1024",
  },
];

export default function ReviewsSection() {
  // Duplicate list to create a seamless infinite marquee loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="relative z-10 py-24 select-none overflow-hidden"
    >
      <h2 className="mb-4 text-center font-sans text-xs tracking-[0.3em] text-neutral-600 uppercase">
        Feedback
      </h2>
      <h2 className="mb-16 text-center font-serif text-3xl font-bold text-neutral-100">
        Reviews
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient fade overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#070708] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#070708] to-transparent z-20" />

        {/* Animated Row */}
        <div className="animate-marquee flex gap-6 px-4">
          {duplicatedReviews.map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className="w-[320px] md:w-[380px] shrink-0 rounded-2xl border border-white/5 bg-neutral-900/40 p-6 flex flex-col justify-between gap-6 hover:border-purple-500/30 hover:bg-neutral-900/70 shadow-lg shadow-black/40 hover:shadow-purple-900/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
            >
              <p className="font-serif italic text-sm md:text-base text-neutral-200 leading-relaxed">
                <span className="font-serif text-lg text-purple-400 font-bold mr-1">&ldquo;</span>
                {review.text}
                <span className="font-serif text-lg text-purple-400 font-bold ml-1">&rdquo;</span>
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-neutral-800 shrink-0 group-hover:ring-purple-500/50 transition-all duration-300">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-sans text-xs font-semibold text-neutral-200 truncate group-hover:text-purple-300 transition-colors">
                    {review.name}
                  </span>
                  <span className="font-sans text-[10px] text-neutral-500">
                    Verified Client
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}