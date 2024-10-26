"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return null;

  return (
    <Switch
      onCheckedChange={(checked: boolean) =>
        setTheme(checked ? "dark" : "light")
      }
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </Switch>
  );
}
