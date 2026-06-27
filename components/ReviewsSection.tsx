"use client";

const reviews = [
  {
    name: "JustIcyXD",
    text: "Great plugins, 9/10, quick speed & cooperative",
  },
  {
    name: "Arctifyy",
    text: "Dude made me a custom sword plugin in less than 2 days! Super quick and great particles and lots of cool features, 9/10",
  },
  {
    name: "DashPum4",
    text: "Great mods and makes them very quickly! 9/10, very good developer.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
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
            className="relative rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-6 flex flex-col gap-4 hover:border-neutral-700/60 transition-colors"
          >
            <p className="font-sans text-sm text-neutral-300 leading-relaxed italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="font-sans text-xs text-neutral-500 tracking-wide">
              — {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}