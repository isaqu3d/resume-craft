import { Separator } from "@/ui/separator";
import { LayoutSection } from "./sections/layout";
import { TemplatesListSection } from "./sections/templates-list";

export function StructureSidebar() {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <TemplatesListSection />
      <Separator className="my-5" />
      <LayoutSection />
    </aside>
  );
}
