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
              I started my career in tech in 2014 by taking a Frontend Development program from Udacity.
              I joined Chef Software (now owned by Progress) in 2015 as a junior level engineer and
              found my home working on InSpec and other security related software while at Chef, where I also 
              transitioned from working primarily on frontend code to working primarily in Golang.
            </p>
            <p>
              At Chef Software I learned how to code, how to organize projects and deliverables, and
              how to be a people manager. By the end of my time there, I was leading two teams with 10 direct reports, 
              responsible for the feature execution for the primary SAAS offering for the company.
              When the company was acquired by Progress in fall 2020, I left to take a small break and find a new opportunity.
            </p>
            <p>
              I began working at Mondoo as an engineer in early 2021 as one of the first employees (it was the 
              three co-counders, me, and one other engineer). Here my role has been hybrid engineer and manager; I manage
              other engineering managers, plan the work for the team with help
              from the other managers and input from the founders, product/ux, and sales/cs, and am also responsible for completing
              key OKRs like developing a pipeline and product metrics site to analyze usage across the platform and implementing a 
              workload identity friendly OIDC solution for Mondoo. 
            </p>
          </div>

          {/* Right Column - Personal */}
          <div className="text-lg leading-relaxed">
            <p className="mb-4">
              Before entering tech, I worked as a legal secretary in NYC, an
              office manager in Montreal, an English teacher in La Paz, Bolivia,
              and a preschool teacher in Phoenix, Arizona!
            </p>
            <p className="mb-4">
              I hold a degree in Linguistics with a minor in Ancient Greek. I am
              fluent in English, Spanish (learned while living abroad), and French (technically my first language, thought I do not speak often anymore).
            </p>
            <p>
              Based in Denver, CO, I enjoy exploring the outdoors and continuing
              to learn new technologies and leadership practices. I also have a high-school aged kid
              who keeps me busy and on my toes.
            </p>
            <p className="mb-4">
              I love to travel and spend days wandering around beautiful cities with no plan at all. My favorites
              so far are Marrakesh, Reykjavik, and Montreal. I dream of spending time on my favourite relaxing island, Jamaica,
              and hope to return one day to Saint-Louis, Senegal, where I spent six months studying while in university.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
