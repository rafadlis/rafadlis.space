"use client";

import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { GearSix, Sun, Moon, Translate } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
export default function SettingsMenu() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full shadow-lg bg-secondary-foreground hover:bg-secondary-foreground/80 hover:shadow-sm transition-all duration-200 text-secondary hover:text-secondary border-none"
          >
            <GearSix weight="bold" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="mr-1" />
            ) : (
              <Sun className="mr-1" />
            )}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Translate className="mr-1" />
            Language
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
