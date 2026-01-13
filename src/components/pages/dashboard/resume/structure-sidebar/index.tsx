import { Separator } from "@/ui/separator";
import { LanguageSection } from "./sections/language";
import { LayoutSection } from "./sections/layout";
import { TemplatesListSection } from "./sections/templates-list";
import { ThemeSection } from "./sections/theme";

export function StructureSidebar() {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <TemplatesListSection />
      <Separator className="my-5" />
      <LayoutSection />
      <Separator className="my-5" />
      <ThemeSection />
      <Separator className="my-5" />
      <LanguageSection />
    </aside>
  );
}
