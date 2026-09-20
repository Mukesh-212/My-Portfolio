import { Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CertCard from "@/components/ui/CertCard";
import EmptyState from "@/components/ui/EmptyState";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  const hasCerts = certifications.length > 0;

  return (
    <section id="certifications" className="py-28 bg-section-secondary" aria-label="Certifications section">
      <div className="container-portfolio">
        <div className="section-divider mb-20" />

        <AnimatedSection>
          <SectionHeader
            label="Credentials"
            title="Certifications"
            subtitle={
              hasCerts
                ? "Courses and certifications I've completed."
                : "Certifications will appear here as they are earned."
            }
            className="mb-12"
          />
        </AnimatedSection>

        {hasCerts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <CertCard key={cert.name} cert={cert} index={i} />
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.1}>
            <EmptyState
              icon={<Award size={22} />}
              title="No certifications yet"
              message="Certifications and completed courses will be listed here as they are earned."
            />
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
