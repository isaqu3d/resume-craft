import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  Dialog as DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./primitive";

export type BaseDialogProps = {
  open?: boolean;
  setIsOpen?: (open: boolean) => void;
  children?: React.ReactNode;
};

type DialogProps = BaseDialogProps & {
  title: string;
  description?: string;
  content: React.ReactNode;
};

export function Dialog({
  title,
  description,
  content,
  open,
  setIsOpen,
  children,
}: DialogProps) {
  return (
    <>
      <DialogRoot open={open} onOpenChange={setIsOpen}>
        {children && <DialogTrigger asChild>{children}</DialogTrigger>}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>

          {content}
        </DialogContent>
      </DialogRoot>
    </>
  );
}
