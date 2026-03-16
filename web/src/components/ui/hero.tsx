import { ShaderAnimation } from "@/components/ui/shader-animation";

export const PremiumHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ShaderAnimation />

      <div className="relative z-20 flex h-screen w-full items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl flex flex-col gap-6">
          <span>قبل از دیگران ببینید،</span>
          <span>قبل از دیگران اقدام کنید.</span>
        </h1>
      </div>
    </div>
  );
};
