export default function About() {
  return (
    <section id="about" className="bg-[var(--accent)] text-white section-padding">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center mb-4">About</h2>
        <div className="divider-star divider-star-light" />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Left Column - Professional */}
          <div className="text-lg leading-relaxed">
            <p className="mb-4">
              I am a software engineer turned engineering manager with a passion
              for building great products and developing high-performing teams.
            </p>
            <p className="mb-4">
              My technical expertise spans JavaScript, Ruby, and Golang. I have
              presented at multiple conferences on topics like InSpec and cloud
              SDK integrations.
            </p>
            <p>
              I began my software engineering career at Chef Software in June
              2015, where I grew from SDE I to Engineering Manager, eventually
              leading two teams with 10 direct reports.
            </p>
          </div>

          {/* Right Column - Personal */}
          <div className="text-lg leading-relaxed">
            <p className="mb-4">
              Before entering tech, I worked as a legal secretary in NYC, an
              office manager in Montreal, an English teacher in La Paz, Bolivia,
              and even a preschool teacher!
            </p>
            <p className="mb-4">
              I hold a degree in Linguistics with a focus on Ancient Greek. I am
              fluent in English, Spanish, and French.
            </p>
            <p>
              Based in Denver, CO, I enjoy exploring the outdoors and continuing
              to learn new technologies and leadership practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
