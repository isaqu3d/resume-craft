"use client";

import { cn } from "@/lib/utils";
import { Newspaper, SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export function NavItems() {
  const pathname = usePathname();

  const navitems = [
    {
      id: 1,
      title: "Curriculos",
      icon: Newspaper,
      path: "/dashboard/resumes",
    },

    {
      id: 2,
      title: "Configurações de Conta",
      icon: SquareUser,
      path: "/dashboard/accont",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2 px-2 py-4">
      {navitems.map((item) => {
        const isActive = pathname.startsWith(item.path);

        return (
          <Link key={item.id} href={item.path}>
            <Button
              variant="ghost"
              className={cn(
                "w-full gap-2 justify-start",
                isActive && "bg-accent"
              )}
            >
              <item.icon size={16} />
              {item.title}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
