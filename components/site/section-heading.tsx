import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto text-center")}>
      <Badge variant="secondary" className="w-fit rounded-full px-4 py-1.5">
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="section-heading">{title}</h2>
        <p className="section-copy">{description}</p>
      </div>
    </div>
  );
}
