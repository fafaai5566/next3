import { ProjectData } from '@/types/ProjectData';
import { MetricCluster } from '../../components/metrics';
import MetricClusterSingle from '@/app/components/metrics/MetricClusterSingle';
import ArticleSplit from '@/app/components/ArticleSplit';
import ArticleCluster from '@/app/components/ArticleCluster';

export const projectsB: ProjectData[] = [
  {
    id: 'project-1',
    title: 'Digital Architecture Governance',
    thumbnail: '/images/projects/ats/atsLogo.png',
    bgColor: '#ECBAB9',
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

      <ArticleCluster className="mt-8 mb-8">
            <ArticleSplit title="Offline inefficiency">
                  <p>
           The manual process was slow, repetitive, and unsustainable as demand grew.
              </p>
            </ArticleSplit>
                  <ArticleSplit title="First digital attempt">
                   <p>
            The initial solution was designed without adequate user input. This created friction and made adoption difficult.
              </p>
            </ArticleSplit>
            <ArticleSplit title="Complex governance">
                   
              <p>Architecture governance involved multiple departments, each with unique review processes, criteria, and workflows.
      </p>  
            </ArticleSplit>
      
            <ArticleSplit title="Organizational alignment">
             <p>Any design changes needed to be consistent with the company’s internal UX guidelines and coordinated with central ServiceNow team.</p> 
            </ArticleSplit>
  
            </ArticleCluster>
      


        <h2>My Approach</h2>

        <ArticleCluster className="mt-8 mb-8">
            <ArticleSplit title="1. Advocating for User Research">
                  <p>
           The governance and ServiceNow teams were technically skilled but lacked direct user insights. I strongly proposed and led user research to uncover pain points and user needs.
              </p>

                    <ul className="list-disc pl-6 space-y-2 mt-3">
  <li><strong>Interviews</strong>: I spoke with diverse stakeholders—solution architects, reviewers, approvers, and project teams.</li>
  <li><strong>Findings</strong>: While each user group had unique needs, several pain points were common across all roles. The redesigned service needed to address these shared challenges while still supporting different perspectives.
  <p></p>
</li>
</ul>
<p><strong>Common pain points:</strong></p>

 <MetricClusterSingle
    className="bg-[#EEEFE7] rounded-md p-6"
    items={[
      { title: 'Unclear process', description: 'Users lacked guidance on next steps, who to engage, and how to track progress.' },
      { title: 'Limited functionality', description: 'The system did not support efficient work management, leaving users without visibility into the status of their requests or approvals.' },
      { title: 'Navigation challenges', description: 'Users struggled to find their active items within the portal, leading to confusion and frustration.' },

    ]}
    // optional tweaks:
    // showDividers={true}
    // dividerClassName="divide-[#AFAFAF]"
    // itemPaddingClassName="py-5 md:py-6"
  />
            </ArticleSplit>


              <img
    src="/images/projects/ats/userJourney.png"
    alt="User journey map"
    className="w-full rounded-md"
  />

  <ArticleSplit title="2. Understanding the Platform">
             <p>To design effectively, I quickly familiarized myself with ServiceNow’s documentation and Figma kit, enabling me to prototype realistic solutions that aligned platform constraints.</p> 
            </ArticleSplit>

              <ArticleSplit title="3. Cross-team collaboration">
             <p>I worked closely with the central ServiceNow and content teams, aligning design proposals with company-wide UX guidelines. For example, even small changes like modifying notification emails required careful negotiation and alignment.</p> 
            </ArticleSplit>

              <ArticleSplit title="4. Designing the Digital Workspace">
             <p>Initially, stakeholders planned to keep all activities within the Employee Portal. However, through prototypes and discussions, I highlighted its limitations for work management and demonstrated how ServiceNow Workspace could better support collaboration. This convinced the team to adopt Workspace, transforming it into a true collaborative digital hub.</p>
        <p>The redesigned service provided a co-working platform where all users could:
    <MetricClusterSingle
    className="bg-[#EEEFE7] rounded-md p-6 mt-6"
    items={[
      { title: '', description: 'Review, approve, and track architecture documents in one place.' },
      { title: '', description: 'Collaborate seamlessly without losing context.' },
      { title: '', description: 'Access a centralized repository of past applications for reference.' },
      { title: '', description: 'Use  dashboards and reporting tools to monitor key metrics and continuously improve.' },
    ]}
    // optional tweaks:
    // showDividers={true}
    // dividerClassName="divide-[#AFAFAF]"
    // itemPaddingClassName="py-5 md:py-6"
  />
   </p> 
            </ArticleSplit>

                          <ArticleSplit title="5. Building UX into the Workflow">
             <p>Over time, the team embraced the value of user experience. I created UX tickets in the sprint backlog, ensuring that usability considerations became an integral part of development rather than an afterthought.</p> 
            </ArticleSplit>
  
            </ArticleCluster>

      

        <h2>The Outcome</h2>
        <MetricCluster
  items={[
    { title: "Adoption & collaboration", description: "Stakeholders now work together in a shared space, reducing friction and improving transparency." },
    { title: "Reducing the average completion time by 30%", description: "The new digital workflow significantly cut down on manual overhead and improved tracking of governance requests." },
    { title: "Scalability", description: "The Workspace setup allows the governance process to grow with the organization." },
    { title: "Mindset shift", description: "The team gradually internalized the importance of user-centered design, creating a foundation for future improvements." },
  ]}
/>

        
      </>
    ),
  },
  {
    id: 'project-2',
    title: 'Connect',
    subtitle: 'London Stock Exchange Group (LSEG)',
    description: 'Designing a seamless and unified employee digital workspace',
    timeline: 'Sep 2022 - Dec 2023',
    thumbnail: '/images/projects/connect/connectLogo.png',
    bgColor: '#C7DAD5',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Designing a seamless and unified employee digital workspace
        </p>
        
        <div className="bg-neutralBg-level3 px-12 py-12 rounded-md mt-12 mb-16 flex flex-col items-center text-center">
  <img
    src="/images/projects/emptystate3D.png"
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