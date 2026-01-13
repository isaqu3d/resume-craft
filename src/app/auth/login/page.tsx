import Logo from "@/app/assets/logo.svg";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import Image from "next/image";

// import { signIn } from "@/lib/auth";
import { Button } from "@/ui/button";
import { Chrome, Github } from "lucide-react";

// type Providers = "github" | "google";

export default function LoginPage() {
  // const handleLogin = async (form: FormData) => {
  //   "use server";

  //   const provider = form.get("provider") as Providers;

  //   await signIn(provider, { redirectTo: "/dashboard/resumes" });
  // };

  return (
    <div className="grid grid-cols-[1.5fr,1fr] h-screen">
      <aside>
        <Image
          width={1000}
          height={800}
          src="/images/auth-bg.webp"
          alt="Escritório com vários currículos espalhados por todas as mesas."
          className="w-full h-full object-cover"
          quality={100}
        />
      </aside>

      <form className="p-10 flex justify-center flex-col">
        <div className="flex items-center justify-between mb-10">
          <Logo className="max-w-[90px]" />

          <ThemeToggle />
        </div>

        <h1 className="text-2xl font-title font-bold">Entre em sua conta</h1>
        <p className="text-sm text-muted-foreground">
          Caso não tenha conta, ela será criada automaticamente.
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <Button
            variant="outline"
            className="w-full gap-2"
            type="submit"
            name="provider"
            value="github"
          >
            <Github size={20} />
            Entrar com GitHub
          </Button>
          <Button
            className="w-full gap-2"
            type="submit"
            name="provider"
            value="google"
          >
            <Chrome size={20} />
            Entrar com Google
          </Button>
        </div>
      </form>
    </div>
  );
}
