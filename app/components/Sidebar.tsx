export default function Sidebar() {
  return (
    <aside className="w-full md:w-[260px] md:min-h-[1122px] bg-[#1a1a2e] text-[#e8e8f0] p-7 md:p-8 shrink-0">
      <div className="mb-8">
        <img
          src="/avatar.jpeg"
          alt="Hossein Shafiei"
          className="w-[88px] h-[88px] rounded-full border-[3px] border-[#4f46e5]/30 object-cover mb-4"
        />
        <h1 className="text-xl font-bold text-white leading-tight">Hossein Shafiei</h1>
        <p className="text-[#818cf8] text-sm font-medium mt-1">Senior Backend Developer</p>
      </div>

      <Section title="Contact">
        <ContactItem
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
          href="mailto:374hshafiei@gmail.com"
          text="374hshafiei@gmail.com"
        />
        <ContactItem
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
          href="tel:09114154950"
          text="09114154950"
        />
        <ContactItem
          icon={<><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>}
          text="Amol, Iran"
        />
        <ContactItem
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
          href="https://linkedin.com/in/mrshafee95"
          text="linkedin.com/in/mrshafee95"
        />
        <ContactItem
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
          href="https://github.com/zhitoo"
          text="github.com/zhitoo"
        />
      </Section>

      <Section title="Skills">
        <SkillGroup label="Backend" items={["Laravel", "PHP", "Go", "Node.js", "Python"]} />
        <SkillGroup label="Database" items={["MySQL", "PostgreSQL", "MongoDB", "Redis"]} />
        <SkillGroup label="Architecture" items={["Microservices", "Event-Driven", "Queue Systems", "Caching"]} />
        <SkillGroup label="DevOps" items={["Linux", "Docker", "Kubernetes", "CI/CD", "Gitlab", "GitlabCI"]} />
        <SkillGroup label="AI Tools" items={["Claude", "N8N", "Flowise", "RAG"]} />
        <SkillGroup label="Frontend" items={["React", "Livewire", "Tailwind CSS"]} />
        <SkillGroup label="Other Tools" items={["FilamentPHP"]} />
      </Section>

      <Section title="Languages">
        <div className="space-y-2.5">
          <LanguageBar label="Persian" level="Native" />
          <LanguageBar label="English" level="B1" />
        </div>
      </Section>
    </aside>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#818cf8] mb-3 pb-1.5 border-b border-[#2d2d4a]">
        {title}
      </h2>
      {children}
    </div>
  );
}

function ContactItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-start gap-2.5 text-[12.5px] text-[#c4c4d4] leading-snug">
      <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#818cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
      <span className="break-all">{text}</span>
    </span>
  );

  return (
    <div className="mb-2.5">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mb-3">
      <p className="text-[11px] font-semibold text-white/50 mb-1.5">{label}</p>
      <div className="flex flex-wrap gap-1">
        {items.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 text-[11px] bg-[#2d2d4a] text-[#c4c4d4] rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function LanguageBar({ label, level }: { label: string; level: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-[12px] text-[#c4c4d4]">{label}</span>
        <span className="text-[10px] text-[#818cf8]">{level}</span>
      </div>
      <div className="h-1 bg-[#2d2d4a] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#4f46e5] rounded-full"
          style={{ width: level === "Native" ? "100%" : "50%" }}
        />
      </div>
    </div>
  );
}
