import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function AiGenerationDropdown() {
  return (
    <Button className="gap-2 text-xs px-2.5 p-1 h-9">
      <Bot size={20} />
      Intelegẽncia Artificial
    </Button>
  );
}
