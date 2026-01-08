import Image from "next/image";
import Link from "next/link";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const blogPosts = [
  {
    id: 1,
    title: "How Automation Improves Industrial Efficiency",
    excerpt:
      "Discover how modern automation solutions reduce costs, improve safety, and increase productivity across industries.",
    image: "/assets/img/better-garage-door.jpg",
    date: "10 Dec 2025",
    author: "ODims Engineering",
  },
  {
    id: 2,
    title: "Choosing the Right Gate Motor for Your Property",
    excerpt:
      "A practical guide to selecting reliable gate motors for residential and commercial use in South Africa.",
    image: "/assets/img/gate-motor.jpeg",
    date: "05 Dec 2025",
    author: "ODims Engineering",
  },
  {
    id: 3,
    title: "Welding Techniques Every Business Should Know",
    excerpt:
      "From MIG to TIG welding, learn the most common welding techniques used in modern fabrication.",
    image: "/assets/img/welding-image.jpeg",
    date: "28 Nov 2025",
    author: "ODims Engineering",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-[#F5F7FA] min-h-screen">
      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Insights, guides, and industry updates from our engineering
            and automation experts.
          </p>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <p className="text-sm text-slate-500 mb-2">
                  {post.date} • {post.author}
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mb-3">
                  {post.title}
                </h2>

                <p className="text-slate-600 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </section>
    
  );
}
