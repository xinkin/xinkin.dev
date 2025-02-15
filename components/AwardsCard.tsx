import { Awards } from "@/lib/types";
import { parseISO } from "@/lib/utils";
import { cn } from "@/lib/utils";

export interface AwardsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
 awards: Awards[];
}

export function AwardsSection({ awards, className, ...props }: AwardsSectionProps) {
 return (
  <div className={cn("space-y-8", className)} {...props}>
   {awards.map((award) => (
    <div key={award.name} className={cn("mb-6 overflow-hidden duration-200 motion-reduce:transition-none", className)}>
     <h3 className="mb-2 text-xl font-semibold tracking-[-0.03em]">{award.name}</h3>
     <time className="my-2 block text-sm font-normal leading-none text-neutral-500 dark:text-neutral-500" dateTime={award.date}>
      {parseISO(award.date)}
     </time>
     <p className="mb-4 mt-2 text-neutral-700 dark:text-neutral-400 md:w-3/4">{award.description}</p>
    </div>
   ))}
  </div>
 );
}
