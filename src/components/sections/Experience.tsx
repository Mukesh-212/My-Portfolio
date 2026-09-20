import { Briefcase } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceItem from "@/components/ui/ExperienceItem";
import EmptyState from "@/components/ui/EmptyState";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const hasExperience = experience.length > 0;

  return (
    <section id="experience" className="py-28 bg-section-secondary" aria-label="Experience section">
      <div className="container-portfolio">
        <div className="section-divider mb-20" />

        <AnimatedSection>
          <SectionHeader
            label="Experience"
            title="Professional Experience"
            subtitle={
              hasExperience
                ? "Where I've worked and what I've done."
                : "Professional experience will be listed here."
            }
            className="mb-12"
          />
        </AnimatedSection>

        {hasExperience ? (
          <div className="max-w-2xl">
            {experience.map((item, i) => (
              <AnimatedSection key={`${item.organization}-${i}`} delay={i * 0.1}>
                <ExperienceItem item={item} isLast={i === experience.length - 1} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.1}>
            <EmptyState
              icon={<Briefcase size={22} />}
              title="No experience listed yet"
              message="Professional experience will be added as my journey develops."
            />
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
