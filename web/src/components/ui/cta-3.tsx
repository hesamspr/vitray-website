import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y border-border bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--foreground)/0.08),transparent)] px-4 py-8">
      {/* Corner plus markers */}
      <PlusIcon className="absolute top-[-12.5px] left-[-11.5px] z-10 size-6" strokeWidth={1} />
      <PlusIcon className="absolute top-[-12.5px] right-[-11.5px] z-10 size-6" strokeWidth={1} />
      <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-10 size-6" strokeWidth={1} />
      <PlusIcon className="absolute right-[-11.5px] bottom-[-12.5px] z-10 size-6" strokeWidth={1} />

      {/* Side border lines that extend slightly beyond the box */}
      <div className="pointer-events-none absolute -top-6 -bottom-6 left-0 w-px border-l border-border" />
      <div className="pointer-events-none absolute -top-6 -bottom-6 right-0 w-px border-r border-border" />

      {/* Center dashed divider */}
      <div className="pointer-events-none absolute -z-10 top-0 left-1/2 h-full border-l border-dashed border-border" />

      <div className="space-y-1">
        <h2 className="text-center font-bold text-2xl">
          این یک تغییر سخت نیست٬ یک شروع آسان است
        </h2>
        <p className="text-center text-muted-foreground">
          همین امروز با تیم فروش ما صحبت کنید و اولین قدم را بردارید.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button asChild>
          <a href="#contact">تماس با فروش</a>
        </Button>
      </div>
    </div>
  );
}
