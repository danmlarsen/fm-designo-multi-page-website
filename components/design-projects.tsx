import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type TProject = {
  title: string;
  description: string;
  image: StaticImageData;
};

export default function DesignProjects({ projects }: { projects: TProject[] }) {
  return (
    <section>
      <ul className="grid gap-10 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.title}
            className="bg-muted overflow-hidden rounded-xl"
          >
            <Link href="#" className="group grid md:grid-cols-2 lg:grid-cols-1">
              <Image
                src={project.image}
                placeholder="blur"
                alt={project.title}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="group-hover:bg-primary flex flex-col justify-center gap-4 p-8 text-center transition-colors duration-300 group-hover:text-white">
                <h2 className="text-primary text-xl font-medium tracking-[0.3125rem] uppercase group-hover:text-white">
                  {project.title}
                </h2>
                <p>{project.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
