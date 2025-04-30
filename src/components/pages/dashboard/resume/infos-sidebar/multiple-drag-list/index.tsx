import { LucideIcon } from "lucide-react";
import { SectionTitle } from "../section-title";

export type ResumeArrayKeys = Exclude<
  keyof ResumeContentData,
  "image" | "infos" | "summary"
>;

export type MultipleDragLisData = {
  formKey: ResumeArrayKeys;
  title: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
};

type MultipleDragListProps = {
  data: MultipleDragLisData;
  onAdd: () => void;
  onEdit: (index: number) => void;
};

export function MultipleDragList({
  data,
  onAdd,
  onEdit,
}: MultipleDragListProps) {
  return (
    <div>
      <SectionTitle title={data.title} icon={data.icon} />
    </div>
  );
}
