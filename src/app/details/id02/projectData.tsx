import { ProjectData } from '@/types/ProjectData';

export const projectsB: ProjectData[] = [
  {
    id: 'project-1',
    title: 'Digital Architecture Governance',
    thumbnail: '/images/projects/ats/ats.svg',
    bgColor: '#D7B1B1',
    description: 'Reimagining the Digital Architecture Governance Process',
    timeline: 'Mar 2023 - Dec 2023',
    subtitle: 'London Stock Exchange Group (LSEG)',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Reimagining the Digital Architecture Governance Process</p>
        <div className="bg-neutralBg-level3 px-12 py-12 rounded-md mt-12 mb-16">
  <img
    src="/images/projects/ats/ats.png"
    alt="ServiceNow application"
    className="w-full shadow-lg rounded-md"
  />
</div>
        <p>
      As the organization grew, it’s traditional offline architecture governance process became increasingly inefficient. The manual workflows could no longer scale with the expanding workload, leading to unclear responsibilities, lack of transparency, and limited collaboration.</p>
      <p>
To address this, the team introduced a digital governance service on ServiceNow. However, the first iteration failed to gain adoption due to poor user experience and lack of user-centered design. My role was to lead the redesign, ensuring that the new design truly met user needs, aligned with internal UX guidelines, and enabled seamless collaboration across teams.
        </p>
        <h2>The Challenge</h2>
        <p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
  <li><strong>Offline inefficiency</strong>: The manual process was slow, repetitive, and unsustainable as demand grew.</li>
  <li><strong>First digital attempt</strong>: The initial solution was designed without adequate user input. This created friction and made adoption difficult.</li>
  <li><strong>Complex governance</strong>: Architecture governance involved multiple departments, each with unique review processes, criteria, and workflows.</li>
  <li><strong>Organizational alignment</strong>: Any design changes needed to be consistent with the company’s internal UX guidelines and coordinated with central ServiceNow team.</li>
</ul></p>
        <h2>My Approach</h2>
        <h3>1. Advocating for User Research</h3>
        <p>The governance and ServiceNow teams were technically skilled but lacked direct user insights. I strongly proposed and led user research to uncover pain points and user needs.
                                  <div className="bg-neutralBg-level3 px-0 py-0 rounded-md mt-10 mb-10">
  <img
    src="/images/projects/ats/userJourney.png"
    alt="User journey map"
    className="w-full rounded-md"
  />
</div>
          <ul className="list-disc pl-6 space-y-2 mt-3">
  <li><strong>Interviews</strong>: I spoke with diverse stakeholders—solution architects, reviewers, approvers, and project teams.</li>
  <li><strong>Findings</strong>: While each user group had unique needs, several pain points were common across all roles. The redesigned service needed to address these shared challenges while still supporting different perspectives.
  <p></p>
<p><strong>Common pain points:</strong></p>
        <ul className="list-[circle] pl-6 space-y-1 mt-2">
      <li><strong>Unclear process</strong>: Users lacked guidance on next steps, who to engage, and how to track progress.</li>
      <li><strong>Limited functionality</strong>: The system did not support efficient work management, leaving users without visibility into the status of their requests or approvals.</li>
      <li><strong>Navigation challenges</strong>: Users struggled to find their active items within the portal, leading to confusion and frustration.</li>
    </ul>
</li>
</ul>
        </p>
        <h3>2. Understanding the Platform</h3>
        <p>To design effectively, I quickly familiarized myself with ServiceNow’s documentation and Figma kit, enabling me to prototype realistic solutions that aligned platform constraints.</p>
        <h3>3. Cross-team collaboration</h3>
        <p>I worked closely with the central ServiceNow and content teams, aligning design proposals with company-wide UX guidelines. For example, even small changes like modifying notification emails required careful negotiation and alignment.</p>
        <h3>4. Designing the Digital Workspace</h3>
        <p>Initially, stakeholders planned to keep all activities within the Employee Portal. However, through prototypes and discussions, I highlighted its limitations for work management and demonstrated how ServiceNow Workspace could better support collaboration. This convinced the team to adopt Workspace, transforming it into a true collaborative digital hub.</p>
        <p>The redesigned service provided a co-working platform where all users could:
        <ul className="list-disc pl-6 space-y-2 mt-3">
  <li>Review, approve, and track architecture documents in one place.</li>
  <li>Collaborate seamlessly without losing context.</li>
  <li>Access a centralized repository of past applications for reference.</li>
  <li>Use dashboards and reporting tools to monitor key metrics and continuously improve.</li>
</ul>  
        </p>
        <h3>5. Building UX into the Workflow</h3>
        <p>Over time, the team embraced the value of user experience. I created UX tickets in the sprint backlog, ensuring that usability considerations became an integral part of development rather than an afterthought.</p>


        <h2>The Outcome</h2>
        <p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
  <li><strong>Adoption & collaboration</strong>: Stakeholders now work together in a shared space, reducing friction and improving transparency.</li>
  <li><strong>Efficiency</strong>: The new digital workflow significantly cut down on manual overhead and improved tracking of governance requests. Reducing the average completion time by 30%</li>
  <li><strong>Scalability</strong>: The Workspace setup allows the governance process to grow with the organization.</li>
  <li><strong>Mindset shift</strong>: The team gradually internalized the importance of user-centered design, creating a foundation for future improvements.</li>
</ul>
        </p>
        
      </>
    ),
  },
  {
    id: 'project-2',
    title: 'Connect',
    subtitle: 'London Stock Exchange Group (LSEG)',
    description: 'Designing a seamless and unified employee digital workspace',
    timeline: 'Sep 2022 - Dec 2023',
    thumbnail: '/images/projects/connect/connect.svg',
    bgColor: '#C7DAD5',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Designing a seamless and unified employee digital workspace
        </p>
        
        <div className="bg-neutralBg-level3 px-12 py-12 rounded-md mt-12 mb-16 flex flex-col items-center text-center">
  <img
    src="/images/projects/emptystate.svg"
    alt="empty state illustration"
    className="w-[150px] h-auto mb-4"
  />
  <p className="text-body-3 text-neutralFg">
    This story isn’t ready yet, but it’s on the way
  </p>
</div>

        
        
      </>
      ),
  },

];