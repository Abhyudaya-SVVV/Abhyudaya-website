import React from 'react';
import { WobbleCard } from './ui/wobble-card';
import AIML from './../../public/assets/domain/AiMl.svg';
import UIUX from './../../public/assets/domain/UiUx.svg';
import android from './../../public/assets/domain/android.svg';
import cloud from './../../public/assets/domain/cloud.svg';
import python from './../../public/assets/domain/python.svg';
import webdev from './../../public/assets/domain/webDev.svg';
import Image from 'next/image'

export const domainFirstLine: Array<{ id: number; name: string; Image: string }> = [
  {
    id: 1,
    name: "Cloud",
    Image: cloud,
  },
  {
    id: 2,
    name: "WEB DEV",
    Image: webdev,
  },
  {
    id: 3,
    name: "UI/UX",
    Image: UIUX,
  },
];

export const domainSecondLine: Array<{ id: number; name: string; Image: string }> = [
  {
    id: 4,
    name: "Python",
    Image: python,
  },
  {
    id: 5,
    name: "AI/ML",
    Image: AIML,
  },
  {
    id: 6,
    name: "Android",
    Image: android,
  },
];

const DomainCards: React.FC = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-3 row-span-2">
        <WobbleCard className="p-4 h-full">
          <Image src={cloud} alt="Cloud" className="w-full h-32 object-cover" />
          <h3 className="text-center mt-2">Cloud</h3>
        </WobbleCard>
      </div>
      <div className="col-span-3 row-span-2">
        <WobbleCard className="p-4 h-full">
          <Image src={webdev} alt="WEB DEV" className="w-full h-32 object-cover" />
          <h3 className="text-center mt-2">WEB DEV</h3>
        </WobbleCard>
      </div>
      <div className="col-span-6 row-span-2">
        <WobbleCard className="p-4 h-full">
          <Image src={UIUX} alt="UI/UX" className="w-full h-32 object-cover" />
          <h3 className="text-center mt-2">UI/UX</h3>
        </WobbleCard>
      </div>
      <div className="col-span-3 row-span-2">
        <WobbleCard className="p-4 h-full">
          <Image src={python} alt="Python" className="w-full h-32 object-cover" />
          <h3 className="text-center mt-2">Python</h3>
        </WobbleCard>
      </div>
      <div className="col-span-3 row-span-2">
        <WobbleCard className="p-4 h-full">
          <Image src={AIML} alt="AI/ML" className="w-full h-32 object-cover" />
          <h3 className="text-center mt-2">AI/ML</h3>
        </WobbleCard>
      </div>
      <div className="col-span-3 row-span-2">
        <WobbleCard className="p-4 h-full">
          <Image src={android} alt="Android" className="w-full h-32 object-cover" />
          <h3 className="text-center mt-2">Android</h3>
        </WobbleCard>
      </div>
    </div>
  );
};

export default DomainCards;
