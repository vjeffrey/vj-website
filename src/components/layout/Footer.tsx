import { Github, Linkedin, MapPin } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "../../lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[var(--primary)] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Location */}
            <div>
              <h3 className="text-lg font-bold uppercase mb-4">Location</h3>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={18} />
                {SITE_CONFIG.location}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-4">
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

            {/* Fun Fact */}
            <div className="md:text-right">
              {/* <h3 className="text-lg font-bold uppercase mb-4">Fun Fact</h3> */}
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[var(--primary-dark)] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            Copyright &copy; {currentYear} {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
