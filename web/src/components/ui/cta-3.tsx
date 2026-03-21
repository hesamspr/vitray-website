import { useState } from 'react';
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/ui/consultation-modal";
import { ShineBorder } from "@/components/ui/shine-border";

export function CallToAction() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
          <ShineBorder
            borderRadius={8}
            borderWidth={1}
            duration={8}
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className="p-0 bg-transparent dark:bg-transparent"
          >
            <Button onClick={() => setModalOpen(true)} className="bg-black text-white hover:bg-black/90">
              درخواست مشاوره
            </Button>
          </ShineBorder>
        </div>
      </div>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
