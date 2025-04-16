import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

type TProject = {
  title: string;
  description: string;
  image: StaticImageData;
};

export default function DesignProjects({ projects }: { projects: TProject[] }) {
  return (
    <section>
      <ul className="grid lg:grid-cols-3 gap-10">
        {projects.map(project => (
          <li key={project.title} className="rounded-xl overflow-hidden bg-muted ">
            <Link href="#" className="grid md:grid-cols-2 lg:grid-cols-1 group">
              <Image src={project.image} placeholder="blur" alt={project.title} className="group-hover:scale-105 transition-transform duration-300" />
              <div className="text-center p-8 gap-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex flex-col justify-center">
                <h2 className="text-primary font-medium text-xl uppercase tracking-[5px] group-hover:text-white">{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
