import React from 'react';

export default function ApplicationScenarios() {
  const scenarios = [
    {
      title: 'Meeting collaboration',
      caption: 'Turn plans, workshops and team decisions into a shared visual workspace.',
      image: '/assets/images/scenario-meeting-collaboration.png',
      alt: 'Colleagues collaborating with a wall-mounted whiteboard in a meeting room'
    },
    {
      title: 'Classroom teaching',
      caption: 'A clear, durable writing surface for everyday lessons and group learning.',
      image: '/assets/images/scenario-classroom-teaching.png',
      alt: 'Teacher and students using a magnetic whiteboard in a classroom'
    },
    {
      title: 'Mobile discussion',
      caption: 'Move ideas between teams with a stable double-sided rolling whiteboard.',
      image: '/assets/images/scenario-mobile-discussion.png',
      alt: 'Team discussing ideas around a mobile rolling whiteboard'
    }
  ];

  return (
    <section id="applications" className="py-14 md:py-24 bg-[#fbfbfa] border-b border-border" data-component="application-scenarios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-9 md:mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">Made for real spaces</div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">See ideas in motion</h2>
          <p className="mt-3 text-secondary">From meetings to classrooms, choose a board that fits how people work together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {scenarios.map((scenario) => (
            <article key={scenario.title} className="bg-white border border-border" data-component="scenario-card">
              <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                <img src={scenario.image} alt={scenario.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold text-primary">{scenario.title}</h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{scenario.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
