"use client"

import { motion } from "motion/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { GearSix, Sun, Moon, Translate } from "@phosphor-icons/react/dist/ssr"
import { useTheme } from "next-themes"

export default function SettingsMenu() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const MotionButton = motion.create(Button)
  const MotionDropdownMenuItem = motion.create(DropdownMenuItem)

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MotionButton size="icon" variant="default">
            <GearSix weight="bold" />
          </MotionButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <MotionDropdownMenuItem
            className="cursor-pointer group flex items-center"
            onClick={toggleTheme}
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {theme === "light" ? (
              <Moon className="group-hover:animate-pulse" />
            ) : (
              <Sun className="group-hover:animate-pulse" />
            )}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </MotionDropdownMenuItem>
          <MotionDropdownMenuItem
            className="cursor-pointer group flex items-center"
            onClick={toggleTheme}
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Translate className="group-hover:animate-pulse" />
            Language
          </MotionDropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  )
}
