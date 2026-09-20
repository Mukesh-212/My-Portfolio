import { FolderOpen } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import EmptyState from "@/components/ui/EmptyState";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="py-28 bg-section-primary" aria-label="Projects section">
      <div className="container-portfolio">
        <div className="section-divider mb-20" />

        <AnimatedSection>
          <SectionHeader
            label="Work"
            title="Projects"
            subtitle={
              hasProjects
                ? "Things I've built."
                : "Projects will appear here as they are completed."
            }
            className="mb-12"
          />
        </AnimatedSection>

        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.1}>
            <EmptyState
              icon={<FolderOpen size={22} />}
              title="No projects yet"
              message="Projects are currently in progress and will be showcased here soon."
            />
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
