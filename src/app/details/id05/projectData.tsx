import Button from '../../components/button';
import { ProjectData } from '@/types/ProjectData';

export const projectsE: ProjectData[] = [
  {
    id: 'project-1',
    title: 'MCP UI - Data export demo',
    thumbnail: '/images/projects/exportData/dataExport.png',
    bgColor: '#F0F3EE',
    description:
      ' Demonstrate AI-driven approaches to simplifying complex workflows.',
    timeline: '2026',
    subtitle: 'Conceptual Design',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">
          Demonstrate AI-driven approaches to simplifying complex workflows.
        </p>

        <div className="bg-neutralBg-level3 px-12 py-12 rounded-md mt-8 mb-4">
          <img
            src="/images/projects/exportData/dataExportHeroImage.png"
            alt="MCP UI - Data export demo"
            className="w-full rounded-md shadow-lg"
          />
          
        </div>

        <div className="mt-0 mb-8">
            <a
              href="https://mcp-ui-data-export.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="primary" size="lg">
                Live demo
              </Button>
            </a>
          </div>

        
        <p>
      Recently I’ve been thinking about <strong> MCP UI</strong> — the idea that an AI agent doesn’t just chat, but also <strong>surfaces widgets/actions inside the conversation</strong> so users can complete tasks step by step.
        </p>
        <p>I really felt the need for this last month.</p>
        <p>I was helping my wife download <strong>ESG data for European listed companies (2000–2025)</strong> from <strong>LSEG Workspace</strong>. I’ve worked on Workspace-related products before, so I assumed it would be easy… but it wasn’t.</p>
        <p>The request is simple. The workflow isn’t.</p>
        <p>For a new user, the experience looked like this:</p>
        <ul className="list-disc pl-6 pb-6 space-y-2 text-body-2 text-neutralFg">
  <li>
    First you have to know to find a <strong>Screener</strong> app (huge
    barrier already)
  </li>
  <li>
    Then jump to another app to <strong>build a list</strong>
  </li>
  <li>
    Then manually <strong>add variables/columns one by one</strong>
  </li>
  <li>
    And keep switching between apps and screens → lots of cognitive load
  </li>
</ul>
<p>In the end, we had to search online for tutorials just to figure out the right path.</p>
<p>That got me thinking:</p>
<p><strong>What if the user could just state the goal… and the UI adapts?</strong></p>
<p>With MCP UI, an AI agent could:</p>
<ul className="list-decimal pl-6 pb-6 space-y-2 text-body-2 text-neutralFg">
  <li>
    understand the request (“Download ESG data for EU listed companies from 2000–2025”)
  </li>
  <li>
    present the right widgets in the right order (filters → parameter picker → variable picker → export)
  </li>
  <li>
    guide the user through the workflow without prior training or tutorial hunting
  </li>

</ul>
<p>So I built a small concept demo of what this could look like.</p>
<p>It’s a live interaction, but not connected to a real AI model or backend (responses are scripted). Still, it shows the look & feel of the experience.</p>

<div className="mt-0 mb-8">
            <a
              href="https://mcp-ui-data-export.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="primary" size="lg">
                Live demo
              </Button>
            </a>
          </div>



      </>
    ),
  },
];
