import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <LiquidButton
      onClick={toggle}
      size="icon"
      className="h-8 w-8 text-muted-foreground hover:text-foreground"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="h-3.5 w-3.5" />
      ) : (
        <Moon className="h-3.5 w-3.5" />
      )}
    </LiquidButton>
  );
}
