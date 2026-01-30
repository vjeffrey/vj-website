import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "../../lib/constants";

export default function Hero() {
 const pagesBasePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH;

  return (
    <section className="bg-[var(--accent)] text-white pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Avatar */}
        <div className="mb-8">
          <Image
            src={`${pagesBasePath}/images/avatar.png`}
            alt={SITE_CONFIG.name}
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-white"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {SITE_CONFIG.name}
        </h1>

        {/* Star Divider */}
        <div className="divider-star divider-star-light" />

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold mt-6">
          {SITE_CONFIG.title}
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-social"
              aria-label={link.name}
            >
              {link.icon === "Github" && <Github size={20} />}
              {link.icon === "Linkedin" && <Linkedin size={20} />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
