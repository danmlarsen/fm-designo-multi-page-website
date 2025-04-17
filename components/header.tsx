import { cn } from "@/lib/utils";
import Logo from "./logo";
import Navigation from "./navigation";
import MobileNav from "./mobile-nav";

export default function Header({
  className,
  mode = "dark",
}: React.ComponentProps<"header"> & { mode?: "dark" | "light" }) {
  return (
    <header
      className={cn(
        "flex items-center justify-between",
        className,
        mode === "light" && "text-white",
      )}
    >
      <Logo mode={mode} />
      <div className="hidden md:block">
        <Navigation />
      </div>
      <MobileNav />
    </header>
  );
}
