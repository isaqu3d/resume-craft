import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resume-card";

export function AddResumeButton() {
  return (
    <ResumeCardButton
      title="Criar novo curriculo"
      description="Comece do zero"
      icon={<Plus size={50} />}
    />
  );
}
