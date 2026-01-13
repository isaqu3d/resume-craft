import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";

import { LogOut, SquareUser } from "lucide-react";
import Link from "next/link";
import { Button } from "@/ui/button";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full gap-2 justify-start px-2">
          <Avatar className="w-7 h-7 block">
            <AvatarImage src="https://github.com/isaqu3d.png" />
            <AvatarFallback>Is</AvatarFallback>
          </Avatar>
          <p>Isaque de Sousa</p>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} />
            Configurações da conta
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="gap-2 text-red-500 focus:text-red-600">
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
