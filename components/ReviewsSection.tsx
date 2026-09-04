"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const reviews = [
  { name: "JustIcyXD", text: "Great plugins, 9/10, quick speed & cooperative", avatar: "https://cdn.discordapp.com/avatars/1482323231267491881/d3c66b3f17ed09c7db5333593fd8f0fa.webp?size=1024" },
  { name: "Arctifyy", text: "Dude made me a custom sword plugin in less than 2 days! Super quick and great particles and lots of cool features, 9/10", avatar: "https://cdn.discordapp.com/avatars/1038856661688909885/52cd3e886c27b28fe8d8fabd6b49ae6f.webp?size=1024" },
  { name: "DashPum4", text: "Great mods and makes them very quickly! 9/10, very good developer.", avatar: "https://cdn.discordapp.com/avatars/287999428340613122/1c00577ee32fcc1f2172b1dd9324ddeb.webp?size=1024" },
  { name: "Ruby", text: "Literal was my developer and I would honestly say for customer service 5/5. Every time there was a problem or a new add literal would be really quick and do it instantly and very professionally.", avatar: "https://cdn.discordapp.com/avatars/1057059862414118982/aa2f938014f99984142a0a604a56ca26.webp?size=1024" },
  { name: "qbqmbiii", text: "Got a custom plugin built to extactly the way i wanted it and response time was reasonable and fast and the workers are very nice and know what they are doing! highly recommend", avatar: "https://cdn.discordapp.com/avatars/1356708595278020618/5eb0863afb4abf5b64f8db6445594167.webp?size=128" },
  { name: "Tokiodan", text: "Literal has made me very good plugins at a very good price and very quickly", avatar: "https://cdn.discordapp.com/avatars/1175249149441085441/cbeaf5f699d1a5f1e28251a3b73f2790.webp?size=1024" },
  {
    name: "wSmoothie",
    text: "in like 3 weeks he’s done significant work on all 4 projects, additionally multiple backend repos. I ended up giving literal work to do on my projects not because he applied to be a dev, but because he reached out to me how I can fix an issue with wwaypoints. The issue itself wasn’t that big of a deal but his expertise was immediately clear in vc that he’s expecerienced in a ton of languages and use cases",
    avatar: "https://cdn.discordapp.com/avatars/526816781029998608/2bfc5b582f36128338b03be1019d7af5.webp?size=1024",
    href: "https://wsmoothie.com/mods",
  },
  {
    name: "Seltop",
    text: "Very good work, I hired him for a deal and he's shown that he's very experienced with everything he's doing.",
    avatar: "https://cdn.discordapp.com/avatars/316546939481096192/a_6c6a7e54417dd7801b66ed2c931f7432.webp?size=1024&animated=true",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section-shell section-line">
      <h2 className="section-heading">Client reviews</h2>
      <div className="mt-20 grid border-t border-white/20 md:grid-cols-2">
        {reviews.map((review, index) => (
          <motion.figure key={review.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }} className={`flex min-h-72 flex-col justify-between border-b border-white/20 p-7 md:p-10 ${index % 2 === 0 ? "md:border-r" : ""}`}>
            <blockquote className="max-w-[38ch] text-xl leading-8 text-neutral-200 md:text-2xl md:leading-9">“{review.text}”</blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <Image src={review.avatar} alt="" width={40} height={40} unoptimized className="h-10 w-10 rounded-full object-cover" />
              {review.href ? (
                <a href={review.href} target="_blank" rel="noreferrer" className="micro-type flex items-center gap-1.5 text-neutral-400 transition-colors hover:text-white">
                  {review.name}
                  <ArrowUpRight aria-hidden="true" size={12} />
                </a>
              ) : (
                <span className="micro-type text-neutral-400">{review.name}</span>
              )}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
