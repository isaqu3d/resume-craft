import Logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { AiGenerationDropdown } from "./ai-generation-dropdown";

export function InfosSidebar() {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <div className="w-full flex items-center justify-between">
        <Link href="/dashboard/resumes">
          <Logo className="w-full max-w-[80px]" />
        </Link>
        <AiGenerationDropdown />
      </div>
    </aside>
  );
}
