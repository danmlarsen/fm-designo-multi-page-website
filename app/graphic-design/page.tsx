import DesignHero from '@/components/design-hero';
import Designs from '../../components/designs-section';

import SvgHeroPattern from '@/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg';
import SvgLeaf from '@/assets/shared/desktop/bg-pattern-leaf.svg';

import Image from 'next/image';
import DesignProjects from '@/components/design-projects';

import ImageChange from '@/assets/graphic-design/desktop/image-change.jpg';
import ImageBoxedWater from '@/assets/graphic-design/desktop/image-boxed-water.jpg';
import ImageScience from '@/assets/graphic-design/desktop/image-science.jpg';

export default function GraphicDesignPage() {
  return (
    <>
      <Image src={SvgLeaf} alt="Leaf pattern" className="absolute top-[300px] left-0  -z-50 hidden lg:block" />
      <div className="space-y-40">
        <div className="md:px-10">
          <DesignHero
            title="Graphic Design"
            subtext="We deliver eye-catching branding materials that are 
          tailored to meet your business objectives."
            pattern={<Image src={SvgHeroPattern} alt="Background pattern" className="absolute -top-42 left-0" />}
          />
        </div>
        <div className="px-6 md:px-10 space-y-40">
          <DesignProjects
            projects={[
              {
                title: 'Tim Brown',
                description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
                image: ImageChange,
              },
              {
                title: 'Boxed water',
                description: 'A simple packaging concept made for Boxed Water',
                image: ImageBoxedWater,
              },
              {
                title: 'Science!',
                description: 'A poster made in collaboration with the Federal Art Project',
                image: ImageScience,
              },
            ]}
          />
          <Designs />
        </div>
      </div>
    </>
  );
}
