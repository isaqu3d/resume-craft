import { TemplatesListSection } from "./sections/templates-list";

export function StructureSidebar() {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <TemplatesListSection />
    </aside>
  );
}
