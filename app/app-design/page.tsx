import DesignHero from '@/components/design-hero';
import SvgHeroPattern from '@/assets/app-design/desktop/bg-pattern-intro-app.svg';
import Image from 'next/image';
import Designs from '../designs';
import DesignProjects from '@/components/design-projects';

import ImageAirfilter from '@/assets/app-design/desktop/image-airfilter.jpg';
import ImageEyecam from '@/assets/app-design/desktop/image-eyecam.jpg';
import ImageFaceit from '@/assets/app-design/desktop/image-faceit.jpg';
import ImageTodo from '@/assets/app-design/desktop/image-todo.jpg';
import ImageLoopstudios from '@/assets/app-design/desktop/image-loopstudios.jpg';

export default function AppDesignPage() {
  return (
    <div className="space-y-40">
      <DesignHero
        title="App Design"
        subtext="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
        pattern={<Image src={SvgHeroPattern} alt="Background pattern" className="absolute -top-42 left-0" />}
      />
      <div className="px-6 md:px-10">
        <DesignProjects
          projects={[
            {
              title: 'Airfilter',
              description: 'Solving the problem of poor indoor air quality by filtering the air',
              image: ImageAirfilter,
            },
            {
              title: 'Eyecam',
              description: 'Product that lets you edit your favorite photos and videos at any time',
              image: ImageEyecam,
            },
            {
              title: 'Faceit',
              description: 'Get to meet your favorite internet superstar with the faceit app',
              image: ImageFaceit,
            },
            {
              title: 'Todo',
              description: 'A todo app that features cloud sync with light and dark mode',
              image: ImageTodo,
            },
            {
              title: 'Loopstudios',
              description: 'A VR experience app made for Loopstudios',
              image: ImageLoopstudios,
            },
          ]}
        />
        <Designs />
      </div>
    </div>
  );
}
