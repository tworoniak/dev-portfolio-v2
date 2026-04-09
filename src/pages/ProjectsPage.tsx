import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectsList from '../components/projects/ProjectsList';
import IntroSection from '../components/pages/projects/IntroSection';
import PageTitle from '../components/ui/PageTitle';

const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tech))
).sort();

const ProjectsPage = () => {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    if (activeFilters.size === 0) return projects;
    return projects.filter((p) =>
      [...activeFilters].every((tag) => p.tech.includes(tag))
    );
  }, [activeFilters]);

  const toggle = (tag: string) =>
    setActiveFilters((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });

  const clear = () => setActiveFilters(new Set());

  return (
    <div>
      <PageTitle title='Projects' />
      <IntroSection />
      <ProjectsList
        projects={filtered}
        filters={
          <ProjectFilters
            tags={allTags}
            active={activeFilters}
            onToggle={toggle}
            onClear={clear}
          />
        }
      />
    </div>
  );
};

export default ProjectsPage;
