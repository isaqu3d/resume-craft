import Link from "next/link";

type ResumeCardButtonProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export const ResumeCardButton = ({
  title,
  description,
  icon,
}: ResumeCardButtonProps) => {
  return (
    <button className="w-full h-[300px] bg-muted/50 rounded border border-muted-foreground/20 flex items-center justify-center relative outline-none overflow-hidden hover:brightness-105 dark:hover:brightness-125 transition-all">
      {icon}

      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </button>
  );
};

export function ResumeCard() {
  return (
    <Link href="/dashboard/resumes/example" className="block w-full">
      <ResumeCardButton
        title="Meu curriculo"
        description="Ultima atualização há 22 minutos"
      />
    </Link>
  );
}
