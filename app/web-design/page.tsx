import DesignHero from '@/components/design-hero';
import Designs from '../designs';

import SvgHeroPattern from '@/assets/web-design/desktop/bg-pattern-intro-web.svg';
import Image from 'next/image';

import DesignProjects from '@/components/design-projects';

import ImageExpress from '@/assets/web-design/desktop/image-express.jpg';
import ImageTransfer from '@/assets/web-design/desktop/image-transfer.jpg';
import ImagePhoton from '@/assets/web-design/desktop/image-photon.jpg';
import ImageBuilder from '@/assets/web-design/desktop/image-builder.jpg';
import ImageBlogr from '@/assets/web-design/desktop/image-blogr.jpg';
import ImageCamp from '@/assets/web-design/desktop/image-camp.jpg';

export default function WebdesignPage() {
  return (
    <div className="space-y-40">
      <DesignHero
        title="Web Design"
        subtext="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences."
        pattern={<Image src={SvgHeroPattern} alt="Background pattern" className="absolute -top-42 right-0" />}
      />
      <DesignProjects
        projects={[
          {
            title: 'Express',
            description: 'A multi-carrier shipping website for ecommerce businesses',
            image: ImageExpress,
          },
          {
            title: 'Transfer',
            description: 'Site for low-cost money transfers and sending money within seconds',
            image: ImageTransfer,
          },
          {
            title: 'Photon',
            description: 'A state-of-the-art music player with high-resolution audio and DSP effects',
            image: ImagePhoton,
          },
          {
            title: 'Builder',
            description: 'Connects users with local contractors based on their location',
            image: ImageBuilder,
          },
          {
            title: 'Blogr',
            description: 'Blogr is a platform for creating an online blog or publication',
            image: ImageBlogr,
          },
          {
            title: 'Camp',
            description: 'Get expert training in coding, data, design, and digital marketing',
            image: ImageCamp,
          },
        ]}
      />
      <Designs />
    </div>
  );
}
