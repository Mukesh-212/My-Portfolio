import type { Experience } from "@/types";

interface ExperienceItemProps {
  item: Experience;
  isLast: boolean;
}

export default function ExperienceItem({ item, isLast }: ExperienceItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center pt-1">
        {/* Dot */}
        <div
          className="w-2.5 h-2.5 rounded-full border-2 flex-shrink-0"
          style={{
            background: "var(--color-bg)",
            borderColor: "var(--color-accent)",
          }}
        />
        {/* Vertical line */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: "var(--color-border)" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h3
            className="text-base font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            {item.role}
          </h3>
          <span className="label-mono" style={{ color: "var(--color-accent)" }}>
            {item.organization}
          </span>
        </div>
        <p className="label-mono mb-3">{item.duration}</p>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
