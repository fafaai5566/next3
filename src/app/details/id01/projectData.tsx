import { ProjectData } from '@/types/ProjectData';

export const projectsA: ProjectData[] = [
  {
    id: 'project-1',
    title: 'Entity Master',
    thumbnail: '/images/projects/entitymaster/entitymaster.svg',
    bgColor: '#99AB82',
    description: 'Transforming entity management into a more efficient and user-friendly data experience',
    timeline: 'Dec 2023 - Jul 2024',
    subtitle: 'London Stock Exchange Group (LSEG)',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Transforming entity management into a more efficient and user-friendly data experience.</p>
        {/* <hr className="border-neutralStroke mb-12" /> */}
          <div className="bg-neutralBg-level3 px-12 py-12 rounded-md mt-12 mb-16">
  <img
    src="/images/projects/entitymaster/jtbd.png"
    alt="Jobs to be Done workshop"
    className="w-full shadow-lg rounded-md"
  />
</div>
        <p>
      As part of a <strong>strategic partnership with Microsoft</strong>, I led the <strong>design direction</strong> and guided a junior designer in creating a modern platform for managing entity data.
        </p>
        
        <p>Key results:</p>
        <p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>Replaced a <strong>Windows 95–style legacy tool</strong></li>
  <li>Served as a <strong>pilot for reusable design patterns</strong></li>
  <li>Set the foundation for <strong>future data tools across the LSEG ecosystem</strong></li>
</ul></p>
        
        <h2>Challenges</h2>
        <h3>1. Misaligned collaboration</h3>
        <p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>Content team documented requirements based on <strong>past practices,</strong> essentially replicating the old system with minor visual updates.</li>
    <li>They also created wireframes directly in <strong>Excel,</strong> expecting designers to simply <em>“paint over”</em> them, and often complained about how time-consuming it was to manage changes in Excel.</li>
</ul></p>
        <h3>2. Gaps between requirements and user needs</h3>
        <p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>Documented requirements <strong>missed real user needs and pain points</strong></li>
  <li>Development teams assessed their work based on <strong>incomplete requirements</strong></li>
  <li>Designer-proposed improvements often <strong>disrupted delivery schedules</strong></li>
</ul>
        </p>
        <h3>3. Lack of cross-team alignment</h3>
        <p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>Another design team worked on <strong>separate features without coordination</strong></li>
  <li>Risk of <strong>fragmented experiences</strong> and <strong>resistance to change</strong></li>
  <li>Other teams operated in <strong>silos,</strong> making it difficult to ensure <strong>consistent design patterns</strong></li>
</ul>
        </p>
        <h2>How I overcame it</h2>
        <p>
      To address these challenges, I focused on <strong>improving collaboration,</strong> <strong>grounding decisions in user insights,</strong> and <strong>establishing efficient design practices.</strong>
        </p>
        <h3>1. Iterating the way of working</h3>
        <p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>I reviewed how to move things forward efficiently, balancing the number of changes we wanted to make with the tight schedule, and shifted from sprint-based delivery to <strong>daily reviews.</strong></li>
  <li>Adopted a <strong>draft-first process</strong> that enabled rapid iterations</li>
  <li>Outcome: <strong>aligned</strong> the team, provided <strong>clear direction,</strong> and built <strong>momentum</strong></li>
</ul>
        </p>
        <h3>2. Building a deeper understanding of users</h3>
        <p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>Conducted <strong>user interviews</strong> and <strong>usability testing</strong></li>
  <li>Measured <strong>task completion, errors, and satisfaction</strong></li>
  <li>Insights directly <strong>informed design decisions</strong></li>
</ul>
        </p>
        <h3>3. Bridging stakeholders and designers</h3>
        <p>
<ul className="list-disc pl-6 space-y-2 mt-3">
  <li>Facilitated <strong>workshops</strong> for alignment</li>
  <li>Applied <strong>Jobs to Be Done</strong> method to map how to build and deliver capabilities</li>
  <li>Created <strong>service blueprints</strong> and <strong>draft wireframes</strong></li>
</ul>
        </p>
        <h3>4. Rapid design iteration</h3>
                <div className="bg-neutralBg-level3 px-0 py-0 rounded-md mt-10 mb-10">
  <img
    src="/images/projects/entitymaster/sketch.png"
    alt="sketches prototype"
    className="w-full rounded-md"
  />
</div>
        <p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>Started with <strong>sketches,</strong> reviewed with PO and design lead</li>
  <li>Converted into <strong>high-fidelity prototypes</strong></li>
  <li>Presented → iterated → refined in <strong>fast cycles</strong></li>
</ul>
        </p>
        <h2>Results</h2>
        <p>
      The most rewarding part of this project was helping to raise the <strong>UX maturity</strong> of the team. At first, change felt almost impossible—but gradually, mindsets shifted. I remember my design lead being impressed when a key stakeholder from the content team asked <em>“Could you provide us with your solution for the upcoming features?”</em>  That moment confirmed that the value of a user-centered approach was being recognized. It showed that stakeholders <strong>trusted the role of UX design</strong> in shaping user needs into meaningful, well-crafted experiences.
        </p>
        
      </>
    ),
  },
  {
    id: 'project-2',
    title: 'HIVE',
    subtitle: 'London Stock Exchange Group (LSEG)',
    description: 'Building a Transcript Platform that Drives Efficiency and Collaboration',
    timeline: 'Sep 2022 - Dec 2023',
    thumbnail: '/images/projects/hive/hive.svg',
    bgColor: '#A6C2B8',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Building a Transcript Platform that Drives Efficiency and Collaboration</p>
        
        <div className="bg-neutralBg-level3 px-12 py-12 rounded-md mt-12 mb-16">
  <img
    src="/images/projects/hive/Hive.png"
    alt="Hive application"
    className="w-full shadow-lg rounded-md"
  />
</div>
        <p>
      LSEG produces around 40,000 financial event transcripts each year. To support this scale, we built Hive, an internal transcripts platform designed to replace a costly external solution. Beyond reducing expenses, Hive delivers a more streamlined and collaborative user experience. It supports manual transcript processing, enhances speech-to-text outputs, and enables managers and analysts to work together within the same platform—improving both efficiency and accuracy across the workflow.
        </p>
       
        
        <h2>Creating a Better Experience</h2>
        
        <p>
      Previously, managers and analysts had to rely on spreadsheets to manage their work alongside an external platform. This was time-consuming and fragmented. I saw the opportunity to design a <strong>single, unified platform</strong> that not only improved efficiency but also addressed real user pain points.

Before jumping into features, I wanted to make sure we had the <strong>full picture of user needs</strong>—including the frustrations and hidden challenges that weren’t captured in the initial requirements.
        </p>
        <h3>Advocating for a User-Centered Approach</h3>
        <p>
      Although requirements were provided upfront, they were feature-driven and lacked real user context. When I proposed interviewing end users, the development team initially pushed back: <em>“We know the product well, just ask us”</em>.

I recognized this as an opportunity to introduce a <strong>user-centered design mindset</strong>. I conducted interviews with different types of users, analyzed their workflows, and translated findings into actionable insights. Sharing these with both the team and stakeholders revealed critical gaps and helped align our design direction with both business goals and user needs.

By actively involving stakeholders throughout the design process, I built trust and support—helping the project move forward smoothly.
        </p>
        <h3>Leveraging Design Critique</h3>
        <p>
      I also engaged with other design teams working on related digital content projects. Through design critiques, we exchanged feedback, identified blind spots, and ensured consistent design patterns across LSEG’s ecosystem—resulting in a more cohesive user experience.
        </p>
        <h2>Results</h2>
        <p>
      Introducing a user-centered way of working had a lasting impact. The product manager began proactively joining me in user interviews before features were defined. Together, we used these insights to influence stakeholders—shifting the conversation from <em>“what features to implement”</em>{' '} to <em>“what outcomes to achieve”</em>.

This shift not only improved the product but also embedded <strong>UX thinking into the team’s culture</strong>.
        </p>
        
        
      </>
      ),
  },
  {
    id: 'project-3',
    title: 'RTC Workshop Management',
    subtitle: 'CitNOW Group',
    description: 'Transforming a legacy workshop management platform',
    timeline: 'Mar 2025 - Jun 2025',
    thumbnail: '/images/projects/rtc/rtc.svg',
    bgColor: '#D97757',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Transforming a legacy workshop management platform</p>
        
        <div className="bg-neutralBg-level3 px-12 py-12 rounded-md mt-12 mb-16">
  <img
    src="/images/projects/rtc/rtc.png"
    alt="RTC Workshop Management application"
    className="w-full shadow-lg rounded-md"
  />
</div>
        <p>
      We were asked to evaluate the cost of migrating a 20-year-old legacy workshop management platform to the cloud. The client’s perspective was straightforward: replicate all existing features in a cloud environment, with a new visual layer added on top. The redesign of the interface was seen merely as an “add-on,” rather than a core part of the project.
        </p>
       
        
        <h2>The Challenge</h2>
        
        <p>
      However, the reality is more complex. While functionally comprehensive, the platform suffers from outdated design patterns and a Windows 95-style UI. The sales team has repeatedly faced resistance from prospective clients, who often compare it unfavorably with modern, more user-friendly competitors.
        </p>
        <h2>The Design Opportunity</h2>
        <p>
      Instead of a migration that would replicate existing issues, I saw this as an opportunity to solve the underlying problems. By uncovering user pain points, simplifying workflows, and designing a more intuitive experience, we can deliver a solution far beyond a simple reskin.
      </p>
      <h2>Our Process</h2>
        <h3>1. Broadening the scope</h3>
        <p>
      We persuaded the client to include user research as part of the assessment. In return, we committed to delivering both a research report and design audit report—not just technical estimates.
        </p>
        <h3>2. Understanding the landscape</h3>
        <p>
      Direct access to end users (garage staff) wasn’t possible. Instead, we interviewed subject-matter experts (SMEs) from the CitNow group. This gave us a comprehensive view of:
      <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>How the service ecosystem works.</li>
  <li>Pain points within the current workflows.</li>
  <li>Where the platform disconnected and created friction for different types of users.</li>
</ul>
        </p>
        <h3>3. Identifying UX issues</h3>
                        <div className="bg-neutralBg-level3 px-0 py-0 rounded-md mt-10 mb-10">
  <img
    src="/images/projects/rtc/designAudit.png"
    alt="design audit"
    className="w-full rounded-md"
  />
</div>
        <p>From these discussions and the design audit, we uncovered:
        <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>The current design forces users to navigate between multiple pages to find critical information, which increases cognitive load and introduces the risk of missing important details.</li>
  <li>Redundant features that added complexity without value.</li>
  <li>The user experience is hindered by a lack of consistency and poor UX practices.</li>
</ul>
</p>  
        <h3>4. Moving from issues to solutions</h3>
        <p>Rather than stopping at critique, we provided concrete design suggestions for how the platform could evolve—beyond just aesthetics—toward more efficient and user-centered workflows.</p>
        <h3>5. Client validation</h3>
        <p>When we presented the prototype—paired with research insights and our design rationale—the clients immediately saw the potential. The shift from “reskinning legacy platform” to “reimagining the service experience” became clear.</p>

        <h2>Results</h2>
        <p>

<ul className="list-disc pl-6 space-y-2">
  <li>The client bought into our vision and awarded us the project.</li>
  <li>
    Instead of merely rebuilding the platform in the cloud, the initiative is now positioned as a <strong>strategic redesign</strong> that:
    <ul className="list-[circle] pl-6 space-y-1 mt-2">
      <li>Eliminates redundancy.</li>
      <li>Improves usability.</li>
      <li>Creates a modern digital co-working space ready to compete in the market.</li>
    </ul>
  </li>
</ul>
        </p>
      </>
    ),
  },
];