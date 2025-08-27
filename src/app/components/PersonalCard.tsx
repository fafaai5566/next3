'use client';

import Image from 'next/image';
import { useState } from 'react';
import InteractionTag from './InteractionTag';
import ListType1 from './list-type1';
import Button from './button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CheckIcon from '@mui/icons-material/Check';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import BrushIcon from '@mui/icons-material/Brush';
import CoffeeIcon from '@mui/icons-material/Coffee';


const PersonalCard = () => {

  const [copied, setCopied] = useState(false);

const handleCopy = () => {
  navigator.clipboard.writeText('soonfa86@gmail.com');
  setCopied(true);
  setTimeout(() => setCopied(false), 1500); // reset after 1.5s
};

const iconMap: Record<string, React.ReactNode> = {
  Hiking: <HikingIcon fontSize="small" />,
  Biking: <DirectionsBikeIcon fontSize="small" />,
  Drawing: <BrushIcon fontSize="small" />,
  Coffee: <CoffeeIcon fontSize="small" />,
};

const hoverContentMapDo: Record<string, React.ReactNode> = {
  'UX/UI': (
    <div className="flex items-center gap-4">
      <img src="/images/uxui.png" alt="UX/UI" className="w-40 h-40 rounded object-cover" />
      <span>With years of experience designing enterprise web applications in complex domains, I lead the end-to-end UX process—from research to delivery—crafting intuitive, pixel-perfect user experiences.</span>
    </div>
  ),
  'User centred design': (
    <div className="flex items-center gap-4">
      <img src="/images/user-centred.png" alt="User centred design" className="w-40 h-40 rounded object-cover" />
      <span>I am passionate about introducing a user-centered approach to the team, and it's rewarding to see them embrace its value.</span>
    </div>
  ),
  'Industrial design': (
    <div className="flex items-center gap-4">
      <img src="/images/industrial-design.png" alt="Industrial design" className="w-40 h-40 rounded object-cover" />
      <span>With years of experience designing consumer electronics and medical devices, I guide the end-to-end design process from user research and ideation to prototyping and mass production.</span>
    </div>
  ),
};

const hoverContentMap: Record<string, React.ReactNode> = {
  Hiking: (
    <div className="flex items-center gap-4">
      <img
        src="/images/hiking.png"
        alt="Hiking"
        className="w-40 h-40 rounded object-cover"
      />
      <span>I love walking and running along trails and through mountain views. In these moments, nature grounds me.</span>
    </div>
  ),
  Biking: (
    <div className="flex items-center gap-4">
      <img
        src="/images/Biking.svg"
        alt="Biking in the woods"
        className="w-40 h-40 rounded object-cover"
      />
      <span>From city rides to quiet forest paths, cycling enables me to discover a world beyond my reach.</span>
    </div>
  ),
  Drawing: (
    <div className="flex items-center gap-4">
      <img
        src="/images/Drawing.svg"
        alt="Sketch of an architecture"
        className="w-40 h-40 rounded object-cover"
      />
      <span>Sketching is just relaxing and make myself happy.</span>
    </div>
  ),
  Coffee: (
    <div className="flex items-center gap-4">
      <img
        src="/images/Coffee.svg"
        alt="Espresso machine"
        className="w-40 h-40 rounded object-cover"
      />
      <span>Dialing in the perfect espresso shot is my daily ritual.</span>
    </div>
  ),
};


  const tagsDo = ['UX/UI', 'User centred design', 'Industrial design'];
  const tagsLike = ['Hiking', 'Biking', 'Drawing', 'Coffee'];

  const experience = [
  {
    title: 'Product Designer',
    subtitle: 'Hexaware • Full time',
    timeline: 'May 2022 – present',
    area: 'Amsterdam',
    imageSrc: '/images/company/hexaware_technologies_logo.jpeg',
    children: [
      {
        title: 'UX Designer',
        subtitle: 'London Stock Exchange Group (LSEG) • Contract',
        timeline: 'Sep 2022 - Jun 2024',
        area: 'Amsterdam',
        imageSrc: '/images/company/london_stock_exchange_group_logo.jpeg',
      },
      {
        title: 'UX/UI Designer',
        subtitle: 'Rakoo • Full time',
        timeline: 'Jan 2021 - Apr 2022',
        area: 'Nijmegen',
        imageSrc: '/images/company/rakoo_logo.jpeg',
      },
      {
        title: 'Product Designer',
        subtitle: 'Weeview • Full time',
        timeline: 'Jul 2016 - Dec 2019',
        area: 'Remote',
        imageSrc: '/images/company/Weeview.png',
      },
      {
        title: 'Industrial Designer',
        subtitle: 'Wistron',
        timeline: 'Sep 2009 - Jun 2016',
        area: 'Taipei',
        imageSrc: '/images/company/wistron_logo.jpeg',
      },
    ],
  },
];

  return (
    <div className="bg-white border border-neutralStroke rounded-2xl p-6 w-full max-w-md">
      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-neutral-100">
          <Image
            src="/images/portrait.png" // Replace with actual profile image path
            alt="Shun-Fa"
            width={120}
            height={120}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-title-3 font-medium text-neutralFg-selected">
          Hi I am Shun-Fa, I am a <br /> product designer
        </p>
      </div>

      <hr className="border-neutralStroke mt-6 mb-6" />

      {/* I do */}
      <div>
        <p className="text-body-2-strong text-neutralFg mb-2">I do</p>
        <div className="flex flex-wrap gap-2">
          {tagsDo.map((tag) => (
            <InteractionTag key={tag} label={tag} variant="outline" hoverContent={hoverContentMapDo[tag]} />
          ))}
        </div>
      </div>

      {/* I like */}
      <div>
        <p className="text-body-2-strong text-neutralFg mt-4 mb-2">I like</p>
        <div className="flex flex-wrap gap-2">
          {tagsLike.map((tag) => (
            <InteractionTag key={tag} label={tag} variant="outline" icon={iconMap[tag]} hoverContent={hoverContentMap[tag]} />
          ))}
        </div>
      </div>

      <hr className="border-neutralStroke mt-6 mb-0" />

      {/* Experience */}
      <ListType1 items={experience} />
      <hr className="border-neutralStroke mt-0 mb-6" />

      {/* Footer */}
      <div className="flex items-center justify-between">
 {/* LinkedIn button */}
<div className="flex items-center gap-2">
<a
  href="https://www.linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center rounded hover:bg-neutralBg-hover transition-colors"
>
  <LinkedInIcon fontSize="inherit" className="text-neutralFg" style={{ width: 40, height: 40 }} />
</a>

</div>

  {/* Email + Copy button in one group */}
  <div className="flex items-center gap-2">
    <span className="text-body-1 text-neutralFg-selected">soonfa86@gmail.com</span>
    <Button
      icon={copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
      iconOnly
      size="sm"
      variant="subtle"
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy email'}
    />
  </div>
</div>

    </div>
  );
};

export default PersonalCard;
