import Image from 'next/image';

type TProject = {
  title: string;
  description: string;
  image: any;
};

export default function DesignProjects({ projects }: { projects: TProject[] }) {
  return (
    <section>
      <ul className="grid grid-cols-3 gap-8">
        {projects.map(project => (
          <li key={project.title} className="rounded-xl overflow-hidden bg-secondary">
            <Image src={project.image} alt={project.title} />
            <div className="text-center p-8 space-y-4">
              <h2 className="text-primary font-medium text-xl uppercase tracking-[5px]">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
