"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xwpkgjqy"); // Replace with your Formspree form ID

  if (state.succeeded) {
    return (
      <section id="contact" className="bg-white section-padding">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle size={64} className="mx-auto text-[var(--accent)] mb-4" />
          <h2 className="text-3xl font-bold text-[var(--gray-dark)] mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-[var(--gray-default)]">
            Your message has been sent successfully. I&apos;ll get back to you soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="max-w-2xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center text-[var(--gray-dark)] mb-4">
          Contact Me
        </h2>
        <div className="divider-star divider-star-primary" />

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-[var(--gray-dark)] uppercase mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border-2 border-[var(--gray-lighter)] focus:border-[var(--accent)] focus:outline-none transition-colors"
              placeholder="Your name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-[var(--gray-dark)] uppercase mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border-2 border-[var(--gray-lighter)] focus:border-[var(--accent)] focus:outline-none transition-colors"
              placeholder="your.email@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold text-[var(--gray-dark)] uppercase mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-[var(--gray-lighter)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
