export default function Main() {
  return (
    <main className="flex-1 p-7 md:p-9">
      <Section title="Profile">
        <p className="text-[13px] leading-relaxed text-gray-600">
          Senior Backend Engineer with nearly a decade of experience building scalable, high-traffic systems.
          Deep expertise in the <Strong>Laravel</Strong> ecosystem combined with <Strong>microservice architecture</Strong>,
          <Strong> Go</Strong>, and <Strong>DevOps</Strong> tooling (Docker, Kubernetes). Passionate about performance
          optimization, event-driven design, database tuning, and process automation. Leveraging AI tools
          (<Strong>Claude</Strong>, <Strong>N8N</Strong>, <Strong>Flowise</Strong>) to accelerate development and ship
          products with the highest reliability and security standards.
        </p>
      </Section>

      <Section title="Experience">
        <div className="space-y-6">
          <Job
            title="Backend Developer"
            company="Sepher IT"
            period="Aug 2023 — Present"
            projects={[
              {
                name: "Campino",
                subtitle: "Campaign Management Platform",
                bullets: [
                  "Designed an advanced queue management system with Laravel Horizon and Redis for dispatching millions of notifications (SMS, email, push) in real time.",
                  "Implemented Batching Job and Chaining Job patterns for parallel, dependency-aware background processing.",
                  "Configured Failure scenarios with Exponential Backoff retry strategies and automated alerting.",
                  "Built precise campaign scheduling using Laravel Task Scheduling with cron-based orchestration.",
                ],
                tags: ["Laravel Octane", "Redis", "Horizon", "Queues"],
              },
              {
                name: "Vitrinaa",
                subtitle: "E-Commerce Platform",
                bullets: [
                  "Migrated the Laravel runtime to Octane (RoadRunner/Swoole), eliminating framework boot time and dramatically improving concurrency handling during traffic spikes.",
                  "Rewrote CPU-bound modules as standalone microservices in Go for maximum throughput.",
                  "Integrated FilamentPHP for admin dashboards, boosting development speed by 70% with ready-made components and the TALL Stack.",
                ],
                tags: ["Laravel Octane", "Redis", "Go", "FilamentPHP"],
              },
              {
                name: "InstaClub",
                subtitle: "AI-Powered Instagram Content Coach",
                bullets: [
                  "generating, and optimizing Instagram posts and stories. The system provides AI-driven content strategies, caption generation, posting schedules, and personalized recommendations based on audience engagement and content goals.",
                  "Designed and implemented an AI-powered Instagram content coach using Flowise and OpenAI.",
                  "Built multi-step LLM workflows for content planning, caption generation, and story ideation.",
                  "Automated content calendar creation and personalized posting strategies.",
                  "Integrated conversational AI to provide creator-specific recommendations and engagement optimization."
                ],
                tags: ["Laravel Octane", "FilamentPHP", "OpenAI", "Flowise"],
              },
              {
                name: "CRM Platform",
                subtitle: "Mini CRM",
                bullets: [
                  "Designed and developed a scalable CRM platform using Laravel, enabling customer lifecycle management, sales pipeline tracking, task automation, user role management, and comprehensive reporting through a modular and maintainable architecture."
                ],
                tags: ["Laravel", "React"],
              },
            ]}
          />

          <Job
            title="Backend Developer"
            company="Live.WatchThem"
            period="Feb 2021 — Apr 2023"
            projects={[
              {
                name: "WatchThem",
                subtitle: "User Analytics & Behavior Platform",
                bullets: [
                  "Architected an Event-Driven system using Laravel Events & Listeners to fully decouple real-time tracking from the application core.",
                  "Combined WebSockets and Laravel Echo for live data ingestion, funneling events through Redis queues into MongoDB at high speed.",
                  "Designed a multi-layer caching system with Laravel Tag Cache, improving platform conversion rates by 45% through fast data delivery.",
                  "Standardized API output with Resources and Collections for consistent frontend consumption.",
                ],
                tags: ["Laravel Events", "WebSocket", "MongoDB", "Redis"],
              },
            ]}
          />

          <Job
            title="Full-Stack Developer"
            company="Arnika — Homsa Platform"
            period="Apr 2020 — Feb 2021"
            projects={[
              {
                name: "Homsa",
                subtitle: "Accommodation Booking Platform",
                bullets: [
                  "Refactored a monolithic codebase using Repository and Service design patterns, moving validations to Form Requests and authorization to Gates & Policies.",
                  "Resolved N+1 query issues identified via Laravel Telescope, achieving a 10× improvement in page load speed.",
                  "Implemented Database Transactions to prevent financial errors in the booking flow.",
                  "Wrote comprehensive Feature & Unit test suites with Pest / PHPUnit to guarantee refactored code stability.",
                ],
                tags: ["Laravel", "Pest", "Eloquent", "Refactoring"],
              },
            ]}
          />

          <Job
            title="Full-Stack Developer"
            company="Sitak"
            period="Apr 2018 — Apr 2020"
            projects={[
              {
                name: "Iqoala 724 / Lotto / Apademy",
                subtitle: "Multi-Product Development",
                bullets: [
                  "Built a unified, secure authentication system using Laravel Sanctum / Passport with SPA token management.",
                  "Managed large media file storage via Flysystem with S3-compatible object storage, offloading the primary server.",
                  "Developed clean, well-documented RESTful APIs enabling seamless communication between Laravel backends and Vue.js frontends.",
                ],
                tags: ["Laravel", "OAuth", "S3", "REST API"],
              },
            ]}
          />

          <Job
            title="Full-Stack Developer"
            company="User-V"
            period="Apr 2016 — Feb 2018"
            projects={[
              {
                name: "User-V Platform",
                subtitle: "Dynamic & SEO-Optimized Websites",
                bullets: [
                  "Developed dynamic, SEO-driven websites using Joomla CMS with custom plugin and template modifications.",
                  "Optimized MySQL databases to support the company's digital infrastructure.",
                ],
                tags: ["PHP", "Joomla", "MySQL"],
              },
            ]}
          />
        </div>
      </Section>

      <Section title="Education">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold text-gray-900">B.Sc. in Software Engineering</p>
            <p className="text-[12px] text-gray-500">Azad University</p>
          </div>
        </div>
      </Section>
    </main>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-gray-800">{children}</span>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4f46e5] mb-3 pb-1.5 border-b-2 border-gray-100">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Job({
  title,
  company,
  period,
  projects,
}: {
  title: string;
  company: string;
  period: string;
  projects: {
    name: string;
    subtitle: string;
    bullets: string[];
    tags: string[];
  }[];
}) {
  return (
    <div className="relative pl-5 border-l-2 border-gray-100">
      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#4f46e5]" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
        <p className="text-[14px] font-semibold text-gray-900">{title}</p>
        <span className="text-[11px] text-gray-400 font-mono">{period}</span>
      </div>
      <p className="text-[12px] text-[#4f46e5] font-medium mb-3">{company}</p>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.name} className="p-4 rounded-lg bg-gray-50/80 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[13px] font-semibold text-gray-900">{project.name}</span>
              <span className="text-[11px] text-gray-400">— {project.subtitle}</span>
            </div>
            <ul className="space-y-1 mb-3">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600 leading-relaxed">
                  <span className="text-[#4f46e5] mt-[3px] shrink-0 text-[10px]">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-medium bg-[#4f46e5]/8 text-[#4f46e5] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
