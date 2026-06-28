"use client";

const reviews = [
  {
    name: "JustIcyXD",
    text: "Great plugins, 9/10, quick speed & cooperative",
    avatar: "https://cdn.discordapp.com/avatars/1482323231267491881/8380ca513f3331044d038d81732fff50.webp?size=1024",
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
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-24 select-none"
    >
      <h2 className="mb-4 text-center font-sans text-xs tracking-[0.3em] text-neutral-600 uppercase">
        Feedback
      </h2>
      <h2 className="mb-16 text-center font-serif text-3xl font-bold text-neutral-100">
        Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="relative rounded-2xl border border-white/5 bg-neutral-900/20 p-6 flex flex-col justify-between gap-6 hover:border-white/10 hover:bg-neutral-900/30 hover:-translate-y-1 shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300"
          >
            <p className="font-sans text-sm text-neutral-300 leading-relaxed italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-neutral-800/80 shrink-0">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-sans text-xs font-semibold text-neutral-200 truncate">
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
    </section>
  );
}