import { cn } from "@/lib/utils";
import { Label } from "./label";

type FieldWrapperProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export function FieldWrapper({
  label,
  children,
  className,
}: FieldWrapperProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}
