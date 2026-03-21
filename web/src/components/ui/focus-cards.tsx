import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

type CardType = {
  title: string;
  src: string;
};

function Lightbox({ card, onClose }: { card: CardType; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        onClick={onClose}
      >
        <X className="w-7 h-7" />
      </button>
      <img
        src={card.src.normalize('NFC')}
        alt={card.title}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function CarouselCard({ card, onClick }: { card: CardType; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative rounded-xl overflow-hidden cursor-pointer group bg-neutral-900 aspect-[4/5] w-full select-none"
    >
      <img
        src={card.src.normalize('NFC')}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 pr-8 pb-6 flex justify-end">
        <p className="text-white font-semibold text-sm md:text-base drop-shadow" style={{ fontFamily: '"Yekan", system-ui, sans-serif' }}>{card.title}</p>
      </div>
    </div>
  );
}

const GAP = 16;
const AUTO_PLAY_MS = 4500;

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<CardType | null>(null);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload all images so the browser doesn't skip hidden carousel cards
  useEffect(() => {
    cards.forEach((card) => {
      const img = new Image();
      img.src = card.src.normalize('NFC');
    });
  }, [cards]);

  const updateLayout = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    const vc = w >= 768 ? 3 : w >= 480 ? 2 : 1;
    setVisibleCount(vc);
    setCardWidth((w - GAP * (vc - 1)) / vc);
  }, []);

  useLayoutEffect(() => {
    updateLayout();
    const ro = new ResizeObserver(updateLayout);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [updateLayout]);

  const maxIndex = Math.max(0, cards.length - visibleCount);

  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex],
  );

  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  // Reset when card list changes
  useEffect(() => {
    setIndex(0);
  }, [cards.length]);

  const translateX = cardWidth ? index * (cardWidth + GAP) : 0;
  const totalPages = maxIndex + 1;

  return (
    <>
      <div
        dir="ltr"
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left / Prev arrow */}
        <button
          onClick={prev}
          className={cn(
            "absolute left-0 top-1/2 z-10",
            "-translate-y-[calc(50%+16px)] -translate-x-1/2",
            "w-9 h-9 rounded-full bg-background/80 border border-border/60 backdrop-blur-sm shadow-md",
            "flex items-center justify-center transition-all duration-200",
            "hover:bg-background hover:border-border hover:scale-110 active:scale-95",
          )}
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Carousel track */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ gap: GAP, transform: `translateX(-${translateX}px)` }}
          >
            {cards.map((card) => (
              <div key={card.src.normalize('NFC')} style={{ width: cardWidth, flexShrink: 0 }}>
                <CarouselCard card={card} onClick={() => setSelected(card)} />
              </div>
            ))}
          </div>
        </div>

        {/* Right / Next arrow */}
        <button
          onClick={next}
          className={cn(
            "absolute right-0 top-1/2 z-10",
            "-translate-y-[calc(50%+16px)] translate-x-1/2",
            "w-9 h-9 rounded-full bg-background/80 border border-border/60 backdrop-blur-sm shadow-md",
            "flex items-center justify-center transition-all duration-200",
            "hover:bg-background hover:border-border hover:scale-110 active:scale-95",
          )}
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "rounded-full transition-all duration-300",
                i === index
                  ? "w-5 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground",
              )}
            />
          ))}
        </div>
      </div>

      {selected && (
        <Lightbox card={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
