import { BaseDialogProps, Dialog } from "@/components/ui/dialog";

export function NewResumeDialog(props: BaseDialogProps) {
  return (
    <Dialog
      {...props}
      title="Criar novo curriculo"
      description="Para começar, escolha um título para seu curriculo"
      content={<form></form>}
    ></Dialog>
  );
}
